// Settings.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const themes = {
  light: {
    background: '#fff',
    color: '#000',
  },
  dark: {
    background: '#000',
    color: '#fff',
  },
};

const SettingsContainer = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  height: 100vh;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.color};
  color: ${(props) => props.theme.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Settings = () => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <><div>
      <Navbar/>
    </div><SettingsContainer theme={theme}>
        <h2>Configuración</h2>
        <Button onClick={toggleTheme}>Cambiar Tema</Button>
      </SettingsContainer></>
  );
};

export default Settings;
