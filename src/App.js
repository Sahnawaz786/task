import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import RightBar from './Components/RightBar';
import LeftBar from './Components/LeftBar';

function App() {
  return (
    <div className="App">
      <h1>
        <Navbar/>
        <div className='sidebar-section'>
        <LeftBar/>
        <RightBar/>
        </div>
        
      </h1>
    </div>
  );
}

export default App;
