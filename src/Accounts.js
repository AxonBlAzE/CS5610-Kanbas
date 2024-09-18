import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import AccountNavigation from './Navigation';

function Accounts() {
  return (
    <div>
      <h2>Account</h2>
      <table>
        <tr>
          <td valign="top"><AccountNavigation /></td>
          <td valign="top">

            {/* Routes for nested pages under Accounts */}
            <Routes>
              {/* Redirect to SignIn by default when on /Accounts */}
              <Route path="/" element={<Navigate to="/Accounts/SignIn" />} />

              {/* Nested Routes */}
              <Route path="SignIn" element={<SignIn />} />
              <Route path="SignUp" element={<SignUp />} />
              <Route path="Profile" element={<Profile />} />
            </Routes>

            {/* Placeholder to render child components */}
            <Outlet />

          </td>
        </tr>
      </table>
    </div>
  );
}

export default Accounts;
