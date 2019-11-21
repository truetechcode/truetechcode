import React from 'react'
import Field from "./Field";

const fields = {
  sections: [
    [
      {elementName: 'input', type: "text", id: 'name', name: 'user_name', placeholder: "Your Name Please *", required: 'required'},
      {elementName: 'input', type: "email", id: 'email', name: 'user_email', placeholder: "Your Email Please *", required: 'required'},
      {elementName: 'input', type: "text", id: 'phone', name: 'user_phone', placeholder: "Your Number * Optional", required: ''}
    ],
    [
      {elementName: 'textarea', type: "text", id: 'message', name: 'message', placeholder: "Your Message Please *",  required: 'required'}
    ]
  ]
}

function ContactForm(props) {

    const success = 'Thanks for stopping by, I will be reaching out to you ASAP!'
    const fail = 'Sorry something went wrong, it\'s not you, you can try submiting again'
    let alert;
    if (props.sent === 'success') {
      alert = <div id="success" className="alert alert-success">{success}</div>
    } else if (props.sent === 'fail') {
      alert = <div id="success" className="alert alert-success">{fail}</div>
    } 

const {onChangeEvent, onSubmitEvent} = props
  return (
    <form className="contact-form" id="contactForm" name="sentMessage" onSubmit={onSubmitEvent} noValidate={false}>
    <div className="row">

      {fields.sections.map((section, sectionIndex) => {
        return (
          <div className="col-md-6" key={sectionIndex}>
            <input type="hidden" name="contact_number" />
            {section.map((field, i) => {
              return <Field 
                        {...field} 
                        key={i}
                        value={props[field.id]}
                        onChange={onChangeEvent}
                        />
            })}
          </div>    
        )
      })}
      <div className="clearfix"></div>
      <div className="col-lg-12 text-center">
        {alert}
        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
      </div>
    </div>
  </form>
  )
}

export default ContactForm
