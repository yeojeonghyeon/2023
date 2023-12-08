import logo from './logo.svg';
import './App.css';
import menuObj from './model/menu.js';
import MenuContainer from './component/MenuContainer';
import CounterContainer from './component/Counter.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './component/Header';
import { ChatComponent } from './component/ChatComponent.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/menu" element={<MenuContainer hobbies={menuObj.hobbies} foods={menuObj.foods} />}></Route>
          <Route path="/counter" element={<CounterContainer />} />
          <Route path="/chat" element={<ChatComponent />} />
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
