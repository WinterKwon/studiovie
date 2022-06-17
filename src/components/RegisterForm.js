import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import {BrowserRouter, Routes, Route,Link, useLocation} from 'react-router-dom';
import HomePage from './HomePage';


function FieldsetComponent ({ title, placeholder}){
    return(
        <StyledFieldset>
            <label htmlFor={title}>{title}</label>
            <input placeholder = {placeholder} name = {title}  />
        </StyledFieldset>
    )

}

export default function RegisterForm( {onSubmit}) {
   const [ title, setTitle] = useState('');
   const [ period, setPeriod] = useState('');
   const [ role, setRole] = useState('');
   const [ area, setArea] = useState('');
   
   function submitForm(e) {
        e.preventDefault();
        
        
        const formData = {
            key : new Date().getTime(),
            title,
            period,
            role,
            area
        }
        onSubmit(formData);
    }

    return(
        <div>  <FieldsetComponent title="Title" placeholder = "enter title" />
               <FieldsetComponent title="Role" placeholder="enter your role" />
               <FieldsetComponent title = "period" placeholder="enter time of period" />
               <FieldsetComponent title = "area" placeholder = "enter the area of square meters or py" />
               <button onClick = {submitForm}>Register</button>
        </div>
    )

}


const StyledFieldset = styled.fieldset`
    > label {
        display : inline-block;
        width : 120px;}
    > input {
        width : 250px;
    }

`;

const Button = styled.button`

`;