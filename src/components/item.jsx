import React from "react";

const item = props => {
  const { album, display, key_index } = props;

  //<img src={album["im:image"][2].label} />

  if (display === true) {
    return (
      <li key={key_index} className="grid">
        <a href={album.link.attributes.href}>
          <span className="item">
            <span className="pic">
              <img src={album["im:image"][2].label} />
            </span>
            <span className="label">
              <span className="title">{album["im:name"].label}</span>
              <span className="artist">{album["im:artist"].label}</span>
            </span>
            <span className="price">{album["im:price"].label}</span>
          </span>
          <span className="buy">Buy Now</span>
        </a>
      </li>
    );
  } else {
    return (
      <li key={key_index} className="list">
        <a href={album.link.attributes.href}>
          <span className="pic">
            <img src={album["im:image"][2].label} />
          </span>
          <span className="label">
            <span className="title">{album["im:name"].label}</span>
            <span className="artist">{album["im:artist"].label}</span>
            <span className="price">{album["im:price"].label}</span>
          </span>
        </a>
      </li>
    );
  }
};

export default item;
