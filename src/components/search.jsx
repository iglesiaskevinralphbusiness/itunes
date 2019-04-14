import React from "react";
import Joi from "joi-browser";

//extends
import Form from "./forms/form";

class Search extends Form {
  schema = {
    keyword: Joi.string().label("Keyword")
  };

  render() {
    const { search_keyword } = this.props;

    return (
      <div className="search-area">
        <h2>Search Album</h2>
        {this.renderInput(
          "search_keyword",
          "Keyword",
          "text",
          search_keyword,
          "Enter album name or Artist"
        )}
      </div>
    );
  }
}

export default Search;
