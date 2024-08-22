import { useForm } from "react-hook-form";
import {yupResolver}from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { resolve } from "styled-jsx/macro";

const loginSchema= Yup.object({
    email:Yup.string().email("Please enter valid email").required("Please fill this field"),
    password:Yup.string().min(6,"Please enter minimum 6 characters for password").required("Please fill this field"),

    
})

export const loginValidation=()=>({
    resolver:yupResolver(loginSchema)
})