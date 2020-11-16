import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import Unsplash, { toJson } from "unsplash-js";
import Autowhatever from "react-autowhatever";
import { withRouter } from "react-router-dom";
import Suggestions from "./searchSuggestions";

class SearchComponent extends Component {
  state = {
    searchQuery: "",
    suggestions: [],
    isHidden: true,
  };
  handleSuggestionsOff = () => {
    this.setState({ isHidden: true });
  };
  handleSearchByHint = (autoSuggest) => {
    localStorage.clear();
    localStorage.setItem("myValueInLocalStorage", autoSuggest);
    this.setState({ isHidden: true });
    this.handleSearch();
  };

  handleSearch = () => {
    this.props.history.push({
      pathname: "/Results",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSearch();
      this.setState({ isHidden: true });
    }
  };

  handleSuggestionsSearch = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://unsplash.com/nautocomplete/${this.state.searchQuery}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Client-ID",
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          suggestions: data,
        })
      );
  };

  handleInputChange = () => {
    this.setState(
      {
        searchQuery: this.search.value,
      },
      () => {
        if (this.state.searchQuery && this.state.searchQuery.length > 1) {
          if (this.state.searchQuery.length % 2 !== 0) {
            this.handleSuggestionsSearch();
            this.setState({ isHidden: false });
          }
        } else if (this.state.searchQuery < 2) {
          this.handleSuggestionsOff();
        }
      }
    );
    localStorage.setItem("myValueInLocalStorage", this.search.value);
  };

  render() {
    return (
      <div className="search-container">
        <InputGroup className="w-100 ">
          <FormControl
            placeholder="Search photos!"
            aria-label="Search photos"
            aria-describedby="basic-addon2"
            ref={(input) => (this.search = input)}
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />

          <InputGroup.Append>
            <Button variant="primary" onClick={this.handleSearch}>
              Button
            </Button>
          </InputGroup.Append>
          <Suggestions
            isHidden={this.state.isHidden}
            results={this.state.suggestions}
            onClick={(e) => this.handleSearchByHint(e)}
          />
        </InputGroup>
      </div>
    );
  }
}

export default withRouter(SearchComponent);
