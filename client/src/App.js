import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LangingPage from './Pages/LangingPage';
import SignupPage from './Pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LangingPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/' element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;