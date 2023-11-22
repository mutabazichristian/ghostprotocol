import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LangingPage from './Pages/LangingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LangingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;