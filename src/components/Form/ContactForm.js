import { Fragment, useRef, useState } from "react";
import styles from './ContactForm.module.css';
import emailjs from '@emailjs/browser';
const emailPattern = /^([a-z0-9+._/&!][-a-z0-9+._/&!]*)@(([a-z0-9][-a-z0-9]*.)([-a-z0-9]+.)*[a-z]{2,})$/ig;

function ContactForm(props) {

    const [field, setField] = useState();
    const form = useRef();

    function clear(){
        setField('');
    }

    function formSubmissionHandler(e) {
        e.preventDefault();

        emailjs.sendForm('service_3jmk1vp', 'template_gu7923l', form.current, 'Vl-iOUeYduNbDYTy8')
            .then((result) => {
                alert("Message Sent Successfully");
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            clear();
    }


    return (
        <Fragment>
            <div id='contact'>
                <form onSubmit={formSubmissionHandler} className={styles['contact-form']} ref={form} >
                    <h2 className="mb-4 font-weight-medium text-secondary">Do you want to grow your organic traffic and revenue? Tell us your goals.</h2>
                    <div className={styles['row-form-group']}>
                        <div className={styles['first-name']}>
                            <label className="text-black" htmlFor="fullName">Your Name</label>
                            <input name="fullName"
                                type="text"
                                id="fullName"
                                className="form-control"
                                placeholder="Full Name"
                                value={field}
                                required />
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className={styles.email}>
                            <label className="text-black" htmlFor="email">Email</label>
                            <input name="email"
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Email Adress"
                                value={field}
                                required />
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className={styles.message}>
                            <label className="text-black" htmlFor="message">Message</label>
                            <textarea name="message"
                                id="message"
                                cols="30"
                                rows="5"
                                className="form-control"
                                placeholder="Tell us about your project"
                                value={field}
                                required></textarea>
                        </div>
                    </div>
                    <div className="row form-group mt-4">
                        <div className="col-md-12">
                            <button className="btn btn-primary" type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default ContactForm;