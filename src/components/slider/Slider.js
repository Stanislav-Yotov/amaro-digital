import { useState, useEffect, useRef } from 'react';
import styles from './Slider.module.css';
import SliderContent from './SliderContent';

function Slider(props) {
    const autoPlayRef = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide;
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }

        const interval = setInterval(play, props.autoPlay * 1000)
        return () => clearInterval(interval)
    }, [])

    function getWidth() {
        return window.innerWidth;
    }

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });

    const { translate, transition, activeIndex } = state;

    function nextSlide() {
        if (activeIndex === props.slides.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        })
    };

    function prevSlide() {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (props.slides.length - 1) * getWidth(),
                activeIndex: props.slides.length - 1
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        })
    };

    return (
        <div className={styles.slider}>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth()}
            >
                {/* {props.slides.map((slide, i) => (
                    <Slide  key={slide + i} content={slide} />
                ))} */}

                {props.slides.map((imgSrc, index) => (
                    <img src={imgSrc.src} key={index + 1} alt={''} />
                ))}
            </SliderContent>

        </div>
    );


};

export default Slider;