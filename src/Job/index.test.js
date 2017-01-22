import React from 'react';
import ReactDOM from 'react-dom';
import Job from '.';

const sample_job =   { 'employer' : { 'name': 'IBM', 'location': 'Pittsburgh' },
    'start_date': '6/2017',
    'summary' : 'I write SDKs',
    'bulletpoints': [ 'python sdk', 'node sdk', 'stack overflow' ],
    'title': 'Advisory Software Engineer' };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Job job={sample_job}/>, div);
});
