import React from "react";
import "./Menu.css";

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        {this.props.pages.map(page => <a href onClick={() => this.props.onPageSelect(page)}>{ page.label }</a>)}
        <a
          href="https://drive.google.com/drive/folders/1IvO6w0ZGvKd5rP8ZTb7N08jHXPMEcv90?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Фото (гугл драйв)
        </a>
      </div>
    );
  }
}

export default Menu;
