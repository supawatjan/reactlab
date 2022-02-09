import './App.css';
import Navigation from './Components/navigation';
import Home from './Components/page/home';
import Profile from './Components/page/profile';
import Shopping from './Components/page/shopping';
import Tracking from './Components/page/tracking';
import Coupon from './Components/page/coupon';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 

function App() {
  return (
    <div className="App">
      
      <Router>
        <header>
          <Navigation/>
          <span>Navigation Workshop</span>
        </header>
        <section>
          <Routes>
            <Route path="/home" element = {<Home/>}/>
            <Route path="/profile" element = {<Profile/>}/>
            <Route path="/shopping" element = {<Shopping/>}/>
            <Route path="/tracking" element = {<Tracking/>}/>
            <Route path="/coupon" element = {<Coupon/>}/>
            
          </Routes>

        </section>
        
      </Router>

      
    </div>
  );
}

export default App;
