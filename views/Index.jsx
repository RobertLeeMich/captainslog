const React = require("react");

const Index = ({ logs }) => (
  <div>
    <h1>Logs</h1>
    <ul>
      {logs.map((log, index) => (
        <li key={index}>
          <a href={`/logs/${log._id}`}>{log.title}</a>
        </li>
      ))}
    </ul>
    <a href="/logs/new">Create New Log</a>
  </div>
);

module.exports = Index;
