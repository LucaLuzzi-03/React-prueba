import { Formik, Form, } from 'formik'
import * as Yup from 'yup'

import { MyCheckbox, MyTextInput, MySelect } from '../components'

import '../styles/styles.css'



export const FormikAbstract = () => {

  return (
    <div>
        <h1>Formik Abstract</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ ( values ) => {
                console.log( values )
            } }
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                .max(15, 'Must contain 15 characters or less')
                                .required('Required'),
                    lastName: Yup.string()
                                .max(15, 'Must contain 15 characters or less')
                                .required('Required'),
                    email: Yup.string()
                                .email('Email is not valid')
                                .required('Required'),
                    terms: Yup.boolean()
                                .oneOf([true], 'Must accept terms and conditions'),
                    jobType: Yup.string()
                                .notOneOf(['it-jr'], 'This option is not valid for now')
                                .required('Required')
                })
            }
        >

            { ( formik ) => {
                  return (
                      <Form>

                          <MyTextInput label='First Name' name='firstName' placeholder='Fernando' />

                          <MyTextInput label='Last Name' name='lastName' placeholder='Herrera' />

                          <MyTextInput label='Email Address' name='email' placeholder='example@gmail.com' type='email' />

                          <MySelect label='Job Type' name='jobType'>
                              <option value="">-- Pick something --</option>
                              <option value="developer">Developer</option>
                              <option value="designer">Designer</option>
                              <option value="it-senior">IT Senior</option>
                              <option value="it-jr">IT Jr.</option>
                          </MySelect>

                          <MyCheckbox label='Terms & Conditions' name='terms' />

                          <button type='submit'> Submit </button>

                      </Form>
                  )
              }
            }

        </Formik>


    </div>
  )
}
