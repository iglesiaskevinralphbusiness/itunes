import React from "react";
import Joi from "joi-browser";

//extends
import Form from "./forms/form";

class View extends Form {
  render() {
    const { count, pageSize } = this.props;
    const options = [
      { title: "All", value: "9999" },
      { title: "8 Albums", value: "8" },
      { title: "12 Albums", value: "12" },
      { title: "20 Albums", value: "20" },
      { title: "40 Albums", value: "40" }
    ];

    return (
      <React.Fragment>
        <p>Showing {count} albums.</p>
        <div className="list">
          <p>View</p>

          {this.renderSelect(options, "pageSize", "Page Size", pageSize)}
        </div>
      </React.Fragment>
    );
  }
}

export default View;
