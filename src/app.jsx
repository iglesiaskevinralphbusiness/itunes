import React from "react";

//components
import Items from "./components/items";
import Search from "./components/search";
import Categories from "./components/categories";

//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faList } from "@fortawesome/free-solid-svg-icons";
library.add(faThLarge, faList);

//json data
const API = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

class App extends React.Component {
  state = {
    albums: [],
    settings: {
      search_keyword: "",
      display: true,
      currentPage: 1,
      pageSize: 12,
      category: "All"
    }
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(jsonData => this.setState({ albums: jsonData.feed.entry }))
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { albums, settings } = this.state;

    return (
      <React.Fragment>
        <header>
          <div className="container">
            <div className="row">
              <div className="col">
                <ul>
                  <li>
                    <a href="/">Music</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            <div className="row">
              <div className="col">
                <aside>
                  <Search
                    search_keyword={settings.search_keyword}
                    onFormChange={this.onFormChange}
                  />
                  <Categories
                    albums={albums}
                    active_category={settings.category}
                    onFormChange={this.onFormChange}
                  />
                </aside>
              </div>
              <div className="col-md-9">
                <Items
                  albums={albums}
                  search_keyword={settings.search_keyword}
                  display={settings.display}
                  pageSize={settings.pageSize}
                  category={settings.category}
                  currentPage={settings.currentPage}
                  onFormChange={this.onFormChange}
                  onPageChange={this.onPageChange}
                />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col">
                <p>
                  &copy; 2019 -
                  <a href="https://iglesiaskevinralphbusiness.github.io/">
                    Ralph Kevin
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }

  onPageChange = page => {
    const settings = { ...this.state.settings };
    settings.currentPage = page;
    this.setState({ settings });
  };

  onFormChange = (objet_name, value) => {
    const settings = { ...this.state.settings };
    settings[objet_name] = value;
    settings.currentPage = 1;
    this.setState({ settings });
  };
}

export default App;
