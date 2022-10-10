import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/Nav/NavBar";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Profile/>
            <NavBar/>
        </div>
    )
}

export default App;
