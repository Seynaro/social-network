import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../Common/Forms/Forms";
import {requiredField} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../Common/Forms/Forms.module.css";
import {AppStateType} from "../../redux/redux-store";

type LoginFormOwnPropsType = {
	captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl}) => {
	return (
		<form onSubmit={handleSubmit}>

			{createField<LoginFormValuesTypeKeys>("Email", "email", [requiredField], Input)}
			{createField<LoginFormValuesTypeKeys>("Password", "password", [requiredField], Input, {type: "password"})}
			{createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "rememberMe")}


			{captchaUrl && <img src={captchaUrl}/>}
			{captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [requiredField], Input, {})}

			{error && <div className={style.formSummaryError}>
				{error}
            </div>}

			<div>
				<button>Login</button>
			</div>
		</form>)
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnPropsType>({form: 'login'})(LoginForm);

type MapStatePropsType = {
	captchaUrl: string | null
	isAuth: boolean
}

type MapDispatchPropsType = {
	loginTC: (email: string, password: string, rememberMe: boolean, captcha: string) => {}
}

type LoginFormValuesType = {
	email: string
	password: string
	rememberMe: boolean
	captcha: string
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = ({loginTC, isAuth, captchaUrl}) => {
	const onSubmit = (formData: LoginFormValuesType) => {
		loginTC(formData.email, formData.password, formData.rememberMe, formData.captcha)
	};

	if (isAuth) {
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