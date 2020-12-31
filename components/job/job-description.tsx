import { GithubJob } from '../../lib/api';
import { JobToApply } from './job-to-apply';
import { JobHeader } from './job-header';

export interface JobDescriptionProps extends GithubJob {}

export const JobDescription: React.FC<JobDescriptionProps> = ({
  title,
  description,
  location,
  type,
  company,
  company_logo,
  how_to_apply,
}) => {
  return (
    <div className="flex">
      <JobToApply html={how_to_apply} />
      <div>
        <JobHeader
          title={title}
          location={location}
          type={type}
          company={company}
          logo={company_logo}
        />
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};
