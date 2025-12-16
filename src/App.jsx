
import './App.css'
import {Route , Routes, Link } from 'react-router-dom'
import Home from './Home.jsx';
import About from './About.jsx';
import Error from './Error.jsx';
function App(){
return (

  <>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About" element={<About />} />
   <Route path="/Contact" element={<About />} />
    <Route path="/Cart" element={<About />} />
    <Route path="*" element={<Error />} />
    <Route path="/" element={<Error />} />
</Routes>
  
  </>

)



}


export default App;