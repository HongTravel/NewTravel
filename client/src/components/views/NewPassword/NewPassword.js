import React from "react";
import {Formik} from "formik";
import {Form, Input, Button} from "antd";
import * as Yup from "yup";

function moveToLogin(){
    window.location.href = "/login";
}

function NewPassword(){
    return(
        <div>
            <div><h3>Change Password</h3></div>
        <Formik initialValues={{
            email: "",
            password: "",
            confirmpassword: "",
        }}
        
        validationSchema={Yup.object().shape({
            email: Yup.string().email("Email is valid").required("Email is required"),
            password: Yup.string().min(6,"Password must be at least 6 letters").required("Password is required"),
            confirmpassword: Yup.string().oneOf([Yup.ref("password"),null],"Password must be match").required("Confirmpassword is required"),
        })}

        >
        <Form>
            <Form.Item required label="아이디(이메일)">
                <Input id = "email" type="email" placeholder = "Enter your Email" />
            </Form.Item>
            <Form.Item required label = "새로운 비밀번호">
                <Input id = "password" type="password" placeholder = "Enter your New Password" />
            </Form.Item>
            <Form.Item required label = "비밀번호 확인">
                <Input id = "password" type="password" placeholder = "Confirm your Password" />
            </Form.Item>
            <Button type="primary" onClick={moveToLogin}>변경완료</Button>
        </Form>
        </Formik>
        </div>
    )
}

export default NewPassword;