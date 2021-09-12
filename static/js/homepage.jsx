"use strict";

function Homepage() {
  return (
    <React.Fragment>
      <p>Welcome to our Trading Cards site!</p>
      <p><a href="/cards">Click here to view the trading cards</a></p>
      <p><img src="/static/img/balloonicorn.jpg" /></p>
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
