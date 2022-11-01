import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../assets/react.svg';
import { routes } from '../routes/routes'

  
  export const Navigation = () => {
    return (
      <Suspense fallback={<span>Loading...</span>} >
        <BrowserRouter>
          <div className="main-layout">
            <nav>
              <img src={ logo } alt="React Logo" style={{ width: 150 }}/>
              <ul>
                {
                  routes.map( ({ to, name }) => (
                    <li key={ to } >
                      <NavLink to={ to } >{ name }</NavLink>
                    </li>
                  ) )
                }
              </ul>
            </nav>
    

            <Routes>
              {
                routes.map( ({ path, Component }) => (
                  <Route key={ path } path={ path } element={ <Component /> } />
                ) )
              }

              <Route path='/*' element={ <Navigate to={ routes[0].to } replace /> } />
            </Routes>
          </div>
        </BrowserRouter>
      </Suspense>
    );
  }