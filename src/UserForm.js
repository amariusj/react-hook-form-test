import React, { Component } from 'react';
import User from './User';

class UserForm extends Component {

    state = {
        users: []
    }

    onSubmit = (data, e) => {
        console.log(data);
        let userId = this.state.users.length + 1;
        const { firstname, lastname, role } = data;
        let user = new User(firstname, lastname, role, userId );
        user.logUser();
        this.state.users.push(user);
        console.log(this.state.users);
        e.target.reset();
    }

    render() {
        return (
            <>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input name="firstname" type="text" className="form-control" ref={this.props.register({ required: true })} />
                        { this.props.errors.firstname && "First name is required" }
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input name="lastname" type="text" className="form-control" ref={this.props.register({ required: true })} />
                        { this.props.errors.lastname && "Last name is required" }
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Job Role:</label>
                        <select name="role" className="form-control" ref={this.props.register}>
                            <option value="front-end">Front End</option>
                            <option value="back-end">Back End</option>
                            <option value="full-stack">Full Stack</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
                </form>
                <section className="mt-4">
                <h2>Users:</h2>
                <ul>
                    { this.state.users.map( user => {
                        return <li key={user.id} className="my-5">{user.firstname}</li>
                    }) }
                </ul>
                </section>
            </>
        );
    }
}

export default UserForm;