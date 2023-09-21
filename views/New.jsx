const React = require('react');

const New = () => (
  <form action="/logs" method="POST">
    <input type="text" name="title" placeholder="Title" />
    <textarea name="entry" placeholder="Entry"></textarea>
    <input type="checkbox" name="shipIsBroken" />
    <input type="submit" value="Submit" />
  </form>
);

module.exports = New;
