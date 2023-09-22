const React = require('react')

const Show = ({ log }) => (
  <div>
    <h1>{log.title}</h1>
    <p>{log.entry}</p>
    <p>Is the ship broken? {log.shipIsBroken ? 'Yes' : 'No'}</p>
    {log.createdAt && <p>Created on: {new Date(log.createdAt).toLocaleDateString()}</p>}
    <a href="/logs">Back to Index</a>
  </div>
);

module.exports = Show
