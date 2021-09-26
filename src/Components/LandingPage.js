import React from 'react'
import yoga from '../assets/yoga.jpeg'
import yoga2 from '../assets/madison.jpg'
import pilates from '../assets/pilates.jpeg'
import personalTrain from '../assets/personalTraining.jpeg'
import meditation from '../assets/meditation.jpeg'
import { NavLink } from 'react-router-dom'

function LandingPage() {
    return (
        <div className = 'hero-container'>
          
            <div className="container">
                <div className="row my-5" 
                    style={{
                        backgroundColor:"#f0f0f4", 
                        borderRadius:"5px",
                        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}
                >
                    <div className="col" 
                        style={{
                            display:"flex", 
                            flexDirection:"column", 
                            alignContent:"center", 
                            justifyContent:"center",
                        }}
                    >
                        <div style={{width:'80%'}}>
                        <h1>When you feel good, <br/>it shows.</h1>
                        <hr/>
                        <h3><strong>Glo </strong> is designed to help you feel better in body and mind.</h3> 
                        <h3>Get unlimited access to the best online yoga, mediation, and Pilates classes.</h3>
                        <button 
                            className="btn btn-success my-5" 
                            style={{
                                maxWidth:"fit-content", 
                                fontWeight:"bold",
                                
                            }}
                        >
                        <NavLink to='/login' style={{textDecoration:"none", color:'white'}}>Start free trial</NavLink>
                        </button>
                        </div>

                    </div>
                    <div className="col"
                        style={{
                            display:"flex", alignContent:"center", justifyContent:"center"}}
                    >
                    <figure className="figure" 
                   
                    >
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
                                <h5 className="card-title">YOGA</h5>
                                <p className="card-text">Delivering yoga sessions in a virtual format. We are now offering our upcoming 200 hour Yoga Training Sessions in an online format.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: '18rem'}}>
                            <img src={meditation} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">MEDITATION</h5>
                                <p className="card-text">Experience the peace and joy of true meditation. Online sessions for everyone, suitable for complete beginners and regular meditators.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{width: '18rem'}}>
                            <img src={personalTrain} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">PILATES</h5>
                                <p className="card-text">Trained pilates coaches to help you thrive in all your athletic pursuits by focusing on the strength and mobility work that keeps you strong and supple for a lifetime.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                      <div className="card" style={{width: '18rem'}}>
                <img src={pilates} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">PERSONALISED LESSONS</h5>
                    <p className="card-text">Your style, your pace. Customized lessons designed for you. Top rated instructors guide you in every step of your journey</p>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;