import { Route, Routes } from 'react-router';
import './App.css';
import FirstChild from './component/FirstChild';
import SecondChild from './component/SecondChild';
import { useNavigate } from 'react-router';

function App() {

  const navigate = useNavigate()

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={

          <>
            <button onClick={() => navigate('first')}>First Child</button>
            <button onClick={() => navigate('second')}>Second Child</button>
          </>

        }></Route>
        <Route path='/first' element={<FirstChild />}></Route>
        <Route path='/second' element={<SecondChild />}></Route>
      </Routes>

      {/* <FirstChild /> */}
      {/* <SecondChild /> */}
    </div>
  );
}

export default App;
