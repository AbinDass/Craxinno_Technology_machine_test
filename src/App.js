import './App.css';
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing';

function App() {
  return (
    <Routes>
    
    <Route path="/" element={<Landing/>}></Route>
      
    </Routes>
  );
}

export default App;
