import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Quiz from './pages/Quiz';
import Suggestions from './pages/Suggestions';

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/suggestion' element={<Suggestions />} />
         </Routes>
      </Router>
   );
};

export default App;
