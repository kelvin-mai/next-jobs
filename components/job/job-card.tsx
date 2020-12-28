import { GithubJob } from '../../lib/api';

import css from './job.module.css';

export interface JobCardProps extends GithubJob {}

export const JobCard: React.FC<JobCardProps> = ({
  company_logo,
  company,
  title,
  type,
  location,
  created_at,
}) => (
  <div className={css.card}>
    <div className={css['image-container']}>
      <img src={company_logo} alt={company} />
    </div>
    <div className={css.info}>
      <h2>{company}</h2>
      <h3>{title}</h3>
      <div className={css['info-line']}>
        <span>{type}</span>
        <div>
          <span>{location}</span>
          <span>{created_at}</span>
        </div>
      </div>
    </div>
  </div>
);
