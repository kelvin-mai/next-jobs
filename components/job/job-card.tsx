import Link from "next/link";

import css from "./job.module.css";
import { ClockIcon, GlobeIcon } from "../common/icon";
import { GithubJob } from "../../lib/api";
import { fromToday } from "../../lib/date";
import { JobImage } from "./job-image";

export interface JobCardProps extends GithubJob {}

export const JobCard: React.FC<JobCardProps> = ({
  id,
  company,
  company_logo,
  title,
  type,
  location,
  created_at,
}) => (
  <Link href={`/job/${id}`}>
    <div className={css.card}>
      <JobImage src={company_logo} alt={company} size={90} />
      <div className={css.info}>
        <h2>{company}</h2>
        <h3>{title}</h3>
        <div className={css["info-line"]}>
          <span className={css["job-type"]}>{type}</span>
          <div className={css["icon-line"]}>
            <span>
              <GlobeIcon /> {location}
            </span>
            <span style={{ marginLeft: "1rem" }}>
              <ClockIcon /> {fromToday(created_at)}
            </span>
          </div>
        </div>
      </div>
    </div>
  </Link>
);
