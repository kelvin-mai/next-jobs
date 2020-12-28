import { useState, useEffect } from 'react';

import { Layout } from '../components/layout';
import { SearchBox } from '../components/search';
import { JobCard } from '../components/job';

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then(setJobs);
  }, []);

  console.log(jobs);

  return (
    <Layout title="Home">
      <SearchBox />
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </Layout>
  );
}
