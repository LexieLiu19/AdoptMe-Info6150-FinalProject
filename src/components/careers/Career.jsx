const Career = ({ job }) => {
  return (
    <div className="career">
      <h3>Position: {job.jobTitle}</h3>
      <div>
        <h4>Job Locations: </h4>
        <span>{job.location}</span>
      </div>
      <div>
        <h4>Salaries: </h4>
        <span>{job.salary}</span>
      </div>

      <h4>Job Description:</h4>
      <p> {job.jobDescription}</p>

      <ul>
        <h4>Job Responsibilities: </h4>
        {job.responsibilities.map((resp) => (
          <li key={resp}>{resp}</li>
        ))}
      </ul>

      <ul>
        <h4>Requirements: </h4>
        {job.qualifications.map((quali) => (
          <li key={quali}>{quali}</li>
        ))}
      </ul>
    </div>
  );
};
export default Career;
