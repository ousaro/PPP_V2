import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PostsProvider } from './Contexts/PostsContext';
import { AuthContextProvider } from './Contexts/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <AuthContextProvider>
        <PostsProvider>
          <App />
        </PostsProvider>
      </AuthContextProvider>
    </React.StrictMode>
);