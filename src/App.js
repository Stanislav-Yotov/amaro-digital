import { Fragment } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Services from './components/Services';
import Slider from './components/slider/Slider';
import Recomendations from './components/Recomendations';
import Ribbon from './components/Ribbon';
import Blog from './components/Blog';
import { SliderData } from './components/slider/SliderData';
import { Routes, Route} from 'react-router-dom';


function App() {
  
  return (
    <Fragment>
        <Header />
        <Body />
        <Services />
        <Slider slides={SliderData} autoPlay={1} />
        <Recomendations />
        <Ribbon />
        <Blog />
      <Routes>
        <Route path='/' element={Header} />
        <Route path='/services' element={Services} />
        <Route path='/blog' element={Blog} />
        <Route path='/amaro' element={Ribbon} />
      </Routes>
    </Fragment>

  );
}

export default App;
