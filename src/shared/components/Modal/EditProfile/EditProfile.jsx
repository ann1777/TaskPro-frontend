import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from "../../../../redux/auth/authSelectors";
import { Formik, Form } from 'formik';
import { updateUserProfile } from "../../../../redux/auth/operations";
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
    const dispatch = useDispatch();
    
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

    const handleSubmit = async (values) => {
        try {
            const actionResult = await dispatch(updateUserProfile({
                name: values.name,
                avatarFile: selectedFile
            }));

            if (updateUserProfile.fulfilled.match(actionResult)) {
                onCloseModal();
            } else {
                console.error('Error:', actionResult.payload);
            }
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