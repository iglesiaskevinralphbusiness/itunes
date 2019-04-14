import React from "react";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Display extends React.Component {
  render() {
    const { display, onFormChange } = this.props;

    return (
      <ul>
        <li className={this.get_active_display(true, display)}>
          <FontAwesomeIcon
            icon="th-large"
            size="2x"
            style={{ color: "#6DB65B" }}
            onClick={() => onFormChange("display", true)}
          />
        </li>
        <li className={this.get_active_display(false, display)}>
          <FontAwesomeIcon
            icon="list"
            size="2x"
            style={{ color: "#6DB65B" }}
            onClick={() => onFormChange("display", false)}
          />
        </li>
      </ul>
    );
  }

  get_active_display = (rules, value) => {
    if (rules == value) {
      return "active";
    }
  };
}

export default Display;
