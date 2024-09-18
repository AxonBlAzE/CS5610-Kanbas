import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Accounts from './Accounts';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Courses from './Courses';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <h1>Kanbas App</h1>
        <h4>By Shreyans Mulkutkar</h4>
        <div>
          <table>
            <tr>
              <td valign="top">
                
              </td>
              <td valign="top">
                <Routes>
                  {/* Redirect from root to Accounts */}
                  <Route path="/" element={<Navigate to="/Accounts" />} />

                  {/* Corrected Route with /* to allow nested routes */}
                  <Route path="/Accounts/*" element={<Accounts />} />

                  <Route path="/Dashboard/*" element={<Dashboard />} />

                  {/* <Route path="/Courses/:cid/*" element={<Courses />} /> */}
                  <Route path="/Courses/*" element={<Courses />} />

                  <Route path="/Calendar" element={<h1>Calendar</h1>} />

                  <Route path="/Inbox" element={<h1>Inbox</h1>} />
                </Routes>
              </td>
            </tr>
          </table>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
