import { Fragment } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Services from './components/Services';
import Slider from './components/Slider';
import Recomendations from './components/Recomendations';
import Ribbon from './components/Ribbon';

function App() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Services />
      <Slider />
      <Recomendations />
      <Ribbon />
    </Fragment>
  );
}

export default App;
