import React from "react";
import SearchBar from "../SearchBar"
import API from "../../utils/API";
import ResultList from "../ResultList";


class SearchResults extends React.Component {
    state = {
        search: "",
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
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    render(){
        return (
           <div>
               <SearchBar
               search={this.state.search}
               handleInputChange={this.handleInputChange}
               />
               <ResultList
               results = {this.state.Emp}
               />
           </div>
        )
    }
}

// function NavBar() {
// return (
//     <table className="container-fluid">
//         <th>Image</th>
//         <th>Name</th>
//         <th>Location</th>
//         <tbody>
//             <td>Image 1</td>
//             <td>Name 1</td>
//             <td>Location 1</td>
//         </tbody>
//     </table>
// )
// };

export default SearchResults;