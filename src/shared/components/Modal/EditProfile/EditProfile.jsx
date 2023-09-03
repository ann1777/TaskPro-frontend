import { useState } from "react";
import { useSelector } from 'react-redux';
import { selectUser } from "../../../../redux/auth/authSelectors";
import { Formik, Form } from 'formik';
import axios from 'axios'; 
import avatarImg from '../../../images/user-zaglushka.png';
import {
    WindowContaier,
    ModalTitle,
    AvatarWrapper,
    AvatarImg,
    FileInputWrapper,
    FileInput,
    ProfileInput,
    SendButton,
    StyledEyeIcon,  
    StyledEyeIconVis 
} from './EditProfile.styled';

export const EditProfile = ({ onCloseModal }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { name: initialName, avatarURL, email } = useSelector(selectUser);
    
    const [name, setName] = useState(initialName); 
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadToCloudinary = async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'thb4n5sd');

        const response = await fetch('https://api.cloudinary.com/v1_1/doc0gvy9u/upload', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        return data.secure_url; 
    };

    const handleSubmit = async (values) => {
        try {
            let imageUrl = avatarURL; 
            if (selectedFile) {
                imageUrl = await uploadToCloudinary(selectedFile);
            }

            const token = localStorage.getItem('accessToken');
            await axios.put(
                'https://taskpro-backend-c73a.onrender.com/api/auth/updatedata',
                { 
                    name: values.name, 
                    avatarURL: imageUrl
                }, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            onCloseModal();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <WindowContaier>
            <ModalTitle>Edit Profile</ModalTitle>
            <AvatarWrapper>
                <AvatarImg src={selectedImage || avatarURL || avatarImg} alt="avatar" />
                <FileInputWrapper>
                    <FileInput 
                        type="file" 
                        accept="image/jpeg, image/png, image/gif"
                        onChange={handleImageChange}
                    />
                    +
                </FileInputWrapper>
            </AvatarWrapper>
            <Formik
                initialValues={{
                    name: name,
                }}
                onSubmit={(values, actions) => {
                    handleSubmit(values);
                    actions.setSubmitting(false); 
                }}
            >
                {({ isSubmitting, handleChange }) => (
                    <Form>
                        <ProfileInput 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            required 
                            value={name}
                            onChange={(e) => {
                                handleNameChange(e);
                                handleChange(e);
                            }} 
                        />
                        <ProfileInput 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            value={email}
                            disabled    
                        />
                        <label style={{ position: 'relative' }}>
                            <ProfileInput 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                placeholder="Password"
                                value='********'
                                disabled    
                            />
                            <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={handleTogglePassword}>
                                {showPassword ? <StyledEyeIcon /> : <StyledEyeIconVis />}
                            </span>
                        </label>
                        <SendButton type="submit" disabled={isSubmitting}>Send</SendButton>
                    </Form>
                )}
            </Formik>
        </WindowContaier>
    );
};