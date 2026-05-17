"use client";
import { StarIcon } from "lucide-react";
import * as React from "react";

export function GitHubLink() {
  const [json, setJson] = React.useState<{
    stargazers_count: number;
  } | null>(null);

  React.useEffect(() => {
    getGitHubData();
  }, []);

  const getGitHubData = async () => {
    const data = await fetch(
      "https://api.github.com/repos/iamsrikanthnani/pluely",
      {
        next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
      }
    );
    const json = await data.json();
    setJson(json);
  };

  return (
    <React.Suspense fallback={"Loading..."}>
      <span className="flex flex-row gap-1 items-center">
        <StarIcon className="fill-current" />
        {json?.stargazers_count && json.stargazers_count >= 1000
          ? `${(json?.stargazers_count / 1000).toFixed(1)}K`
          : json?.stargazers_count?.toLocaleString()}{" "}
        stars on GitHub
      </span>
    </React.Suspense>
  );
}
