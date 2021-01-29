import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/Forms/Forms";
import {requiredField} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../Common/Forms/Forms.module.css";
import {AppStateType} from "../../redux/redux-store";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
    <form onSubmit={handleSubmit}>

        {createField("Email", "email", [requiredField], Input)}
        {createField("Password", "password", [requiredField], Input, {type:"password"})}
        {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "rememberMe")}


        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && createField("Symbols from image", "captcha", [requiredField], Input, {})}

        { error && <div className={style.formSummaryError}>
            {error}
        </div>}

        <div>
            <button>Login</button>
        </div>
    </form>)
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

type LoginType = {
    loginTC: () => {}
    isAuth: boolean

}

type MapStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string) => {}
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({loginTC, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if(isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
    </div>
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login);