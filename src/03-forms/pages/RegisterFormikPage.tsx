import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import { MyTextInput } from '../components';

import '../styles/styles.css'



export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
            initialValues = {{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={ ( values ) => {
                console.log( values )
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                                .min(2, 'Must contains at least 2 letters')
                                .max(15, 'Must contain 15 characters or less')
                                .required('Required'),
                    email: Yup.string()
                                .email('Email is not valid')
                                .required('Required'),
                    password1: Yup.string()
                                .min(6, 'Must contains at least 6 characters')
                                .required('Required'),
                    password2: Yup.string()
                                .min(6, 'Must contains at least 6 characters')
                                .oneOf([Yup.ref('password1')], 'Passwords are not the same')
                                .required('Required'),
                })
            }
        >
            {
                ({ handleReset }) => {
                    return(
                        <Form>
                            <MyTextInput label='Name' name='name' placeholder='Name' />
                            <MyTextInput type='email' label='Email' name='email' placeholder='Email' />
                            <MyTextInput type='password' label='Password' name='password1' placeholder='Password' />
                            <MyTextInput type='password' label='Password' name='password2' placeholder='Repeat password' />

                            <button type='submit'> Submit </button>
                            <button onClick={ handleReset } type='button'> Reset </button>
                        </Form>
                    );
                }
            }
        </Formik>

    </div>
  )
}
