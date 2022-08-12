import { Fragment } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Services from './components/Services';
import Recomendations from './components/Recomendations';
import Ribbon from './components/Ribbon';
import Blog from './components/Blog';
import { SliderData } from './components/slider/SliderData';
import { Routes, Route } from 'react-router-dom';
import Carousel from './components/slider/Carousel';

function App() {

  

  return (
    <Fragment>
      <Header />
      <Body />
      <Services />
      <Carousel slides={SliderData}/>
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
