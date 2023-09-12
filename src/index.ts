import express from "express";
import { ResponsePayload } from "./utils/types";
import { GITHUB_FILE_URL, GITHUB_REPO_URL } from "./utils/constants";
import { getDay, getUTC } from "./utils/helpers";

const app = express();

app.get("/", (req, res) => {
  const slackName = req.query.slack_name as string;
  const track = req.query.track as string;

  const day = getDay();
  const time = getUTC();

  const response: ResponsePayload = {
    slack_name: slackName,
    current_day: day,
    utc_time: time.toString(),
    track: track,
    github_file_url: GITHUB_FILE_URL,
    github_repo_url: GITHUB_REPO_URL,
    status_code: 200,
  };

  res.json(response);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
