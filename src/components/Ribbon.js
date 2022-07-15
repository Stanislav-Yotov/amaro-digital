import { Fragment, useState } from "react";
import styles from './Ribbon.module.css';

function Ribbon(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    function acordionHandler(){
      
    };

    const isShown = isVisible ? styles['dropdown-content'] : styles['dropdown-content-none'];

    return (
        <Fragment>
            <div className={styles.ramka}>
                <div className={styles.dropdown}>
                    <h2 className={styles['zaglavie-dqsno']}>Stellar team<button className={styles.dropbtn} onClick={acordionHandler}>+</button></h2>
                    <p className={isShown}>Our team is made up of digital pros from diverse backgrounds. While everyone brings something different to the table, we're all results-obsessed.</p>
                </div>
                <h1 className={styles.zaglavie}>What sets us apart.</h1>
                <p className={styles.paragraf}>Every project is unique and that's how we treat it. We combine our extensive experience with heaps of creativity to create a winning strategy for your brand. Again and again.</p>
            </div>
        </Fragment>

    );
};

export default Ribbon;