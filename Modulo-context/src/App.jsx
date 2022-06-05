import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from './pages/SignUp';
import { ShowData } from './pages/ShowData';
import './App.css';
import {ContextProvider} from './contexts/Context';

const App = () => {
  return (
    <ContextProvider>
        <BrowserRouter >
          <h1 id='f'>Aprendendo React-Context</h1>
          <hr />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/exibir" element={<ShowData />} />
          </Routes>
        </BrowserRouter>
    </ContextProvider>
  );
}

export default App;