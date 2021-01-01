import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { GithubJob, API_URL } from '../../lib/api';
import { Layout } from '../../components/layout';
import { JobDescription } from '../../components/job';

interface JobPageProps {
  job: GithubJob;
  redirect: boolean;
}

export const JobPage: React.FC<JobPageProps> = ({ job, redirect }) => {
  const router = useRouter();
  useEffect(() => {
    if (redirect) {
      router.push('/404');
    }
  }, []);
  const title = job ? `${job.title}` : 'Job Listing';
  return (
    <Layout title={title}>{Boolean(job) && <JobDescription {...job} />}</Layout>
  );
};

export const getServerSideProps = async (context: any) => {
  try {
    const { id } = context.params;
    const data = await fetch(`${API_URL}/${id}.json`);
    const json = await data.json();
    return {
      props: { job: json },
    };
  } catch (err) {
    return { props: { job: {}, redirect: true } };
  }
};

export default JobPage;
