import React from "react";




function ResultList(props) {
    const renderTable = (props) => {
        return props.results.map(result => {
            const {picture, name, phone, email, location, id } = result;
        return (
            <tr key={id.value}>
                <td><img alt="employee" src={picture.large} /></td>
                <td>{name.first} {name.last}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{location.city}, {location.state}</td>
            </tr>
        )
        })
    }
return (
        <table>
            <thead>
            <tr>
                <th><strong>Image</strong></th>
                <th><strong>Name</strong></th>
                <th><strong>Phone</strong></th>
                <th><strong>Email</strong></th>
                <th><strong>Location</strong></th>
            </tr>
            </thead>
        <tbody>
            {renderTable(props)}
        </tbody>
        </table>)
    
};


export default ResultList;