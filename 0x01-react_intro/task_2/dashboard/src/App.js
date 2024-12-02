import React from 'react';
import logo from './holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>School dashboard</h1>
            </header>
            <body className="App-body">
                <form>
                <p>Login to access the full dashboard</p>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <br />
                <button>OK</button>
                </form>
            </body>
            <footer className="App-footer">
                <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
            </footer>
        </div>
    );
}

export default App;
