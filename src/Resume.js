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
      'start_date': '6/2015',
      'summary' : 'I\'m currently in the Watson Group working on Watson Platform. I build sdks and tools for developers to understand Watson services and leverage for their own products.',
      'bulletpoints': [ 'python', 'javascript', 'react-js', 'bluemix', 'aws', 'java', 'iOS'],
      'title': 'Advisory Software Engineer' },
    { 'employer' : { 'name': 'AllTrails', 'location': 'San Fransisco' },
      'start_date': '6/2014',
      'end_date': '4/2015',
      'summary' : 'Primarily responsible for the iOS application and working with the API to provide first-rate mobile experience for our users.',
      'bulletpoints': [ 'iOS', 'ruby', 'java', 'GIS', 'aws'],
      'title': 'Mobile Developer' },
    { 'employer' : { 'name': 'Rubber City Wizards', 'location': 'Akron' },
      'start_date': '6/2013',
      'end_date': '6/2014',
      'summary' : 'We were a small consultancy focused on mobile development. We provide full stack development using Clojure, Ruby, and Javascript on the back end and iOS and Android on the front end (both in Web and Native).',
      'bulletpoints': [ 'iOS', 'python', 'aws', 'javascript'],
      'title': 'Co-Founder' },
    { 'employer' : { 'name': 'iRx Reminder, LLC', 'location': 'Akron' },
      'start_date': '8/2011',
      'end_date': '6/2016',
      'summary' : 'We write software for the medical and population health communities. We are focused on medication adherence and protocol compliance.',
      'bulletpoints': [ 'iOS', 'python', 'aws', 'clojure' ],
      'title': 'Development Lead' },
    { 'employer' : { 'name': 'Bluefrog Gaming', 'location': 'Akron' },
      'start_date': '8/2011',
      'end_date': '6/2016',
      'summary' : '',
      'bulletpoints': [ 'iphone', 'cocos2d', 'ruby', 'aws' ],
      'title': 'Development Lead' },
    { 'employer' : { 'name': 'Dix Communications', 'location': 'Akron' },
      'start_date': '8/2008',
      'end_date': '1/2010',
      'summary' : '',
      'bulletpoints': [ 'ruby', 'unix', 'bash', 'python', 'aws'],
      'title': 'Lead Web Developer' },
    { 'employer' : { 'name': 'Independent Consultant', 'location': 'Washington, DC' },
      'start_date': '6/2005',
      'end_date': '8/2008',
      'summary' : '',
      'bulletpoints': [ 'php', 'unix', 'bash', 'python', 'filemaker'],
      'title': 'Software and Infrastructure Consulting' },
     ] };

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
