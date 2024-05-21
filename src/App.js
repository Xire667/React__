import Component1 from './Components/Component1'
import Counter from './Components/Counter';
import Message from './Components/Message';
import Form from './Components/Form';
import Form2 from './Components/Form2';
import Cards from './Components/Cards/Cards';
import Users from './Components/Users/Users';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Counter></Counter>}/>
          <Route path="/users" element={<Users></Users>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
