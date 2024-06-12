import Career from '../components/careers/Career.jsx';
import jobListings from '../data/jobs.js';
import './Careers.css';
const Careers = () => {
  return (
    <section className="careers">
      <h2>Open Job Opportunities</h2>
      <div className="careers__list">
        {jobListings.map((job) => (
          <Career key={job.jobTitle} job={job} />
        ))}
      </div>

      <a className="careers__applyButton" href="mailto:liu.xu1@northeastern.edu">
        Apply
      </a>
    </section>
  );
};
export default Careers;
