import React, { Component } from 'react';
import sampleBook from './../../img/neuerove/pdf/neuerove_vol5_A4_mihon.pdf';
import documentBook from './../../img/neuerove/pdf/neuerove_vol5_A4_mihon_mt.pdf';
import Lighting from './../../img/neuerove/pdf/wallcoverings_and_illamination.pdf';
import liveimg from './../../img/neuerove/pdf/neue_rove_vol5_image_jpg.zip';
import allImg from './../../img/neuerove/pdf/neue_rove_vol5_kiji_JPG.zip';
import './Neue_rove.css';

const API = 'http://localhost:4000/';

class Neuerove extends Component {
  constructor(props){
    super(props);
    this.state = {
      hanabi: [],
      namioto: [],
      ibuki: [],
      rakuyou: [],
      kanzashi: [],
      suibi: [],
      gyokuren: [],
      haku: [],
      murasame: [],
      ryuseigun: [],
      fuji: [],
      tsumugi: []
    };
  }

  componentDidMount(){
    document.title = "Neuerove | SEKO";
    this.get_Wallpaper1('neuerove', 'NAMIOTO');
    this.get_Wallpaper2('neuerove', 'HANABI');
    this.get_Wallpaper3('neuerove', 'Ibuki');
    this.get_Wallpaper4('neuerove', 'rakuyou');
    this.get_Wallpaper5('neuerove', 'kanzashi');
    this.get_Wallpaper6('neuerove', 'suibi');
    this.get_Wallpaper7('neuerove', 'gyokuren');
    this.get_Wallpaper8('neuerove', 'haku');
    this.get_Wallpaper9('neuerove', 'murasame');
    this.get_Wallpaper10('neuerove', 'ryuseigun');
    this.get_Wallpaper11('neuerove', 'fuji');
    this.get_Wallpaper12('neuerove', 'tsumugi');
  }

  get_Wallpaper1 = (sample, name) => {
    fetch(API + 'products/'+sample+ '&' + name)
    .then(results => results.json())
    .then(data => {this.setState({ namioto: data.data})})
    .catch(err => console.error(err))
  }
  get_Wallpaper2 = (sample, name) => {
    fetch(API + 'products/'+sample+ '&' + name)
    .then(results => results.json())
    .then(data => {this.setState({ hanabi: data.data})})
    .catch(err => console.error(err))
  }
  get_Wallpaper3 = (sample, name) => {
    fetch(API + 'products/'+sample+ '&' + name)
    .then(results => results.json())
    .then(data => {this.setState({ ibuki: data.data})})
    .catch(err => console.error(err))
  }
  get_Wallpaper4 = (sample, name) => {
    fetch(API + 'products/'+sample+ '&' + name)
    .then(results => results.json())
    .then(data => {this.setState({ rakuyou: data.data})})
    .catch(err => console.error(err))
  }
  get_Wallpaper5 = (sample, name) => {
    fetch(API + 'products/'+sample+ '&' + name)
    .then(results => results.json())
    .then(data => {this.setState({ kanzashi: data.data})})
    .catch(err => console.error(err))
  }
  get_Wallpaper6 = (sample, name) => {
    fetch(API + 'products/'+sample+ '&' + name)
    .then(results => results.json())
    .then(data => {this.setState({ suibi: data.data})})
    .catch(err => console.error(err))
  }
  get_Wallpaper7 = (sample, name) => {
    fetch(API + 'products/'+sample+ '&' + name)
    .then(results => results.json())
    .then(data => {this.setState({ gyokuren: data.data})})
    .catch(err => console.error(err))
  }
  get_Wallpaper8 = (sample, name) => {
    fetch(API + 'products/'+sample+ '&' + name)
    .then(results => results.json())
    .then(data => {this.setState({ haku: data.data})})
    .catch(err => console.error(err))
  }
  get_Wallpaper9 = (sample, name) => {
    fetch(API + 'products/'+sample+ '&' + name)
    .then(results => results.json())
    .then(data => {this.setState({ murasame: data.data})})
    .catch(err => console.error(err))
  }
  get_Wallpaper10 = (sample, name) => {
    fetch(API + 'products/'+sample+ '&' + name)
    .then(results => results.json())
    .then(data => {this.setState({ ryuseigun: data.data})})
    .catch(err => console.error(err))
  }
  get_Wallpaper11 = (sample, name) => {
    fetch(API + 'products/'+sample+ '&' + name)
    .then(results => results.json())
    .then(data => {this.setState({ fuji: data.data})})
    .catch(err => console.error(err))
  }
  get_Wallpaper12 = (sample, name) => {
    fetch(API + 'products/'+sample+ '&' + name)
    .then(results => results.json())
    .then(data => {this.setState({ tsumugi: data.data})})
    .catch(err => console.error(err))
  }

  zoomImage(model) {
    var modal = document.getElementById('myModal');
    let modalImg = document.getElementById("myImg");
    let captionText = document.getElementById("caption");
    modal.style.display = 'block';
    modalImg.src = require('./../../img/neuerove/img/' + model + '.jpg')
    captionText.innerHTML = model;
  }

  imgClose = () => {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }

   renderProduct = (data) => {
     return (
       <div key={data.product_id} className='col-lg-3 col-md-4 col-sm-4 col-6'>
        <div className='sample-show'>
          <img className='sample-pic' src={require('./../../img/neuerove/img/' + `${data.model}` + '.jpg')} alt='`{${data.model}}`' onClick={() => this.zoomImage(`${data.model}`)} />
          <div className='sample-code'>{data.model}</div>
        </div>
       </div>
     );
  }

  render() {
    const { namioto, hanabi, ibuki, rakuyou, kanzashi, suibi, gyokuren, haku, murasame, ryuseigun, fuji, tsumugi} = this.state;
    return (
      <div>
        <div className='hero'>
          <div className='container hero-container'><h1>neue rove</h1></div>
        </div>
        <div className='product-intro'>
          <div className='container'>
            <div className='row'>
                <div className='col-md-9 col-sm-12'>
                    <h1 className='lineup'>Line up</h1>
                    <div className='row'>
                      <div className='col-12 title'>-NAMIOTO-</div>
                      {namioto.map(this.renderProduct)}
                      <div id="myModal" className="modal">
                        <span className="close" onClick={()=>this.imgClose()}>&times;</span>
                        <img className="modal-content" id="myImg" alt='modal' onClick={()=>this.imgClose()}/>
                        <div id="caption"></div>
                      </div>
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col-12 title'>-HANABI-</div>
                      {hanabi.map(this.renderProduct)}
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col-12 title'>-IBUKI-</div>
                      {ibuki.map(this.renderProduct)}
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col-12 title'>-RAKUYOU-</div>
                      {rakuyou.map(this.renderProduct)}
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col-12 title'>-KANZASHI-</div>
                      {kanzashi.map(this.renderProduct)}
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col-12 title'>-SUIBI-</div>
                      {suibi.map(this.renderProduct)}
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col-12 title'>-GYOKUREN-</div>
                      {gyokuren.map(this.renderProduct)}
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col-12 title'>-HAKU-</div>
                      {haku.map(this.renderProduct)}
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col-12 title'>-MURASAME-</div>
                      {murasame.map(this.renderProduct)}
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col-12 title'>-RYUSEIGUN-</div>
                      {ryuseigun.map(this.renderProduct)}
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col-12 title'>-FUJI-</div>
                      {fuji.map(this.renderProduct)}
                    </div>
                    <hr />
                    <div className='row'>
                      <div className='col-12 title'>-TSUMUGI-</div>
                      {tsumugi.map(this.renderProduct)}
                    </div>
                </div>
                <div className='col-md-3 col-sm-12'>
                  <h3 className='lineup'>Basic specifications</h3>
                  <table className='table table-striped table-content'>
                    <tbody>
                      <tr><td colSpan='2'>Indoor Wallpaper</td></tr>
                      <tr><td>Price Range</td><td>22 to 61 CAD per meter</td></tr>
                      <tr><td>Main material</td><td>Fiber</td></tr>
                    </tbody>
                  </table>
                  <h3 className='lineup'>Document for Download</h3>
                  <a href={sampleBook} traget='_blank'>
                    <button type='button' className='btn btn-outline-secondary btn-block download button-content'>sample book PDF</button>
                  </a>
                  <a href={documentBook} traget='_blank'>
                    <button type='button' className='btn btn-outline-secondary btn-block download button-content'>Information PDF</button>
                  </a>
                  <a href={Lighting} traget='_blank'>
                    <button type='button' className='btn btn-outline-secondary btn-block download button-content'>Illumination</button>
                  </a>
                  <a href={liveimg} traget='_blank'>
                    <button type='button' className='btn btn-outline-secondary btn-block download button-content'>Sample room</button>
                  </a>
                  <a href={allImg} traget='_blank'>
                    <button type='button' className='btn btn-outline-secondary btn-block download button-content'>Image Source</button>
                  </a>
                  <h3 className='lineup'>Contact Us</h3>
                  <a href='/request_sample' traget='_blank'>
                    <button type='button' className='btn btn-outline-secondary btn-block download button-content'>Sample Request</button>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Neuerove;
