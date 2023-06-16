import Home from './Pages/Home';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Authenticaiton/Login';
import Header from './Header';
import SignUp from './SignUp';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
       </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
