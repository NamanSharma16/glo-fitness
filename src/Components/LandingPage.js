import React from 'react'
import yoga from '../assets/yoga.jpeg'
import yoga2 from '../assets/madison.jpg'

function LandingPage() {
    return (
        <div className = 'hero-container'>
          {/* <div id="row-1">
              <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis sit ipsum nulla, nisi unde natus consequatur iste eos, amet nobis illo incidunt minus ipsa. Nihil ab accusantium libero beatae?</p></div>
              <div>
                  <img src={yoga} alt="" />
              </div>
          </div>
          <div id="row-2">
            <div className="card" style={{width: '18rem'}}>
                <img src={yoga} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img src={yoga} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div> 
            </div>    
            <div className="card" style={{width: '18rem'}}>
                <img src={yoga} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
          </div>
          <div></div>   */}
            <div className="container">
                <div className="row">
                    <div className="col my-5">
                    <h2>When you feel good, it shows.</h2>
                    <h4>Glo is designed to help you feel better in body and mind. Get unlimited access to the best online yoga, mediation, and Pilates classes.</h4>
                    <button className="btn btn-success my-5">Start free trial</button>
                    </div>
                    <div className="col">
                    <figure className="figure">
                        <img src={yoga2} className="figure-img img-fluid rounded" alt="..."/>
                    </figure>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                      <div className="card" style={{width: '18rem'}}>
                <img src={yoga} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
                    </div>
                    <div className="col">
                      <div className="card" style={{width: '18rem'}}>
                <img src={yoga} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
                    </div>
                    <div className="col">
                      <div className="card" style={{width: '18rem'}}>
                <img src={yoga} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
                    </div>
                    <div className="col">
                      <div className="card" style={{width: '18rem'}}>
                <img src={yoga} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;