import React from 'react';
import { useForm } from 'react-hook-form';
import UserForm from './UserForm';

const Form = () => {

    const { register, handleSubmit, errors } = useForm(); 

    return (
        <UserForm 
            handleSubmit={handleSubmit} 
            register={register} 
            errors={errors} 
        />
    );
};

export default Form;