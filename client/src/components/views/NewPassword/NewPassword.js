import React from "react";
import {Formik} from "formik";
import {Form, Input, Button} from "antd";
import * as Yup from "yup";

function moveToLogin(){
    window.location.href = "/login";
}

const formItemLayout ={
    labelCol :{
        xs: {span: 24 },
        sm: {span: 8},
    },
    wrapperCol:{
        xs: {span: 24},
        sm: {span:16},
    },
};

const tailFormItemLayout ={
    wrapperCol: {
        xs:{
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function NewPassword(){
    return(
        <div>
            <div style={{marginLeft:"650px"}}><h3>Change Password</h3></div>
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
        <Form style={{minWidth:"375px"}} {...formItemLayout}>
            <Form.Item required label="아이디(이메일)">
                <Input style={{width:"500px"}}id = "email" type="email" placeholder = "Enter your Email" />
            </Form.Item>
            <Form.Item required label = "새로운 비밀번호">
                <Input style={{width:"500px"}}id = "password" type="password" placeholder = "Enter your New Password" />
            </Form.Item>
            <Form.Item required label = "비밀번호 확인">
                <Input style={{width: "500px"}} id = "password" type="password" placeholder = "Confirm your Password" />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
            <Button type="primary" onClick={moveToLogin}>변경완료</Button>
            </Form.Item>
            
        </Form>
        </Formik>
        </div>
    )
}

export default NewPassword;