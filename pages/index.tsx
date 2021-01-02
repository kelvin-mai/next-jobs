import { useState } from 'react';

import { API_URL, GithubJob } from '../lib/api';
import { Layout } from '../components/layout';
import { SearchBox, SearchLocation } from '../components/search';
import { Pagination } from '../components/pagination';
import { JobCard } from '../components/job';
import { SearchType } from '../components/search/search-type';
import { Loader } from '../components/common';

interface HomeProps {
  jobs: GithubJob[];
}

export const Home: React.FC<HomeProps> = (props) => {
  const [jobs, setJobs] = useState(props.jobs);
  const [loading, setLoading] = useState(false);
  const [fullTime, setFullTime] = useState(false);
  const [location, setLocation] = useState('');
  const [page, setPage] = useState(0);
  const handleSearch = (term?: string) => {
    setLoading(true);
    fetch('/api', {
      method: 'post',
      body: JSON.stringify({
        fullTime,
        location,
        page,
        term,
      }),
    })
      .then((res) => res.json())
      .then(setJobs)
      .then(() => setLoading(false))
      .catch(console.log);
  };
  const handlePageChange = (count: number) => {
    setPage(count - 1);
    handleSearch();
  };
  return (
    <Layout title="Home">
      <SearchBox onSearch={handleSearch} />
      <div className="responsive">
        <div className="search-widgets">
          <SearchType checked={fullTime} onChange={setFullTime} />
          <SearchLocation location={location} onChange={setLocation} />
        </div>
        <div className="full-width">
          {loading ? (
            <Loader />
          ) : (
            jobs.map((job) => <JobCard key={job.id} {...job} />)
          )}
          <Pagination
            current={page + 1}
            onChange={handlePageChange}
            hasNext={jobs.length === 50}
            disabled={loading}
          />
        </div>
      </div>
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
