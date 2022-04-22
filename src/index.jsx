'use strict';

import Button from "./button";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="app">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quas! <br />
        <Button />
      </div>
    )
  }
}

let domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<Index />); 