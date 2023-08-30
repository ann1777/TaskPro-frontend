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

export const EditProfile = ({onCloseModal}) => {
    const [showPassword, setShowPassword] = useState(false);
    const { name: initialName, avatarURL } = useSelector(selectUser);
    const [name, setName] = useState(initialName); 

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (values) => {
        try {
            const token = localStorage.getItem('accessToken');
            
            const response = await axios.put(
                'https://taskpro-backend-c73a.onrender.com/api/auth/update',
                { name: values.name }, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            console.log('Response:', response.data);
            onCloseModal()
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (
        <WindowContaier>
            <ModalTitle>Edit Profile</ModalTitle>
            <AvatarWrapper>
                <AvatarImg src={avatarURL || avatarImg} alt="avatar" />
                <FileInputWrapper>
                    <FileInput type="file" accept="image/jpeg, image/png, image/gif" />
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
                            required 
                            onChange={handleChange} 
                        />
                        <label style={{ position: 'relative' }}>
                            <ProfileInput 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                placeholder="Password"  
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