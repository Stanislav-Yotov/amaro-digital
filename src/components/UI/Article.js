import styles from './Article.module.css';
import { useState } from 'react';

function Article(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);


    function acordionHandler(e) {
        setIsClicked(true);
        if (!isVisible && isClicked) {
            setIsVisible(true);
        } else {

            setIsVisible(false);
        }


    };

    const buttonHandler = !isVisible && isClicked ? '-' : '+';

    return (
        <li className={styles['zaglavie-dolno']}>
            <h3>{props.title}<span className={styles.but}>
                <button onClick={acordionHandler} className={styles.but}>{buttonHandler}</button></span></h3>
            {!isVisible && isClicked && <p>{props.description}</p>}
        </li>
    );
};

export default Article;