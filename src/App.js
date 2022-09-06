import { Fragment } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Services from './components/Services';
import Ribbon from './components/Ribbon';
import Blog from './components/Blog/Blog';
import { SliderData } from './components/slider/SliderData';
import Carousel from './components/slider/Carousel';
import ContactForm from './components/Form/ContactForm';

function App() {

  return (
    <Fragment>
      <Header />
      <Body />
      <Services />
      <Carousel slides={SliderData}/>
      <Ribbon />
      <Blog />
      <ContactForm />
    </Fragment>

  );
}

export default App;
