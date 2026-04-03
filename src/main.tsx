import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.scss';
import {AppShell} from './shell/AppShell';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppShell />
  </React.StrictMode>
);
