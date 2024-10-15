import { useState } from 'react';
import './App.css';

// Functional component to render the work experience form
function WorkExperience({ index, experience, handleExperienceChange }) {
  return (
    <div className='workExp' id={`workExp-${index}`}>
      {/* Company */}
      <label htmlFor={`companyName-${index}`}>Company Name</label>
      <input
        type="text"
        className="companyName"
        id={`companyName-${index}`}
        value={experience.companyName}
        onChange={(e) => handleExperienceChange(index, 'companyName', e.target.value)}
      />

      {/* Title */}
      <label htmlFor={`jobTitle-${index}`}>Job Title</label>
      <input
        type="text"
        className="jobTitle"
        id={`jobTitle-${index}`}
        value={experience.jobTitle}
        onChange={(e) => handleExperienceChange(index, 'jobTitle', e.target.value)}
      />

      {/* Start Date */}
      <label htmlFor={`startDate-${index}`}>Start Date</label>
      <input
        type="date"
        className="startDate"
        id={`startDate-${index}`}
        value={experience.startDate}
        onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
      />

      {/* End Date */}
      <label htmlFor={`endDate-${index}`}>End Date</label>
      <input
        type="date"
        className="endDate"
        id={`endDate-${index}`}
        value={experience.endDate}
        onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
      />

      {/* Job Function */}
      <label htmlFor={`jobFunction-${index}`}>Job Responsibilities</label>
      <input
        type="text"
        className="jobFunction"
        id={`jobFunction-${index}`}
        value={experience.jobFunction}
        onChange={(e) => handleExperienceChange(index, 'jobFunction', e.target.value)}
      />
    </div>
  );
}

function App() {
  // State to hold the list of work experiences
  const [workExperiences, setWorkExperiences] = useState([]);

  // Function to handle adding a new work experience entry
  const addWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { companyName: '', jobTitle: '', startDate: '', endDate: '', jobFunction: '' }
    ]);
  };

  // Function to handle updating an individual work experience field
  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = workExperiences.map((exp, expIndex) =>
      expIndex === index ? { ...exp, [field]: value } : exp
    );
    setWorkExperiences(updatedExperiences);
  };

  return (
    <div>
      <h1>CV Header</h1>
      <p>Input your personal information</p>

      {/* Personal Information */}
      <div className="personalInfo" id="personalInfo">
        <label htmlFor="Name">Name</label>
        <input type="text" className="Name" id="Name" />

        <label htmlFor="email">Email Address</label>
        <input type="email" className="email" id="email" />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" className="phoneNumber" id="phoneNumber" />

        <label htmlFor="jobTitle">Job Title</label>
        <input type="text" className="jobTitle" id="jobTitle" />

        <label htmlFor="city">City</label>
        <input type="text" className="city" id="city" />

        <label htmlFor="state">State</label>
        <input type="text" className="state" id="state" />
      </div>

      <p>Click the button to add a new work experience.</p>
      <div className='WorkExperience'>
        {/* Button to add new work experience */}
        <button onClick={addWorkExperience}>Add Work Experience</button>
      </div>

      {/* Dynamically render work experience inputs */}
      {workExperiences.map((experience, index) => (
        <WorkExperience
          key={index}
          index={index}
          experience={experience}
          handleExperienceChange={handleExperienceChange}
        />
      ))}
    </div>
  );
}

export default App;
