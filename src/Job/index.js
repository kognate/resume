import React, { Component } from 'react';
import "./Job.css";

class Job extends Component {
  render() {
    return (<div>
      <div id="jobheader" className="Job-Header">
      <div className="Job-employerName">{this.props.job.employer.name}</div>
      <div className="Job-employmentDates">
      <span className="Job-start_date">{this.props.job.start_date}</span> to&nbsp;
      <span className="Job-end_date">{this.props.job.end_date
                                  ? this.props.job.end_date
                                  : 'Present' }</span>
      </div>
    </div>
    <div className='Job-body'>
      <div className="Job-title">{this.props.job.title}</div>
      <div className='Job-summary'>{this.props.job.summary}</div>
      <ul className='Job-skill-bulletpoints'>
        {this.props.job.bulletpoints.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  </div>);
  }
}

export default Job;
