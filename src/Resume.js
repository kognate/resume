import React, { Component } from 'react';
import Address from './Address';
import Job from "./Job";
import './Resume.css';

const cv_data = {
  'name': { 'full': 'Joshua B. Smith',
	    'email': 'kognate@gmail.com',
  'address': {}},
  'jobs': [
    { 'employer' : { 'name': 'IBM', 'location': 'Pittsburgh' },
      'start_date': '6/2017',
      'summary' : 'I write SDKs',
      'bulletpoints': [ 'python sdk', 'node sdk', 'stack overflow' ],
      'title': 'Advisory Software Engineer' } ] };

class Resume extends Component {
  render() {
    return (
	<div className="Resume">
    <div className="Resume-header">
      <div className="Resume-contact">
        <h3 className="Resume-email">{cv_data.name.email}</h3>
        {cv_data.name.phone
          ? <h3 className="Resume-phone">{cv_data.name.phone}</h3>
          : <span></span> }
        {cv_data.address
          ? <Address
             name="Home"
             street={cv_data.address.primary.street}
             city={cv_data.address.primary.city}
             state={cv_data.address.primary.state}
             zip={cv_data.address.primary.zip}/>
          : <span></span> }
        </div>
        <h1>{cv_data.name.full}</h1>
        </div>
        <div className="Resume-jobs">
          {cv_data.jobs.map(function(item) {
            return <Job key={`${item.employer.name}-${item.start_date}`}
                        job={item}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Resume;
