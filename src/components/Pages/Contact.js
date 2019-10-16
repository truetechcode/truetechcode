import React, { Component } from 'react'
import ContactForm from "../Common/ContactForm";

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
    console.log({...this.state})
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

export default Contact
