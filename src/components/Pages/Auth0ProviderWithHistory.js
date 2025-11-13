import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import authConfig from '../config/auth_config.json';

const Auth0ProviderWithHistory = ({ children }) => {
    const navigate = useNavigate();
  
    const onRedirectCallback = (appState) => {
      navigate(appState?.returnTo || '/home'); 
    };
  
    return (
      <Auth0Provider
        domain={authConfig.domain}
        clientId={authConfig.clientId}
        redirectUri={authConfig.redirectUri}
        onRedirectCallback={onRedirectCallback}
      >
        {children}
      </Auth0Provider>
    );
  };
  
  export default Auth0ProviderWithHistory;