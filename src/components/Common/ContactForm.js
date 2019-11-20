import React from 'react'
import Field from "./Field";

const fields = {
  sections: [
    [
      {elementName: 'input', type: "text", id: 'name', name: 'user_name', placeholder: "Your Name *"},
      {elementName: 'input', type: "email", id: 'email', name: 'user_email', placeholder: "Your Email *"},
      {elementName: 'input', type: "text", id: 'phone', name: 'user_phone', placeholder: "Your Number *"}
    ],
    [
      {elementName: 'textarea', type: "text", name: 'message', placeholder: "Your Message *"}
    ]
  ]
}

function ContactForm(props) {
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
                        value={props[field.name]}
                        onChange={onChangeEvent}
                        />
            })}
          </div>    
        )
      })}
      <div className="clearfix"></div>
      <div className="col-lg-12 text-center">
        <div id="success"></div>
        <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
      </div>
    </div>
  </form>
  )
}

export default ContactForm
