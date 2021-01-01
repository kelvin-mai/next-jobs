import Link from 'next/link';

import { GithubJob } from '../../lib/api';
import { fromToday } from '../../lib/date';
import { ClockIcon, GlobeIcon } from '../common/icons';
import { JobImage } from './job-image';

import css from './job.module.css';

export interface JobCardProps extends GithubJob {}

export const JobCard: React.FC<JobCardProps> = ({
  id,
  company_logo,
  company,
  title,
  type,
  location,
  created_at,
}) => (
  <Link href={`/job/${id}`}>
    <div className={css.card}>
      <JobImage src={company_logo} alt={company} size={90} />
      <div className={css.info}>
        <h2>{company}</h2>
        <h3>{title}</h3>
        <div className={css['info-line']}>
          <span className={css['job-type']}>{type}</span>
          <div className={css['icon-line']}>
            <span>
              <GlobeIcon /> {location}
            </span>
            <span className="ml-1">
              <ClockIcon /> {fromToday(created_at)}
            </span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);
