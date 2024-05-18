import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Works from './components/Works/Works';
import AutoSlider from './components/AutoSlider/AutoSlider';

import { SliderData } from './Data/SliderData';
import Img1 from './images/b2.jpg';


function App() {

   
  return (
    <div className="App">

      <Navbar></Navbar>
      <Main></Main>
      <AutoSlider photos={SliderData}></AutoSlider>
      <Works></Works>

    </div>
  );
}

export default App;


