import React, { Component } from "react";
import API from "../../utils/API";
import Input from "../Input/index";
// import Button from "../Button/index";

export default class searchBar extends Component {
  constructor(props) {
    super([props]);
    this.state = {
      beers: [{}],
      filteredBeers: [{}],
    };
  }

  componentDidMount() {
    API.getBeers()
      .then((res) => {
        console.log(res);
        this.setState({
          beers: res.data.data,
        });
      })
      .catch((err) => console.log(err));
  }

  handleOnChange = (event) => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.beers.filter((item) => {
        return item.name === filter;

    });
    console.log(filteredList)
    this.setState({ filteredBeers: filteredList });
    console.log(this.state.filteredBeers)
  };

  render() {
    return (
      <div className="searchBar">
        <Input onChange={this.handleOnChange} />

      </div>
    );
  }
}
