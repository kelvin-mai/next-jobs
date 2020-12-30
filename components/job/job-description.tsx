import Link from 'next/link';

import css from './job.module.css';
import { GithubJob } from '../../lib/api';
import { JobImage } from './job-image';

export interface JobDescriptionProps extends GithubJob {}

export const JobDescription: React.FC<JobDescriptionProps> = ({
  title,
  description,
  type,
  company,
  company_logo,
  how_to_apply,
}) => {
  return (
    <div className={css['job-description']}>
      <div className={css.apply}>
        <Link href="/">
          <a>Back to search</a>
        </Link>
        <h3 className={css['apply-header']}>how to apply</h3>
        <div dangerouslySetInnerHTML={{ __html: how_to_apply }} />
      </div>
      <div>
        <div className={css['title-line']}>
          <h2>{title}</h2>
          <div className={css['job-type']}>{type}</div>
        </div>
        <JobImage src={company_logo} alt={company} size={42} />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};
