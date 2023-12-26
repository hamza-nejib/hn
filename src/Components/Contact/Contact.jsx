import React, { useState, useRef } from 'react';
import './Contact.css';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import 'bootstrap/dist/css/bootstrap.css';



function Contact() {

    const formId = 'FeV2XbgP';
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const recaptchaKey = '6LcAAz8nAAAAALMd0DelbowNodM7SzNGoDIGLMXC';
    const recaptchaRef = useRef();

    const initialFormState = {
        email: '',
        name: '',
        message: ''
    };

    const [formState, setFormState] = useState(initialFormState);
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState();
    const [recaptchaToken, setRecaptchaToken] = useState();

    const submitForm = async (e) =>{
        e.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    };

    const postSubmission = async (e) =>{
        const payload = {
            ...formState,
            "g-recaptcha-response":recaptchaToken
        };
        try{
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
            setMessage({
                text: 'Votre message a été envoyé avec succès.',
                color: 'usermsg alert alert-success'
            });
            setFormState(initialFormState);
            recaptchaRef.current.reset();
        }catch(error){
            console.log(error);
            setMessage({
                text: "Une erreur c'est produite pendant l'envoi du message",
                color: 'usermsg alert alert-danger'
            });
        }
    };

    const updateFormControl = (e) =>{
        const {id, value} = e.target;
        const formKey = id;
        const updatedFormState = {...formState};
        updatedFormState[formKey] = value;
        setFormState(updatedFormState);
    };

    const updateRecaptchaToken = (token) => {
        setRecaptchaToken(token);
    };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Contactez Moi</span>
            </div>

        </div>

        <div className="c-right">
            

            <form onSubmit={submitForm}>
                {message && <div className={message.color} role="alert"> {message.text} </div>}
                <input onChange={updateFormControl} type="text" name="user_name" className='user' id='name' placeholder='Nom' value={formState.name} required/>
                <input onChange={updateFormControl} type="email" name="user_email" className='user' id='email' placeholder='Email' value={formState.email} required />
                <textarea onChange={updateFormControl} name="message" className='user' id ='message' placeholder='Message' value={formState.message} required />

                <ReCAPTCHA 
                    ref={recaptchaRef}
                    sitekey={recaptchaKey}
                    onChange={updateRecaptchaToken}
                />

                <input disabled={submitting} type="submit" value={submitting ?  "En cours..." : "Envoyer"}className='button' />
            </form>
        </div>
    </div>
  )
}

export default Contact