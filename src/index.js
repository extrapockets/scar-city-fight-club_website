import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const renderApp = (App) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const importApp = async () => {
  try {
    const { default: App } = await import('./App');
    renderApp(App);
  } catch (error) {
    console.error('Error importing App:', error);
  }
};

importApp();
