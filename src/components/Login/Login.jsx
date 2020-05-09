import React from 'react'
import {Field , reduxForm} from 'redux-form'
import { Input, createField } from '../common/FormsControl/FormsControls'
import {required , maxLengthCreator } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import style from '../common/FormsControl/FormControls.module.css'

const maxLength = maxLengthCreator(20)
const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email , formData.password , formData.rememberMe)
    }
    if(props.isAuth){
        return<Redirect to="/profile"/>
    }else{
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
    }
}

const LoginForm = ({handleSubmit , error}) => {
    return <form onSubmit={handleSubmit}>
            {createField('Email' , "email" , [required , maxLength] , Input )}
            {createField('Password' , "password" , [required , maxLength] , Input, {type: "password"})}
            {createField(null , "rememberMe" , null , Input , {type: "checkbox"} , "remember me")}
            {error && <div className={style.formSummaryError}>{error}</div>}
            <div><button>send</button></div>
        </form>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps , {login})(Login)