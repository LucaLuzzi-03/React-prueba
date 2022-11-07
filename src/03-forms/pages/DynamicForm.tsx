import { Formik, Form } from 'formik'
import { MySelect, MyTextInput } from '../components'
import formJson from '../data/custom-form.json'
import * as Yup from 'yup'


const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {}

for (const input of formJson) {
    initialValues[ input.name ] = input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string();

    for ( const rule of input.validations ) {
        if ( rule.type === 'required' ) {
            schema = schema.required('This field is required');
        }

        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, `This field must contains more than ${(rule as any).value || 2}`);
        }

        if ( rule.type === 'email' ) {
            schema = schema.email('Email is not valid');
        }

        //  Other rules...

    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });



export const DynamicForm = () => {
  return (
    <div>
        <h1>DynamicForm</h1>

        <Formik
            initialValues= { initialValues }
            onSubmit={ (values) => {
                console.log(values)
            }}
            validationSchema={ validationSchema }
        >
            { (formik) => (
                <Form noValidate>
                    {
                        formJson.map( ({ label, name, placeholder, type, options }) => {

                            if ( type === 'input' || type === 'password' || type === 'email' ) {
                                return (
                                <MyTextInput 
                                    key={ name } 
                                    type={ type as any } 
                                    label={ label } 
                                    name={ name } 
                                    placeholder={ placeholder } />)

                            } else if ( type === 'select' ) {
                                return (
                                <MySelect
                                    key={ name }
                                    label={ label }
                                    name={ name }
                                >
                                    <option value='' >-- Select any game --</option>
                                    {
                                        options?.map( ({ id, label }) => (
                                            <option key={ id } value={ id } >{ label }</option>
                                        ) )
                                    }
                                </MySelect>
                                )
                            }

                            throw new Error(`El type: ${ type }, no es soportado`);
                        })}

                    <button type='submit' >Submit</button>

                </Form>
            )}
        </Formik>
    </div>
  )
}
