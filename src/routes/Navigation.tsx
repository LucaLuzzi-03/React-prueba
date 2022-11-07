import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { DynamicForm, FormikAbstract, FormikBasicPage, FormikComponents, FormikYupPage, RegisterFormikPage } from '../03-forms/pages';

import logo from '../assets/react.svg';
  
  
  export const Navigation = () => {
    return (
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" style={{ width: '125px', marginTop: '25px' }} />
            <ul>
              <li>
                <NavLink to="/formik-basic" className={ ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : '' } >Formik Basic</NavLink>
              </li>
              <li>
                <NavLink to="/formik-yup" className={ ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : '' } >Formik Yup</NavLink>
              </li>
              <li>
                <NavLink to="/formik-components" className={ ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : '' } >Formik Components</NavLink>
              </li>
              <li>
                <NavLink to="/formik-abstract" className={ ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : '' } >Formik Abstract</NavLink>
              </li>
              <li>
                <NavLink to="/formik-register" className={ ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : '' } >Register Formik </NavLink>
              </li>
              <li>
                <NavLink to="/formik-dynamic" className={ ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : '' } >Dynamic Form </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={ ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : '' } >About</NavLink>
              </li>
              <li>
                <NavLink to="/users" className={ ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : '' } >Users</NavLink>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="about" element={ <h1>About</h1> } />
            <Route path="users" element={ <h1>Users</h1> } />
            <Route path="formik-basic" element={ <FormikBasicPage /> } />
            <Route path="formik-yup" element={ <FormikYupPage /> } />
            <Route path="formik-components" element={ <FormikComponents /> } />
            <Route path="formik-abstract" element={ <FormikAbstract /> } />
            <Route path="formik-register" element={ <RegisterFormikPage /> } />
            <Route path="formik-dynamic" element={ <DynamicForm /> } />

            <Route path='/*' element={ <Navigate to='/formik-Basic' replace /> } />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }