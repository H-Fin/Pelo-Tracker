import React from 'react';

const UploadInstructions = () => {
  return (
    <ol>
      <li>Make sure you are signed in on Peloton.</li>
      <li>{'Visit your profile workout history '}
        <a 
          href='https://members.onepeloton.com/profile/workouts'
          rel="noopener noreferrer"
          target='_blank'
        >
          here.
        </a>
      </li> 
      <li>Click "Download Workouts" to get your CSV file.</li>
    </ol>
  );
}

export default UploadInstructions;