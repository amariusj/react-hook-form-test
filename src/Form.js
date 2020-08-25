import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);
        alert(`Hello ${data.firstname} ${data.lastname}! You've selected the role: ${data.role}`);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input name="firstname" type="text" className="form-control" ref={register({ required: true })} />
                { errors.firstname && "First name is required" }
            </div>
            <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input name="lastname" type="text" className="form-control" ref={register({ required: true })} />
                { errors.lastname && "Last name is required" }
            </div>
            <div className="form-group">
                <label htmlFor="role">Job Role:</label>
                <select name="role" className="form-control" ref={register}>
                    <option value="front-end">Front End</option>
                    <option value="back-end">Back End</option>
                    <option value="full-stack">Full Stack</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
        </form>
    );
};

export default Form;