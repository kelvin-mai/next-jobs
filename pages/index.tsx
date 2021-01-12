import { API_URL, GithubJob } from "../lib/api";
import { Layout } from "../components/layout";
import { JobCard } from "../components/job";
import { SearchBox, SearchType, SearchLocation } from "../components/search";
import { Pagination } from "../components/pagination";
import { useState } from "react";
import { Loader } from "../components/common";

interface HomeProps {
  jobs: GithubJob[];
}

export default function Home(props: HomeProps) {
  const [jobs, setJobs] = useState<GithubJob[]>(props.jobs);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(false);
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(0);
  const handleSearch = (term?: string) => {
    setLoading(true);
    fetch("/api", {
      method: "post",
      body: JSON.stringify({
        term,
        type,
        location,
        page,
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
          <SearchType checked={type} onChange={setType} />
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
}

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
