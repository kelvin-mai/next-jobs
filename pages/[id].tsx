import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { GithubJob } from '../lib/api';
import { Layout } from '../components/layout';
import { JobDescription } from '../components/job';

export const JobPage = () => {
  const [job, setJob] = useState<GithubJob>(null);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    id &&
      fetch(`/api/${id}`)
        .then((res) => res.json())
        .then(setJob);
  }, [id]);
  console.log(job);
  const title = job ? `${job.title}` : 'Job Listing';
  return (
    <Layout title={title}>{Boolean(job) && <JobDescription {...job} />}</Layout>
  );
};

export default JobPage;
