import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { ShopingPage } from '../02-components-patterns/pages/ShoppingPage';
  
  import logo from '../assets/react.svg';
  
  export const Navigation = () => {
    return (
      <BrowserRouter>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" style={{ width: '150px', marginTop: '20px' }} />
            <ul>
              <li>
                <NavLink to="/home" className={ ({ isActive }: { isActive: boolean }) => isActive ? 'nav-active' : '' } >Shopping</NavLink>
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
            <Route path="home" element={ <ShopingPage /> } />

            <Route path='/*' element={ <Navigate to='/home' replace /> } />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }