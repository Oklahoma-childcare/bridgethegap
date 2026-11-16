import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { App } from './App';
import { routes, type Route } from './config/seo';
import './styles.css';

const root = document.getElementById('root');
if (root) {
  const rawRoute = window.location.pathname.replace(/\/$/, '') || '/';
  const route: Route = routes.includes(rawRoute as Route) ? rawRoute as Route : '/';
  hydrateRoot(root, <App route={route} />);
}
