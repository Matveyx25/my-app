import React from 'react'
import {Field , reduxForm} from 'redux-form'
import { Input, createField } from '../common/FormsControl/FormsControls'
import {required , maxLengthCreator } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import style from '../common/FormsControl/FormControls.module.css'

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email , formData.password , formData.rememberMe, formData.captcha)
    }
    if(props.isAuth){
        return<Redirect to="/profile"/>
    }else{
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
    }
}

const LoginForm = ({handleSubmit , error , captchaUrl}) => {
    const maxLength = maxLengthCreator(20)
    return <form onSubmit={handleSubmit}>
            {createField('Email' , "email" , [required , maxLength] , Input )}
            {createField('Password' , "password" , [required , maxLength] , Input, {type: "password"})}
            {createField(null , "rememberMe" , null , Input , {type: "checkbox"} , "remember me")}
            {error && <div className={style.formSummaryError}>{error}</div>}
            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("symbols from image", "captcha", [required], Input, {} )}
            <div><button>send</button></div>
        </form>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps , {login})(Login)