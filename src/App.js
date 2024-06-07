import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ProfileSetup from './components/ProfileSetup';
function App() {
  return (
    <div className="App">
    <ProfileSetup></ProfileSetup>
    {/* <Home  text="My resume" buttonText="resume"/>
    <Home  text="My Github " buttonText="Github"/>
    <Home  text="My Achivements" buttonText="Achivements"/> */}
    </div>  
  );
}

export default App;
