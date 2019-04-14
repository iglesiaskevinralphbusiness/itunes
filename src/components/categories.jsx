import React from "react";

class categories extends React.Component {
  render() {
    const { albums, active_category, onFormChange } = this.props;
    var categ = [];

    albums.map(album => categ.push(album.category.attributes.label));

    const category = Array.from(new Set(categ));
    category.sort();

    const result = [...category];

    return (
      <div className="category-area">
        <h2>Category</h2>
        <ul>
          <li
            onClick={() => onFormChange("category", "All")}
            className={this.get_category_active(albums, active_category, "All")}
          >
            All Albums ({this.get_total_albums(albums)})
          </li>
          {result.map((cat, index) => (
            <li
              key={index}
              onClick={() =>
                onFormChange("category", this.get_category_id(albums, cat))
              }
              className={this.get_category_active(albums, active_category, cat)}
            >
              {cat} ({this.get_total_items(albums, cat)})
            </li>
          ))}
        </ul>
      </div>
    );
  }

  get_total_items = (albums, cat) => {
    const total = albums.filter(a => a.category.attributes.label === cat);
    return total.length;
  };

  get_total_albums = albums => {
    return albums.length;
  };

  get_category_id = (albums, cat) => {
    const album = albums.find(a => a.category.attributes.label === cat);
    return album.category.attributes["im:id"];
  };

  get_category_name = (albums, cat) => {
    const album = albums.find(a => a.category.attributes["im:id"] === cat);
    return album.category.attributes.label;
  };

  get_category_active = (albums, active_category, value) => {
    if (active_category == "All") {
      if (active_category == value) return "active";
    } else {
      const active_value = this.get_category_name(albums, active_category);
      if (active_value == value) {
        return "active";
      }
    }
  };
}

export default categories;
