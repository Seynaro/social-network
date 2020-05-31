import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/Forms/Forms";
import {requiredField} from "../../utils/validators/validator";

const LoginForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={"login"}
                   validate={[requiredField]} component={Input}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"}
                   validate={[requiredField]} component={Input}/>
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

    };

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login;