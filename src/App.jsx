import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/yo' element={<Nav/>}/> */}
          <Route path='/details/:id' element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
