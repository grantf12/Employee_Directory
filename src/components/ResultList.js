import React from "react";



function ResultList(props) {
    const renderTable = (props) => {
        return props.results.map(result => {
            const {picture, name, phone, email, dob} = result;
        return (
            <tr>
                <td><img alt="employee" src={picture.large} /></td>
                <td>{name.first} {name.last}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{dob.date}</td>
            </tr>
        )
        })
    }
return (
        <table>
            <tr>
                <th><strong>Image</strong></th>
                <th><strong>Name</strong></th>
                <th><strong>Phone</strong></th>
                <th><strong>Email</strong></th>
                <th><strong>DOB</strong></th>
            </tr>
        <tbody>
            {renderTable(props)}
        </tbody>
        </table>)
    
};


export default ResultList;