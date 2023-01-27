
import './App.css';

import Scarecrow from './Assets/Images/Scarecrow.png';


<link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet'></link>

function App() {
  return (
    <div className="div-container">
      <h2 className="title">404 NOT FOUND</h2>
      <div className='container'>
        <div className="image-container">
          <img src={Scarecrow} alt="Scarecrow" className='image'/>
        </div>
        <div className="text-container">
          <span className='span-title'>I have bad news for you</span>
          <span className='span-body'>The page you are looking for might be removed or is temporarily unavailable</span>
          <button className='button'>BACK TO HOMEPAGE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
