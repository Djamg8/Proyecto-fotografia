import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../Pages/Dropdown.css'; 

const DropdownMenu = () => {
  const { user, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);


  return (
    <div className="dropdown">
      <img
        src={user.picture}
        alt={user.name}
        className="avatar"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown-menu">
          <div className="profile-info">
            <img src={user.picture} alt={user.name} className="profile-avatar" />
            <div className="profile-details">
              <span className="profile-name">{user.name}</span>
              <span className="profile-email">{user.email}</span>
            </div>
          </div>
          <input type="text" placeholder="search" className="search-input" />
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a onClick={() => logout({ returnTo: window.location.origin })}>Log Out</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
