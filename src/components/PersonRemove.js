import React from 'react';
import API from '../api';

export default class PersonRemove extends React.Component {
handleSubmit = event => {
event.preventDefault();
API.delete(`users/${this.state.id}`)
.then(res => {
console.log(res);
console.log(res.data);
})
}

render() {
    return (
    <div>
    <form onSubmit={this.handleSubmit}>
    <label>
    Person ID:
    <input type="number" name="id" onChange={this.handleChange} />
    </label>
    <button type="submit">Delete</button>
    </form>
    </div>
    )
    }
}