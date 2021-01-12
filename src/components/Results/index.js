import React from "react";
import SearchBar from "../SearchBar"
import API from "../../utils/API";
import ResultList from "../ResultList";


class Results extends React.Component {
    state = {
        searchInput: "",
        Emp: []
    };

    componentDidMount() {
        this.renderEmp()
    };

    renderEmp = () => {
        API()
        .then(res => this.setState({ Emp: res.data.results}))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        this.setState({
            searchInput : event.target.value
        });


    };

    render(){
        const filteredEmp = (this.state.Emp).filter(employees => 
            employees.name.first.toLowerCase().includes((this.state.searchInput).toLowerCase()));

        return (
           <div>
               <SearchBar
               searchInput={this.state.searchInput}
               handleInputChange={this.handleInputChange}
               />
               <ResultList
               results = {filteredEmp}
               />
           </div>
        )
    }
}


export default Results;