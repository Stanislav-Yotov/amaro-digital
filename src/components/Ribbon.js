import { Fragment } from "react";
import styles from './Ribbon.module.css';
import Articles from "./UI/Articles";

function Ribbon(props) {
  

    return (
        <Fragment>
            <div className={styles.ramka}>
            <h1 className={styles.zaglavie}>What sets us apart.</h1>
            <h4 className={styles.paragraf}>Every project is unique and that's how we treat it.
                We combine our extensive experience with heaps of creativity to create a winning strategy for your brand.
                Again and again.</h4>
                <Articles />
            </div>
        </Fragment>

    );
};

export default Ribbon;