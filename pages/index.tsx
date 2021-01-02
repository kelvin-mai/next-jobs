import { API_URL, GithubJob } from "../lib/api";
import { Layout } from "../components/layout";

interface HomeProps {
  jobs: GithubJob[];
}

export default function Home(props: HomeProps) {
  return <Layout title="Home">Home page works!</Layout>;
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
