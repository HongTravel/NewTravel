import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import {Form, Input, Button} from "antd";

function movetoRegister(){
    window.location.href="/register";
}

function movetonew(){
    window.location.href = "/newpass";
}

function movetoTravel(){
    window.location.href = "/Travel";
}

const formItemLayout = {
    labelCol:{
        xs: {span : 24},
        sm: {span: 8},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};

const tailFormItemLayout={
    wrapperCol:{
        xs:{
            span:24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function LoginPage(props){
    return(
        <div>
            <div style={{marginLeft:"650px"}}><h3>Login</h3></div>
            <Formik initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={Yup.object().shape({
                email:Yup.string().email("Email is invalid").required("Email is required"),
                password: Yup.string().min(6,"Password must be at least 6 letters").required("Password is required")

            })}
            >   
            <Form style={{minWidth:"375px"}} {...formItemLayout}>
                <Form.Item required label = "아이디(이메일)">
                    <Input style={{width:"500px"}} id="email" type="email" placeholder ="Enter your email" />
                </Form.Item>
                <Form.Item required label = "비밀번호">
                    <Input style={{width:"500px"}}id = "password" type="password" placeholder = "Enter your password" />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                <Button type="primary" onClick = {movetoTravel}>Log in</Button>
                <Button onClick={movetonew}>Forgot password?</Button>
                <Button onClick={movetoRegister}>Register now!</Button>
                </Form.Item>
            </Form>

            </Formik>
        </div>
    )
}

export default LoginPage;