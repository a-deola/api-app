// {
//     "slack_name": "example_name",
//     "current_day": "Monday",
//     "utc_time": "2023-08-21T15:04:05Z",
//     "track": "backend",
//     "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
//     "github_repo_url": "https://github.com/username/repo",
//     "status_code": 200
//   }

export type ResponsePayload = {
    slack_name: string;
    current_day: string;
    utc_time: string;
    track: string;
    github_file_url: string;
    github_repo_url: string;
    status_code: number;
}