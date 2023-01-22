import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Launchpage from "./Components/Launchpage.js";
import Loginpage from './Components/Loginpage';
import Useraccount from './Components/Useraccount';
import Head from './Components/Dashboard/Header/Head';
import Subheader from './Components/Dashboard/Subheader/Subheader';


function App() {
  return (
    <div>
  <Routes>
  <Route path='/' element={<Launchpage/>}></Route>
  {/* <Subheader></Subheader> */}
  </Routes>
 
  </div>
//     <div>
      
//          <h1>Welcome to Herovired</h1>
//         <h3>A HERO Group Company</h3>
       
        


// <h5>Learn today
// Lead tomorrow</h5>
// <p>Hero Vired is a premium learn-tech company offering industry-relevant programs in partnership with world-class institutions to create the change-makers of tomorrow. Part of the rich legacy of the Hero Group, we aim to transform education in India by creating programs delivered by leading industry practitioners that help professionals and students enhance their skills.</p>
// <h4>Enrol now and build a successful career</h4>
//        <Router>
//       <Routes>
//         <Route exact path="Launchpage" element={<Launchpage />}></Route>
//         <Route exact path="Loginpage" element={<Loginpage />}></Route>
//         <Route exact path="Useraccount" element={<Useraccount />}></Route>
//       </Routes>
//       <ul>
//         <li>
//           {" "}
//           <Link to="Launchpage">Launchpage</Link>
//         </li>
//         <li>
//           {" "}
//           <Link to="Loginpage">Loginpage</Link>
//         </li>
//         <li>
//           {" "}
//           <Link to="Useraccount">Useraccount</Link>
//         </li>
//       </ul>
//     </Router>
      
  
  );
}

export default App;
