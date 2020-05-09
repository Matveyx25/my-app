import React from 'react'
import s from './FormControls.module.css'
import { Field } from 'redux-form'

const FormControl = ({input , meta , child , ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            {props.children}
              { hasError && <span>{meta.error}</span>}              
        </div>
    )
}

export const Textarea = (props) => {
    const {input , meta , child , ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...props}/></FormControl> 
}

export const Input = (props) => {
    const {input , meta , child , ...restProps} = props
    return <FormControl {...props}><input {...input} {...props}/></FormControl> 
}

export const createField = (placeholder , name , validators, component, props = {} ,text = '') => (
<div>
    <Field
 placeholder={placeholder} component={component} 
 name={name} validate={validators} {...props}/>
 {text}
 </div>
 )