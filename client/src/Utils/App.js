import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LangingPage from '../Pages/LangingPage';
import SignupPage from '../Pages/SignupPage';
import LoginPage from '../Pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LangingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;