const React = require('react');

const Edit = ({ log }) => (
  <div>
    <h1>Edit Log</h1>
    <form action={`/logs/${log._id}?_method=PUT`} method="post">
      <label>Title: </label>
      <input type="text" name="title" defaultValue={log.title} />
      <label>Entry: </label>
      <textarea name="entry" defaultValue={log.entry}></textarea>
      <label>Is Ship Broken? </label>
      <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken} />
      <input type="submit" value="Update Log" />
    </form>
  </div>
);

module.exports = Edit;
