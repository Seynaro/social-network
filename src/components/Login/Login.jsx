import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/Forms/Forms";
import {requiredField} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../Common/Forms/Forms.module.css";

const LoginForm = ({handleSubmit, error}) => {
    return (
    <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={"email"}
                   validate={[requiredField]} component={Input}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"}
                   type={"password"} validate={[requiredField]} component={Input}/>
        </div>
        <div>
            <Field type="checkbox" name={"rememberMe"} component={Input}/>
        </div>

        { error && <div className={style.formSummaryError}>
            {error}
        </div>}

        <div>
            <button>Login</button>
        </div>
    </form>)
};

/*
new LoginForm with createField
return (
<form onSubmit={handleSubmit}>
{createField("Email", "email", [requiredField], Input)}
{createField("Password", "password", [requiredField], Input, {type:"password"})}
{createField(null, "rememberMe", [], Input, [type="checkbox"], "rememberMe")}
{ error && <div className={style.formSummaryError}>
            {error}
        </div>}

        <div>
            <button>Login</button>
)
*/


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = ({loginTC, isAuth}) => {
    const onSubmit = (formData) => {
        loginTC(formData.email, formData.password, formData.rememberMe)
    };

    if(isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login);