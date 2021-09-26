import React, { useState } from 'react'
import Login from "./Login"
import { Link } from 'react-router-dom';


function Checkout() {
   

    return (
        <div className="container my-5" style={{width:"60%"}}>
            <h2>Checkout</h2>
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" /*required*/placeholder="abc@xyz.com"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="telephone-no" className="form-label">Phone No.</label>
                    <input type="tel" className="form-control" /*required*//>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address Line 1</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="House no, floor... 1234 Main St" /*required*//>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address Line 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Street, Area"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                    <option value>Choose...</option>
                    <option>New Delhi</option>
                    <option>Noida</option>
                    <option>Gurugram</option>
                    <option>Faridabad</option>
                    <option>Ghaziabad</option>
                    <option>Other</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/*required*//>
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Enroll!</button>
                </div>
                </form>
        </div>
    )
}
export default Checkout;