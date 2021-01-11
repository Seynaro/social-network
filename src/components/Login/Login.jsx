import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/Forms/Forms";
import {requiredField} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../Common/Forms/Forms.module.css";

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

/* old LoginForm
 { error && <div className={style.formSummaryError}>
            {error}

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

const Login = ({loginTC, isAuth, captchaUrl}) => {
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

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login);