import React, { Component } from 'react';
import './cut_sample.css'

class Cutsample extends Component {
  constructor(){
    super();
    this.state = {
      form: {
         sample: 'NR8001',
         email: 'clearlove7@uwaterloo.ca',
         firstName: '',
         lastName: '',
         content: ''
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
    let email = this.state.form.email;
    let firstName = this.state.form.firstName;
    let content = this.state.form.content;
    let fetchOption = {
      method:'POST',
      mode: 'cors',
      headers: {"Content-Type": "application/json;charset=utf-8"},
      body: JSON.stringify({"subject": sample, "content": email})
    };
    // fetch(API, fetchOption).then( res => {
    //   // if (res.success){
    //   //   alert('success');
    //   // } else {
    //   //   alert('fail');
    //   // }
    //   console.log(res);
    // })
    // .catch(err => {
    //   alert('err');
    // });
    alert(content);
  }

  render() {
    let sample = this.state.form.sample;
    let email = this.state.form.email;
    let firstName = this.state.form.firstName;
    let content = this.state.form.content;
    return (
      <div>
        <section id='hero'>
          <div className='hero-container'>
              
          </div>
        </section>
        <section id='form'>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-10'>
              <h1 className='sample-title'>Cut sample request</h1>
              <p className=''>You can charge cut samples. Please fill out the necessary information below and click the "Confirm the input content" button. When the confirmation page is displayed, please push the send button</p>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-10'>
              <div className='form-group'>
                <label className='grey-16p'>Request sample content (Please enter product number and number of sheets.)</label>
                <textarea className='form-control mfp_element_textarea mfp_element_all' type='text' value={content} onChange={this.handleChange.bind(this, 'content')} 
                rows='30' cols='100'/>
              </div>
              <input type='input' value={sample} onChange={this.handleChange.bind(this, 'sample')}/>
              <input type='input' value={email} onChange={this.handleChange.bind(this, 'email')}/>
              <input type='input' value={firstName} onChange={this.handleChange.bind(this, 'firstName')}/>

              <button type='submit' onClick={this.submitContent.bind(this)}>Submit</button>
            </div>
            <form className='container'>
            
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Cutsample;