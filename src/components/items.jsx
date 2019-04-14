import React from "react";

//jquery
import $ from "jquery";

//components
import Item from "./item";
import Pagination from "./pagination";
import Display from "./display";
import View from "./view";

//utils
import paginate from "../utils/paginate";

//react search
import { createFilter } from "react-search-input";
const KEYS_TO_FILTERS = ["im:name.label", "title.label", "im:artist.label"];

class Items extends React.Component {
  render() {
    const {
      albums,
      search_keyword,
      display,
      onFormChange,
      pageSize,
      category,
      currentPage,
      onPageChange
    } = this.props;

    //filter search
    const albums_filtered_search = albums.filter(
      createFilter(search_keyword, KEYS_TO_FILTERS)
    );

    //filter category
    var albums_filtered_category = "";
    if (category == "All") {
      albums_filtered_category = albums_filtered_search;
    } else {
      albums_filtered_category = albums_filtered_search.filter(
        a => a.category.attributes["im:id"] === category
      );
    }

    //filter pagination
    const { length: count } = albums_filtered_category;
    const albums_filtered_pagination = paginate(
      albums_filtered_category,
      currentPage,
      pageSize
    );

    return (
      <div className="albumsList">
        <div className="heading-title">
          <h2>{this.get_category_name(albums, category)}</h2>
          <Display display={display} onFormChange={onFormChange} />
        </div>
        <div className="heading-view">
          <View
            display={display}
            count={count}
            pageSize={pageSize}
            onFormChange={onFormChange}
          />
        </div>
        <div className="pagination">
          <Pagination
            itemCounts={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
        <div className="albums">
          <ul>
            {albums_filtered_pagination.map((album, index) => (
              <Item
                album={album}
                key={index}
                key_index={this.create_key(index)}
                display={display}
              />
            ))}
          </ul>
        </div>
        <div className="pagination">
          <Pagination
            itemCounts={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    );
  }

  get_category_name = (albums, id) => {
    const album = albums.find(a => a.category.attributes["im:id"] === id);
    if (id === "All") return "All Albums";
    return album.category.attributes.label;
  };

  create_key = index => {
    var new_key = "li" + index;
    return new_key;
  };
}

export default Items;
