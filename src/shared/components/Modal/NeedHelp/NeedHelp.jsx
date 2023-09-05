import PropTypes from 'prop-types';
import {
  TitleHelp,
  StyledForm,
  FormField,
  InputField,
  SendButton,
  Textarea,
} from './NeedHelp.styled';
import { Formik, Form, ErrorMessage } from 'formik';
import { toast } from "react-toastify"; 

function NeedHelp({ onClose }) {
  
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`https://taskpro-backend-c73a.onrender.com/api/auth/help`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send email.');
      }

      const responseData = await response.json();
      toast.success(responseData.message); 
      onClose(); 
    } catch (error) {
      console.error('Error:', error);
      toast.error(`Error: ${error.message}`); 
    }

    setSubmitting(false); 
  };

  return (
    <>
      <TitleHelp>Need help</TitleHelp>
      <Formik
        initialValues={{
          email: '',
          comment: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form as={StyledForm}>
            <FormField>
              <InputField
                autoFocus
                name='email'
                type='email'
                placeholder='Email address'
              />
              <ErrorMessage name='email' component='div' />
            </FormField>
            <FormField>
              <Textarea
                name='comment'
                component='textarea'
                placeholder='Comment'
              />
              <ErrorMessage name='comment' component='div' />
            </FormField>
            <SendButton type="submit" disabled={isSubmitting}>
              Send
            </SendButton>
          </Form>
        )}
      </Formik>
    </>
  );
}

NeedHelp.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NeedHelp;
