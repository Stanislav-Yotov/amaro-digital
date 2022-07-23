import { Fragment } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Services from './components/Services';
import Slider from './components/slider/Slider';
import Recomendations from './components/Recomendations';
import Ribbon from './components/Ribbon';
import Blog from './components/Blog';
import { SliderData } from './components/slider/SliderData';

function App() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Services />
      <Slider slides={SliderData} autoPlay={2} />
      <Recomendations />
      <Ribbon />
      <Blog />
    </Fragment>
  );
}

export default App;
