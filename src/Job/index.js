import React, { Component } from 'react';
import styles from "./Job.css"

class Job extends Component {
  render() {
    return (<div>
      <div><pre>{JSON.stringify(styles.Job)}</pre></div>
      <div id="jobheader" className={styles.JobHeader}>
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
      <ol>
        {this.props.job.bulletpoints.map((item) => <li key={item}>{item}</li>)}
      </ol>
    </div>
  </div>);
  }
}

export default Job;
