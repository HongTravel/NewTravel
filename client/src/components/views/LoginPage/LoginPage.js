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

function LoginPage(props){
    return(
        <div>
            <div><h3>Login</h3></div>
            <Formik initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={Yup.object().shape({
                email:Yup.string().email("Email is invalid").required("Email is required"),
                password: Yup.string().min(6,"Password must be at least 6 letters").required("Password is required")

            })}
            >   
            <Form>
                <Form.Item required label = "아이디(이메일)">
                    <Input id="email" type="email" placeholder ="Enter your email" />
                </Form.Item>
                <Form.Item required label = "비밀번호">
                    <Input id = "password" type="password" placeholder = "Enter your password" />
                </Form.Item>
                <Button type="primary" onClick = {movetoTravel}>Log in</Button>
                <Button onClick={movetonew}>Forgot password?</Button>
                <Button onClick={movetoRegister}>Register now!</Button>
            </Form>

            </Formik>
        </div>
    )
}

export default LoginPage;