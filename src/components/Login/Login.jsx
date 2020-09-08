import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/Forms/Forms";
import {requiredField} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
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
        <div>
            <button>Login</button>
        </div>
    </form>)
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    };

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default connect(null, {loginTC})(Login);