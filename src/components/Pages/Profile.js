import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import Navbar from './Navbar';
import './Profile.css';


function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <Navbar />
        <div className="profile-container">
          <div className="profile-header">
            <img src={user.picture} alt={user.name} />
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="profile-content">
            <h3>About</h3>
            <p></p>
            <LogoutButton />
          </div>
        </div>
      </>
    )
  );
}

export default Profile;
