import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    // <div id="wd-account-navigation">
    //   <Link to={`/Accounts/Signin`}  > Signin  </Link> <br/>
    //   <Link to={`/Accounts/Signup`}  > Signup  </Link> <br/>
    //   <Link to={`/Accounts/Profile`} > Profile </Link> <br/>
    // </div>

    <div id="wd-kanbas-navigation">
      <a href="https://www.northeastern.edu/"
         id="wd-neu-link" target="_blank">Northeastern</a><br/>
      <Link to="/Accounts" id="wd-account-link">Account</Link><br/>
      <Link to="/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
      <Link to="/Courses" id="wd-course-link">Courses</Link><br/>
      <Link to="/Calendar" id="wd-calendar-link">Calendar</Link><br/>
      <Link to="/Inbox" id="wd-inbox-link">Inbox</Link><br/>
      <a href="https://cs5610-labwork-shreyansmulkutkar.netlify.app/"
         id="wd-lab-link" target="_blank">Labs</a><br/>
    </div>

);}
