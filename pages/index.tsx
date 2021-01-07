import { API_URL, GithubJob } from "../lib/api";
import { Layout } from "../components/layout";
import { JobCard } from "../components/job";
import { SearchBox, SearchType, SearchLocation } from "../components/search";
import { useState } from "react";

interface HomeProps {
  jobs: GithubJob[];
}

export default function Home(props: HomeProps) {
  const [jobs, setJobs] = useState<GithubJob[]>(props.jobs);
  const [type, setType] = useState(false);
  const [location, setLocation] = useState("");
  const handleSearch = (term: string) => {
    fetch("/api", {
      method: "post",
      body: JSON.stringify({
        term,
        type,
        location,
      }),
    })
      .then((res) => res.json())
      .then(setJobs)
      .catch(console.log);
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
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
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
