import React, { Component } from 'react';
import './Document.css';
import neueroveImg from './../img/download_neuerove.jpg';
import neuerove_mi from './../img/neuerove/pdf/neuerove_vol5_A4_mihon.pdf';
import neuerove_mi_mt from './../img/neuerove/pdf/neuerove_vol5_A4_mihon_mt.pdf';
import neuerove_ill from './../img/neuerove/pdf/wallcoverings_and_illamination.pdf';
import arrivalImg from './../img/download_ARRIVAL.jpg';


class Document extends Component {
  componentDidMount(){
    document.title = 'Document Download | SEKO';
  }
  render() {
    return (
      <div>
        <section id='document_hero'>
        </section>
        <div className='document_content'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 col-md-6 col-lg-6 col-xl-4'>
                <div className='card'>
                  <img className='card-img-top card_img_size img-fluid' src={neueroveImg} alt='neuerove'/>
                  <div className='card-body'>
                    <h5 className='card-title'>neuerove vol.5</h5>
                    <p className='card-text card_text_area'>Fiber Wallpaper</p>
                  </div>
                  <div className='card-footer card-footer_area'>
                  <a href={neuerove_mi} traget='_blank'>
                    <button type='button' className='btn btn-outline-secondary btn-block download button-content'>Information PDF</button>
                  </a>
                  <a href={neuerove_mi_mt} traget='_blank'>
                    <button type='button' className='btn btn-outline-secondary btn-block download button-content'>Information PDF</button>
                  </a>
                  <a href={neuerove_ill} traget='_blank'>
                    <button type='button' className='btn btn-outline-secondary btn-block download button-content'>Information PDF</button>
                  </a>
                  </div>
                </div>
              </div>

              <div className='col-sm-12 col-md-6 col-lg-6 col-xl-4'>
                <div className='card'>
                  <img className='card-img-top card_img_size img-fluid' src={arrivalImg} alt='neuerove'/>
                  <div className='card-body'>
                    <h5 className='card-title'>Arrival</h5>
                    <p className='card-text card_text_area'>Fiber Wallpaper</p>
                  </div>
                  <div className='card-footer card-footer_area'>
                  <a href={neuerove_mi} traget='_blank'>
                    <button type='button' className='btn btn-outline-secondary btn-block download button-content'>Information PDF</button>
                  </a>
                  <a href={neuerove_mi_mt} traget='_blank'>
                    <button type='button' className='btn btn-outline-secondary btn-block download button-content'>Information PDF</button>
                  </a>
                  <a href={neuerove_ill} traget='_blank'>
                    <button type='button' className='btn btn-outline-secondary btn-block download button-content'>Information PDF</button>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Document;
