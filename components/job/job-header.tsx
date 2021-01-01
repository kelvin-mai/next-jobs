import css from './job.module.css';
import { ClockIcon, GlobeIcon } from '../common/icons';
import { JobImage } from './job-image';

export interface JobHeader {
  title: string;
  location: string;
  type: string;
  company: string;
  logo: string;
  daysAgo: string;
}

export const JobHeader: React.FC<JobHeader> = ({
  title,
  location,
  type,
  company,
  logo,
  daysAgo,
}) => (
  <>
    <div className={css['title-line']}>
      <h2>{title}</h2>
      <div className={css['job-type']}>{type}</div>
    </div>
    <div className={css['icon-line']}>
      <ClockIcon /> {daysAgo}
    </div>
    <div className="flex">
      <JobImage src={logo} alt={company} size={50} />
      <div className="ml-1">
        <h3 className={css['sub-title']}>{company}</h3>
        <span className={css['icon-line']}>
          <GlobeIcon /> {location}
        </span>
      </div>
    </div>
  </>
);
