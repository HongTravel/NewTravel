import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import {Form, Input, Button} from "antd";

function moveToLogin(){
    window.location.href="/login";
}

function RegisterPage(){
    return(
        <div>
        <div><h3>Sign up</h3></div>

        <Formik initialValues={{
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
        }}
        
        validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Email is invalid").required("Email is required"),
            password: Yup.string().min(6, "Password must be at least 6 letters").required("Password is required"),
            confirmpassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must be match").required("ConfirmPassword is required"),
        }) }>

        <Form>
            <Form.Item required label = "이름">
                <Input id = "name" type="text" placeholder ="Enter your name" />
            </Form.Item>
            <Form.Item required label = "이메일">
                <Input id = "email" type="email" placeholder ="Enter your email as used for your id" />
            </Form.Item>
            <Form.Item required label = "비밀번호">
                <Input id = "password" type="password" placeholder = "Enter your password" />
            </Form.Item>
            <Form.Item required label = "비밀번호 확인">
                <Input id = "Confirm" type = "password" placeholder = "Confirm your password" />
            </Form.Item>
            <Button type="primary" onClick={moveToLogin}>Submit</Button>
        </Form>
       
        </Formik>
    </div>
    )
}

export default RegisterPage;