import { Fragment } from "react";
import styles from './ContactForm.module.css';

function ContactForm(props) {
    function formSubmissionHandler(e) {
        e.preventDefault();
    }


    return (
        <Fragment>
            <div id='contact'>
                <form onSubmit={formSubmissionHandler} className={styles['contact-form']} >
                    <h2 className="mb-4 font-weight-medium text-secondary">Do you want to grow your organic traffic and revenue? Tell us your goals.</h2>
                    <div className={styles['row-form-group']}>
                        <div className={styles['first-name']}>
                            <label className="text-black" htmlFor="fullName">Your Name</label>
                            <input type="text" id="fullName" className="form-control" placeholder="Full Name"/>
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className={styles.email}>
                            <label className="text-black" htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" placeholder="Email Adress" />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className={styles.message}>
                            <label className="text-black" htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="5" className="form-control" placeholder="Tell us about your project"></textarea>
                        </div>
                    </div>
                    <div className="row form-group mt-4">
                        <div className="col-md-12">
                            <button className="btn btn-primary">Send Message</button>
                        </div>
                    </div> 
                </form>
            </div>
        </Fragment>
    );
}

export default ContactForm;