import React from "react";
import "./styles.css";
import cookieImageClosed from "./fortune-cookie-closed.png";
import cookieImageOpen from "./fortune-cookie-open.png";
import classnames from "classnames";

// create and export class, so we can see this class in main
export class FortuneCookie extends React.Component {
  render() {
    const isOpen = this.props.isOpen;
    const classes = classnames({
      FortuneCookie: true,
      "FortuneCookie--open": isOpen
    });

    return (
      <div className={classes}>
        <img
          src={isOpen ? cookieImageOpen : cookieImageClosed}
          alt="Fortune Cookie"
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}
