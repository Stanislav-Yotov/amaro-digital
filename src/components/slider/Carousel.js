import { useRef } from "react";
import { Rerousel } from "rerousel";
import styles from './Carousel.module.css';

function Carousel(props) {
    const customerRef = useRef(null);

    return (
        <div className={styles.carousel}>
            <Rerousel itemRef={customerRef} interval={500}>
            {props.slides.map((imgSrc, index) => (
                <img src={imgSrc.src} key={index} alt='' ref={customerRef} />
            ))}
            </Rerousel>
        </div>
    );
}

export default Carousel;