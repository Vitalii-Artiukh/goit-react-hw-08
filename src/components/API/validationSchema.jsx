import * as Yup from 'yup';

export const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name too short!')
    .max(50, 'Name too long!')
    .required('Name is required!'),
  number: Yup.string()
    .min(3, 'Phone number is too short!')
    .max(50, 'Phone number is too long!')
    .required('Phone number is required!'),
});

export const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name too short!')
    .max(50, 'Name too long!')
    .required('Name is required!'),
  email: Yup.string()
    .email()
    .min(5, 'Email too short!')
    .max(50, 'Email too long!')
    .required('Email is required!'),
  password: Yup.string()
    .min(7, 'Password too short!')
    .max(30, 'Password too long!')
    .required('Password is required!'),
});
