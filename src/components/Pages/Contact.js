import React, { Component } from 'react'
import ContactForm from "../Common/ContactForm";
import { withFormik } from "formik";
import emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       phone: '',
       message: ''
    }
    this.onChangeEvent = this.onChangeEvent.bind(this)
  }
  
  onChangeEvent = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  onSubmitEvent = (event) => {
    event.preventDefault()
    const templateParams = {...this.state}

    emailjs.send('gmail', 'template_2ONpqFsc', templateParams, 'user_DDjkEndKnf48LeUH32iGh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  render() {
    return (
      <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ContactForm {...this.state} onChangeEvent={this.onChangeEvent} onSubmitEvent={this.onSubmitEvent} />
          </div>
        </div>
      </div>
    </section>  
    )
  }
}


export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: ''
  }),
  validate: values => {
    const errors = {};
    Object.keys(values).map(v => {
      if (!values[v]) {
        errors[v] = 'Required'
      }
    })
    return errors;
  },
  handleSubmit: (values, {setSubmitting}) => {
    alert('You have submitted the form');
  }
})(Contact);
