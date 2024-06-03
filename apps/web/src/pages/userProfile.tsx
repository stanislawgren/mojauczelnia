import logoWithoutName from "./../assets/logoWithoutName.svg";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import cameraIcon from './../assets/camera-icon.svg';
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

interface ProfileFormData {
    username: string;
    universityID: string;
    currentPassword: string;
    newPassword: string;
}

export const UserProfilePage = () => {
    const auth = useAuth();
    const [formData, setFormData] = useState<ProfileFormData>({
        username: '',
        universityID: '',
        currentPassword: '',
        newPassword: ''
    });

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
            email: auth.user?.email
        };

        try {
            const response = await axios.put('http://localhost:3000/auth/change_user_data', updatedFormData);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('err:', error);
        }
    };
    

    return (
        <div className="user-profile-page">
            <div className="sidebar">
                <img src={logoWithoutName} alt="Logo" className="logoWithoutName" />
                <ul>
                    <li className="settings-item"><Link to="/">Ustawienia</Link></li>
                    <li><Link to="/profile">Edycja profilu</Link></li>
                    <li><Link to="/settings">Ustawienia powiadomień</Link></li>
                    <li><Link to="/security">Bezpieczeństwo</Link></li>
                    <li><Link to="/help">Pomoc</Link></li>
                </ul>
            </div>  
            
            <hr className="separator"/>
            

            <div className="form-container">
                <h1>Edytuj profil</h1>

                <div className="profile-photo-container">
                    <button className="edit-photo-button">
                        <img src={cameraIcon} alt="Edytuj zdjęcie" />
                    </button>
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
                    <input
                        type="number"
                        name="universityID"
                        className="main-input"
                        placeholder="ID uczelni"
                        value={formData.universityID}
                        onChange={handleInputChange}
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
