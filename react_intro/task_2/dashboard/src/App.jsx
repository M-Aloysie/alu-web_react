import './App.css';
import logo from './logo.jpg';
function App() {
    return(
        <div>
            <header className='App-header'>
                <img src={logo} alt='holberton logo' />
                <h1>School dashboard</h1>
            </header>
            <body className='App-body'>
                <p>Login to access the full dashboard</p>
                <form action="#" className='form'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" /><br></br>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" /><br></br>
                    <button type="submit">OK</button>
                </form>
            </body>
            <footer className='App-footer'>
                <p>Copyright 2020 - holberton School</p>
            </footer>
        </div>
    );
}

export default App