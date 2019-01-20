import React, { Component } from 'react';
import './Request.css';

class Request extends Component {
  constructor(){
    super();
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    document.title ='Inquiry | SEKO';
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
          <section id='hero'>
            <div className='hero-container'>

            </div>
          </section>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h1 className='sample-title'>Sample Inquiry</h1>
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <p className='description'>You can make inquiries, cut sample request, and other inquiries. Regarding the contents of the inquiries received, we are keeping in mind the prompt response, but depending on the content you may get time to answer. Please note.</p>
              </div>
            </div>
              <div className='row'>
                <div className='col-12 col-sm-12 col-md-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='card-title black-16p'>
                        <p>Cut sample request</p>
                      </div>
                      <p className='card-text grey-16p card-text-area2'>Request for cut samples is here.</p>
                      <a href='/request_sample' traget='_blank'>
                        <button type='button' className='btn btn-outline-secondary btn-block download button-content'>To cut sample request</button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-12 col-sm-12 col-md-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='card-title black-16p'>
                        <p>Cut sample request</p>
                      </div>
                      <p className='card-text grey-16p card-text-area2'>Request for cut samples is here.</p>
                      <a href='./request/sample' traget='_blank'>
                        <button type='button' className='btn btn-outline-secondary btn-block download button-content'>To cut sample request</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>  
             
              <div className='row' style={{paddingTop: 15}}>
                <div className='col-12 col-sm-12 col-md-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='card-title black-16p'>
                        <p>Cut sample request</p>
                      </div>
                      <p className='card-text grey-16p card-text-area2'>Request for cut samples is here.</p>
                      <a href='/request/sample' traget='_blank'>
                        <button type='button' className='btn btn-outline-secondary btn-block download button-content'>To cut sample request</button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-12 col-sm-12 col-md-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='card-title black-16p'>
                        <p>Cut sample request</p>
                      </div>
                      <p className='card-text grey-16p card-text-area2'>Request for cut samples is here.</p>
                      <a href='/request/sample' traget='_blank'>
                        <button type='button' className='btn btn-outline-secondary btn-block download button-content'>To cut sample request</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div> 
             
          </div>

      </div>
    );
  }
}

export default Request;
