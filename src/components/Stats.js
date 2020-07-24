import React, { useState, useEffect } from "react";
import { Doughnut, Bar } from "react-chartjs-2";

const Stats = ({ stats, userRepos }) => {
  const [repoStats, setRepoStats] = useState(null);
  const [languageStats, setLanguageStats] = useState(null);

  const languageStatistics = {
    labels: [],
    datasets: [{ data: [], backgroundColor: [], borderWidth: "0.01" }],
  };

  if (languageStats) {
    languageStats.map((element) => {
      languageStatistics.labels.push(element.label);
      languageStatistics.datasets[0].data.push(element.value);
      languageStatistics.datasets[0].backgroundColor.push(element.color);
    });
  }

  const repoStatistics = {
    labels: [],
    datasets: [{ data: [], backgroundColor: "orangered", borderWidth: "0.01" }],
  };

  if (repoStats) {
    repoStats
      .filter((repo) => !repo.fork)
      .sort((x, y) => y["stargazers_count"] - x["stargazers_count"])
      .slice(0, 4)
      .map((repo) => {
        repoStatistics.labels.push(repo.name);
        repoStatistics.datasets[0].data.push(repo.stargazers_count);
      });
  }

  useEffect(() => {
    setLanguageStats(stats);
    setRepoStats(userRepos);
  }, []);

  const options = {
    legend: {
      display: false,
    },
  };

  return (
    <>
      <p style={{ fontSize: "2rem", color: "white" }}>
        <strong>User stats</strong>
      </p>

      <div className='stats-grid'>
        <div className='graph-panel'>
          <p className='graph-title'>User's Language</p>
          <Doughnut borderColor='none' data={languageStatistics} />
        </div>
        <div className='graph-panel'>
          <p className='graph-title'>Most Starred Repo</p>
          <Bar data={repoStatistics} options={options} />
        </div>
      </div>
    </>
  );
};

export default Stats;
