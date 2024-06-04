import logoWithoutName from "./../assets/logoWithoutName.svg";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import cameraIcon from './../assets/camera-icon.svg';
import axios from "axios";
import { useAuth } from "../hooks/useAuth";
import { UserAvatar } from "../components/placeholders/UserAvatar";
import { Avatar } from "@mui/material";
import { MultiAutocomplete } from "../Facade/MultiAutocomplete";
import { getAcademies, getAllAcademies } from "../services/searchService";
import { IAcademy } from ".";

interface ProfileFormData {
    username: string;
    universityID: string;
    currentPassword: string;
    newPassword?: string;
    universityName: string | null;
}

export const UserProfilePage = () => {
    const auth = useAuth();
    const [formData, setFormData] = useState<ProfileFormData>({
        username: '',
        universityID: '',
        currentPassword: '',
        newPassword: '',
        universityName: null
    });
    const [academies, setAcademies] = useState<IAcademy[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitting form data:', formData);

        const updatedFormData = {
            ...formData,
            universityID: academies.find(a=>a.academy_name === formData.universityName)?.academy_id,
            email: auth.user?.email
        };

        if (!updatedFormData.newPassword || updatedFormData.newPassword === '') {
            delete updatedFormData.newPassword
        } 

        try {
            const response = await axios.put('http://localhost:3000/auth/change_user_data', updatedFormData);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('err:', error);
        }
    };

    const handleStateChange = (name: string, newValue: string[] | string | null) => {
        console.log(name, newValue);
        setFormData((prevState) => ({
            ...prevState,
            [name]: newValue,
        }));
    };

    const getAcademies = async () => {
        const res = await getAllAcademies({schools: '', cities: []}) as {academies?: IAcademy[]};

        if (res.academies) {
            setAcademies(res.academies);
          }
      };
    
      useEffect(() => {
        getAcademies();
      }, []);

      const academiesNames = academies.reduce((acc, a) => {
        acc.push(a.academy_name);
        return acc;
    }, [] as string[]);

    useEffect(() => {
        const a = academies.find((a) => a.academy_id === auth.user?.academy_id)?.academy_name
        a ? handleStateChange('universityName', a!) : null
    }, [academies, auth.user])

    useEffect(() => {
        if (auth.user) {
            setFormData((prevState) => ({
                ...prevState,
                username: auth.user!.user_name
            }));
        }
      }, [auth.user]);
    
    return (
        <div className="user-profile-page">
            <div className="sidebar">

                <Link to="/">
                <img src={logoWithoutName} alt="Logo" className="logoWithoutName" />
                </Link>

                <ul>
                    <li className="settings-item"><Link to="/">Ustawienia</Link></li>
                    <li><Link to="/profile">Edycja profilu</Link></li>
                    <li><Link to="/settings">Ustawienia powiadomień</Link></li>
                    <li><Link to="/security">Bezpieczeństwo</Link></li>
                    <li><Link to="/help">Pomoc</Link></li>
                </ul>
            </div>

            <hr className="separator" />

            <div className="form-container">
                <div className="profile-photo-container">
                    <Avatar alt="Remy Sharp" src="https://avatar.iran.liara.run/public/boy?username=Ash" sx={{ width: 120, height: 120 }} />
                </div>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        className="main-input"
                        placeholder="Nazwa użytkownika"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    <MultiAutocomplete
                        values={formData.universityName}
                        options={academiesNames}
                        stateKey={"universityName"}
                        handleChange={handleStateChange}
                        multiple={false}
                    />
                    <input
                        type="password"
                        name="currentPassword"
                        className="main-input"
                        placeholder="Aktualne hasło"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="newPassword"
                        className="main-input"
                        placeholder="Nowe hasło"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                    />
                    <button className="blue-button" type="submit">Zapisz</button>
                </form>
            </div>
        </div>
    );
};
