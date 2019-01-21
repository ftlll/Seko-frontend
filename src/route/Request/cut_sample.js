import React, { Component } from 'react';
import './cut_sample.css'

class Cutsample extends Component {
  constructor(){
    super();
    this.state = {
      form: {
         sample:'',
         firstName:'',
         lastName:'',
         companyName:'',
         email:'',
         postalCode:'',
         address:'',
         city:'',
         phone:'',
         remark:''
      },
    }
  }

  componentDidMount(){
    document.title = 'Sample inquiry | SEKO';
  }

  handleChange = (key, event) => {
    let form = this.state.form
    for (let item in this.state.form) {
        if (item === key) {
            form[item] = event.target.value
            this.setState({form: form})
      }
 }
}

submitContent(){
    let API = 'http://localhost:4000/send-mail';
    let sample = this.state.form.sample;
    let firstName = this.state.form.firstName;
    let lastName = this.state.form.lastName;
    let companyName = this.state.form.companyName;
    let address = this.state.form.address;
    let city = this.state.form.city;
    let postalCode = this.state.form.postalCode;
    let email = this.state.form.email;
    let phone = this.state.form.phone;
    let remark = this.state.form.remark;
    let subject = 'Sample Request';
    let content = '<h3>Dear '+ firstName + ' ' +lastName +',</h3>'
                    + '<p> We have received your sample request. Your request sample is' + sample + '. Your address is ' + address + ' ' + city
                    + ' ' + postalCode + '. And your phone number is ' + phone + '. remark: ' + remark + '.</p>';
    let fetchOption = {
      method:'POST',
      mode: 'cors',
      headers: {"Content-Type": "application/json;charset=utf-8"},
      body: JSON.stringify({"email": email, "subject": subject, "content": content})
    };

    fetch(API, fetchOption).then( res => {
      // if (res.success){
      //   alert('success');
      // } else {
      //   alert('fail');
      // }
      console.log(res);
    })
    .catch(err => {
      alert('err');
    });

  }

  render() {
    let sample = this.state.form.sample;
    let firstName = this.state.form.firstName;
    let lastName = this.state.form.lastName;
    let companyName = this.state.form.companyName;
    let address = this.state.form.address;
    let city = this.state.form.city;
    let postalCode = this.state.form.postalCode;
    let email = this.state.form.email;
    let phone = this.state.form.phone;
    let remark = this.state.form.remark;

    return (
      <div>
        <section id='hero'>
          <div className='hero-container'>
              
          </div>
        </section>
        <section id='form'>
        <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-12 col-sm-10'>
              <h1 className='sample-title'>Cut sample request</h1>
              <p className='black-16p'>You can use this page to make a request for cutting samples. Please fill out the necessary information below and click the "Confirm and submit" button. When the confirmation page is displayed, please click the send button</p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-10'>
              <div className='form-group'>
                <label className='grey-16p'>Request sample content (Please enter product number and number of sheets.)</label>
                <textarea className='grey-16p form-control mfp_element_textarea mfp_element_all' type='text' value={sample} onChange={this.handleChange.bind(this, 'sample')} 
                rows='30' cols='100' style={{width: 600, height:180}} placeholder='For example, you can write: NR 8001 2, NR 8004 4'/>
              </div>
              <div className='form-group'>
                <label className='grey-16p'>First Name</label>
                <input className='grey-16p form-control mfp_element_text mfp_element_all' value={firstName} size='50' style={{width:200}} onChange={this.handleChange.bind(this, 'firstName')}></input>
              </div>
              <div className='form-group'>
                <label className='grey-16p'>Last Name</label>
                <input className='grey-16p form-control mfp_element_text mfp_element_all' value={lastName} size='50' style={{width:200}} onChange={this.handleChange.bind(this, 'lastName')}></input>
              </div>
              <div className='form-group'>
                <label className='grey-16p'>Company Name (if applicable)</label>
                <input className='grey-16p form-control mfp_element_text mfp_element_all' value={companyName} size='50' style={{width:300}} onChange={this.handleChange.bind(this, 'companyName')}></input>
              </div>
              <div className='form-group'>
                <label className='grey-16p'>Email Address</label>
                <input className='grey-16p form-control mfp_element_text mfp_element_all' value={email} size='50' style={{width:300}} onChange={this.handleChange.bind(this, 'email')}></input>
              </div>
              <div className='form-group'>
                <label className='grey-16p'>Address</label>
                <input className='grey-16p form-control mfp_element_text mfp_element_all' value={address} size='50' style={{width:450}} onChange={this.handleChange.bind(this, 'address')}></input>
              </div>
              <div className='form-group'>
                <label className='grey-16p'>City</label>
                <input className='grey-16p form-control mfp_element_text mfp_element_all' value={city} size='50' style={{width:300}} onChange={this.handleChange.bind(this, 'city')}></input>
              </div>
              <div className='form-group'>
                <label className='grey-16p'>Postal Code</label>
                <input className='grey-16p form-control mfp_element_text mfp_element_all' value={postalCode} size='10' style={{width:150}} onChange={this.handleChange.bind(this, 'postalCode')}></input>
              </div>
              <div className='form-group'>
                <label className='grey-16p'>Phone Number(please include area code)</label>
                <input className='grey-16p form-control mfp_element_text mfp_element_all' value={phone} size='20' style={{width:200}} onChange={this.handleChange.bind(this, 'phone')}></input>
              </div>
              <div className='form-group'>
                <label className='grey-16p'>Remark (optional)</label>
                <textarea className='grey-16p form-control mfp_element_textarea mfp_element_all' type='text' value={remark} onChange={this.handleChange.bind(this, 'remark')} 
                rows='30' cols='100' style={{width: 600, height:180}} placeholder=''/>
              </div>
              <p className='grey-20p'>※After submitting the confirmation, we will send an automatic email to you email address to double check your request.</p>
              <p className='grey-20p'>If no one contact you in three business days, please <a href='/contactUs'>contact us</a>.</p>
              <div className='mfp_buttons'>
                <button type='submit' className='mfp_element_submit' onClick={this.submitContent.bind(this)}>Submit</button>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    );
  }
}

export default Cutsample;