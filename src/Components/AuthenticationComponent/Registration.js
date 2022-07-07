import React, { Component } from "react";

class Registration extends Component {

    handleSubmit (event) {
        event.preventDefault();

    let input = {};
    input["password"] = "";
    
    }
    validate(){
        let input = this.state.input;
        let isValid = true;
        let errors = {};

        if (typeof input["password"] !== "undefined" && typeof input["confirmpassword"] !== "undefined") {
          
            if (input["password"] != input["confirmpassword"]) {
              isValid = false;
              errors["password"] = "Passwords don't match.";
            }
        }
    }

    render() {
    return (
        <div>
          <div className='card mx-auto mt-5 justify-content-center' style={{width: "50%"}} >
          <div className='row'>
              <div className='col-12'>
                  <h4 className='p-5'><b>Registration</b></h4>
                  <form class="needs-validation" novalidate >
                      
                  <div className='form-group row m-3'>
                          <label className="col-sm-2 col-form-label col-form-label-sm" ><b>First Name</b></label>
                          <div className='col-sm-6'>
                              <input type="text" className="form-control form-control-sm" placeholder="Enter firstname" required/>
                              <div className="invalid-feedback"> Please enter firstname </div>
                          </div>
                      </div>

                  <div className='form-group row m-3'>
                          <label className="col-sm-2 col-form-label col-form-label-sm" ><b>Last Name</b></label>
                          <div className='col-sm-6'>
                              <input type="text" className="form-control form-control-sm" placeholder="Enter lastname" required/>
                              <div className="invalid-feedback"> Please enter lastname </div>
                          </div>
                 </div>
                      
                 <div className='form-group row m-3'>
                          <label className="col-sm-2 col-form-label col-form-label-sm" ><b>Gender</b></label>
                          <div className='col-sm-6'>
                          <div class="dropdown">
                            <button class="form-control form-control-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </button>
                        </div>
                  </div>
             </div>


                  <div className='form-group row m-3'>
                          <label for="dateOfBirth" class="col-sm-2 col-form-label col-form-label-sm" ><b>Date of Birth</b></label>
                          <div className='col-sm-6'>
                              <input type="date" className="form-control form-control-sm" id='dateOfBirth' name='dateOfBirth' required />
                              <div class="invalid-feedback"> Please Provide Date of Birth </div>
                          </div>
                      </div>


                 <div className='form-group row m-3'>
                          <label for="age" class="col-sm-2 col-form-label col-form-label-sm" ><b>Age</b></label>
                          <div className='col-sm-6'>
                              <input type="number" class="form-control form-control-sm" id="name" placeholder="Enter age" required/>
                              <div class="invalid-feedback"> Please enter age </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="address" class="col-sm-2 col-form-label col-form-label-sm" ><b>Address</b></label>
                          <div className='col-sm-6'>
                              <input type="text" class="form-control form-control-sm" id="name" placeholder="Enter address" required/>
                              <div class="invalid-feedback"> Please enter address </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="phonenumber" class="col-sm-2 col-form-label col-form-label-sm" ><b>Phone Number</b></label>
                          <div className='col-sm-6'>
                              <input type="text" class="form-control form-control-sm" id="name" placeholder="Enter phone number" required/>
                              <div class="invalid-feedback"> Please enter Phone Number </div>
                          </div>
                </div>

                <div className='form-group row m-3'>
                          <label className="col-sm-2 col-form-label col-form-label-sm" ><b>Role</b></label>
                          <div className='col-sm-6'>
                          <div class="dropdown">
                            <button class="form-control form-control-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>select Role</option>
                                    <option value="Patient">Patient</option>
                                    <option value="Doctor">Doctor</option>
                                    </select>
                                    </button>
                                    </div>
                                    </div>
                                    </div>

                <div className='form-group row m-3'>
                          <label for="education" class="col-sm-2 col-form-label col-form-label-sm" ><b>Education</b></label>
                          <div className='col-sm-6'>
                              <input type="text" class="form-control form-control-sm" id="name" placeholder="Education" required/>
                              <div class="invalid-feedback"> Please enter Education </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="experienceInYears" class="col-sm-2 col-form-label col-form-label-sm" ><b>Experience</b></label>
                          <div className='col-sm-6'>
                              <input type="number" class="form-control form-control-sm" id="name" placeholder="Experience in Years" required/>
                              <div class="invalid-feedback"> Please enter Experience </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="specializationindepartment" class="col-sm-2 col-form-label col-form-label-sm" ><b>Specialization In Department</b></label>
                          <div className='col-sm-6'>
                              <input type="text" class="form-control form-control-sm" id="name" placeholder="Enter specialization" required/>
                              <div class="invalid-feedback"> Please enter specializationInDepartment </div>
                          </div>
                </div>

                <div className='form-group row m-3'>
                          <label for="emailid" className="col-sm-2 col-form-label col-form-label-sm" ><b>Email Id</b></label>
                          <div className='col-sm-6'>
                              <input type="email" className="form-control form-control-sm" name="emailid" placeholder="Enter Email id" required/>
                              <div class="invalid-feedback"> Please enter Email </div>
                          </div>
                 </div>


                <div className='form-group row m-3'>
                          <label for="username" class="col-sm-2 col-form-label col-form-label-sm" ><b>Username</b></label>
                          <div className='col-sm-6'>
                              <input type="text" class="form-control form-control-sm" id="name" placeholder="Enter Username" required/>
                              <div class="invalid-feedback"> Please enter username </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="password" className="col-sm-2 col-form-label col-form-label-sm" ><b>Password</b></label>
                          <div className='col-sm-6'>
                              <input type="password" className="form-control form-control-sm" name="password" placeholder="Enter password" required/>
                              <div class="invalid-feedback"> Please enter password </div>
                          </div>
                </div>


                <div className='form-group row m-3'>
                          <label for="password" class="col-sm-2 col-form-label col-form-label-sm" ><b>Confirm Password</b></label>
                          <div className='col-sm-6'>
                              <input type="password" class="form-control form-control-sm" name="confirmPassword" placeholder="confirm password" required/>
                              <div class="invalid-feedback"> Please enter confirm password </div>
                          </div>
                </div>


                <button className="btn btn-dark m-5" type="submit" onSubmit={this.handleSubmit} style={{backgroundColor:'#70718D'}}>Register</button>

                  <p> Already Registered? </p>
                  <p><span className='line'><a href='./'><b>Click here to Login </b></a></span></p>

                      </form>
                      </div>
                      </div>
                      </div>
                      </div>
    );
}
}

export default Registration ;