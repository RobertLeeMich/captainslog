const React = require('react');

const Index = ({ logs }) => (
  <div>
    <h1>Captain's Log Index</h1>
    <a href="/logs/new">Create New Log</a>
    <ul>
      {logs.map((log, index) => (
        <li key={index}>
          <a href={`/logs/${log._id}`}>{log.title}</a>
          <form action={`/logs/${log._id}?_method=DELETE`} method="post">
            <input type="submit" value="Delete"/>
            <a href={`/logs/${log._id}/edit`}>Edit</a>
          </form>
        </li>
      ))}
    </ul>
  </div>
);

module.exports = Index;
