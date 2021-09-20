"use strict";

function About() {
  return (
    <React.Fragment>
      <p>A bit about me</p>
      <p><a href="/">Click here to go home</a></p>
      <p><a href="/cards">Click here to view the trading cards</a></p>
      <p><img src="/static/img/balloonicorn.jpg" /></p>
    </React.Fragment>
  );
}

ReactDOM.render(<About />, document.querySelector('#about'));
