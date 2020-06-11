import React, { Component } from "react";
import API from "../../utils/API"

export default class searchBar extends Component {
    constructor(props) {
        super([props]);
        this.state = {
            filteredBeers: []
        }
    }

    componentDidMount() {
        API.getBeers()
        .then((res) => {
            this.setState({
                filteredBeers: res.data.results
            });
        })
        .catch((err) => console.log(err));
    }

    handleOnChange = (event) => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filteredList = this.state.beers.filter(item => {
            let values = Object.value(item)

            .join("")
            .toLowerCase("");
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredBeers: filteredList});
        console.log(filteredList)
    };

   render() {
       return (
           <div>
               
           </div>
       )
   }
}