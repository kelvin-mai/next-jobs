import { useState, useEffect } from 'react';

import { API_URL, GithubJob } from '../lib/api';
import { Layout } from '../components/layout';
import { SearchBox } from '../components/search';
import { JobCard } from '../components/job';

interface HomeProps {
  jobs: GithubJob[];
}

export const Home: React.FC<HomeProps> = ({ jobs }) => {
  return (
    <Layout title="Home">
      <SearchBox />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  try {
    const data = await fetch(`${API_URL}.json`);
    const json = await data.json();
    return {
      props: {
        jobs: json,
      },
    };
  } catch (err) {
    return {
      props: {
        jobs: [],
      },
    };
  }
};

export default Home;
