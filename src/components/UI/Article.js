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
        <div className={styles['second-title']}>
            <h4><a className={styles.but} onClick={acordionHandler}>{props.title}
                <span className={styles.but}>{buttonHandler}</span></a></h4>
            {!isVisible && isClicked && <p>{props.description}</p>}
        </div>
    );
};

export default Article;