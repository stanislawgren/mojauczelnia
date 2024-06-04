import logoWithoutName from "./../assets/logoWithoutName.svg";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import cameraIcon from './../assets/camera-icon.svg';
import { UserAvatar } from "../components/placeholders/UserAvatar";
import { Avatar } from "@mui/material";

interface ProfileFormData {
    username: string;
    email: string;
    currentPassword: string;
    newPassword: string;
}

export const UserProfilePage = () => {
    const [formData, setFormData] = useState<ProfileFormData>({
        username: '',
        email: '',
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitting form data:', formData);
        // Here you would typically handle form submission, like sending data to a server
    };

    return (
        <div className="user-profile-page">
            <div className="sidebar">
                <img src={logoWithoutName} alt="Logo" className="logoWithoutName" />
                <ul>
                    <li className="settings-item"><Link to="/">Ustawienia</Link></li>
                    <li><Link to="/edit-profile">Edycja profilu</Link></li>
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
                    <input
                        type="email"
                        name="email"
                        className="main-input"
                        placeholder="E-Mail"
                        value={formData.email}
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
