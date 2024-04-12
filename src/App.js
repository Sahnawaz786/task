import Navbar from './Components/Navbar';
import RightBar from './Components/RightBar';
import LeftBar from './Components/LeftBar';
import styles from './style.module.css';


function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <div className={styles.sidebarSection}>
        <LeftBar/>
        <RightBar/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
