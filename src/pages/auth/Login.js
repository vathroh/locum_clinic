import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { update } from "../../redux/authSlice";
import React, { useEffect } from "react";
import styled from "styled-components";
import env from "react-dotenv";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const idToken = useSelector((state) => state.idToken);

    useEffect(() => {
        if (idToken !== "") {
            navigate("/");
        }
    }, [idToken]);

    const onFinish = (values) => {
        axios({
            method: "POST",
            url: env.BASE_URL + "/auth/login",
            data: values,
        }).then(async (data) => {
            dispatch(update(data.data));
            navigate("/");
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const Container = styled.div`
        height: 100vh;
        widht: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    return (
        <Container>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your email!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Container>
    );
};
export default Login;
