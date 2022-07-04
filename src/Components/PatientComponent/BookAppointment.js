import React, { Component } from 'react';

class BookAppointment extends Component {
  render() {
    return (
        <div>
          <div className='card mx-auto mt-5 justify-content-center' style={{width: "50%"}} >
          <div className='row'>
              <div className='col-12'>
                  <h5 className='p-5'>Book My New Appointment</h5>
                  <form class="needs-validation" novalidate >
                      <div className='form-group row m-3'>
                          <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Category</label>
                          <div className='col-sm-6'>
                              <select class="form-control form-control-sm" id="category" placeholder="col-form-label-sm" required>
                                  <option>Select Category</option>
                                  <option value={"General"}>General</option>
                                  <option value={"Private"}>Private</option>
                              </select>
                              <div class="invalid-feedback"> Please Select Category </div>
                          </div>
                      </div>
                      <div className='form-group row m-3'>
                          <label for="category" class="col-sm-2 col-form-label col-form-label-sm" >Department</label>
                          <div className='col-sm-6'>
                              <select class="form-control form-control-sm" id="Department" placeholder="col-form-label-sm" required>
                                  <option>Select Department</option>
                                  <option value={"Neurology"}>Neurology</option>
                                  <option value={"Cardiology"}>Cardiology</option>
                              </select>
                              <div class="invalid-feedback"> Please Select Department </div>
                          </div>
                      </div>
                      <div className='form-group row m-3'>
                          <label for="doctorName" class="col-sm-2 col-form-label col-form-label-sm" >Doctor Name</label>
                          <div className='col-sm-6'>
                              <select class="form-control form-control-sm" id="doctorName" placeholder="col-form-label-sm" required>
                                  <option>Select Doctor</option>
                                  <option value={"Navaneethan"}>Navaneethan</option>
                                  <option value={"Ravi"}>Ravi</option>
                              </select>
                              <div class="invalid-feedback"> Please Select Doctor Name </div>
                          </div>
                      </div>
                      <div className='form-group row m-3'>
                          <label for="dateOfAppointment" class="col-sm-2 col-form-label col-form-label-sm" >Doctor Name</label>
                          <div className='col-sm-6'>
                              <input type="date" id='dateOfAppointment' name='dateOfAppointment' required />
                              <div class="invalid-feedback"> Please Provide Date </div>
                          </div>
                      </div>
                      <button class="btn btn-primary m-5" type="submit">Book Now</button>
                  </form>
              </div>
          </div>
          </div>
        </div>
    );
  }
}

export default BookAppointment ;