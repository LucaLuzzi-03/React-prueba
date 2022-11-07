import { useForm } from '../hooks/useForm';

import '../styles/styles.css'


export const RegisterPage = () => {

    const { name, email, password1, password2, onSubmit, onChange, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });


  return (
    <div>
        <h1>Register page</h1>

        <form onSubmit={ (e) => onSubmit(e) } >

            <input
                type="text"
                placeholder="Name"
                value={ name }
                name='name'
                onChange={ onChange }
                className={ `${ name.trim().length <= 0 && 'has-error' }` }
            />
            { name.trim().length <= 0 && <span>This field is obligatory</span> }

            <input
                type="email"
                placeholder="Email"
                value={ email }
                name='email'
                onChange={ onChange }
                className={ `${ !isValidEmail( email ) && 'has-error' }` }
            />
            { !isValidEmail( email ) && <span>Email is not valid</span> }

            <input
                type="password"
                placeholder="Password"
                value={ password1 }
                name='password1'
                onChange={ onChange }
            />
            { password1.trim().length <= 0 && <span>This field is obligatory</span> }
            { password1.trim().length < 6 && password1.trim().length > 0 && <span>Password must contain more than 6 letters</span> }

            <input
                type="password"
                placeholder="Repeat password"
                value={ password2 }
                name='password2'
                onChange={ onChange }
            />
            { password2.trim().length <= 0 && <span>This field is obligatory</span> }
            { password2.trim().length > 0 && password1 !== password2 && <span>Passwords must be equal</span> }


            <button type="submit" > Create </button>

            <button onClick={ resetForm } type="button" > Reset Form </button>

        </form>
    </div>
  )
}
