import React from 'react'
import './Login.css'

function Login() {
    return (
        <>

        <div className="container my-5 py-5 px-5" style={{width:'40%', backgroundColor: 'white', borderRadius:'8px', boxShadow:"initial", fontWeight:'bold'}}>
            <form>
                <div className="row mb-3 ">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Role</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                            <label className="form-check-label" for="gridRadios1">
                        Trainer
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                            <label className="form-check-label" for="gridRadios2">
                            Member
                            </label>
                        </div>

                    </div>
                    </fieldset>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label className="form-check-label" for="gridCheck1">
                                Keep me signed in
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
        </div>
        </>
    )
}
export default Login;