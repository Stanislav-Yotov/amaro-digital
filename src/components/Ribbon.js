import styles from './Ribbon.module.css';
import Articles from "./UI/Articles";

function Ribbon(props)  {

    return (
        <div id="ribbon-wrapper">
            <div className={styles.wrapper}>
                <div className={styles.ramka}>
                    <h2 className={styles['first-title']}>What sets us apart.<h4 className={styles.paragraf}>Every project is unique and that's how we treat it.
                        We combine our extensive experience with heaps of creativity to create a winning strategy for your brand.
                        Again and again.</h4></h2>
                    <Articles />

                </div>
            </div>
        </div>

    );
};

export default Ribbon;