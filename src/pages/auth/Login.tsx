import { Button, Flex, Form, Input, Typography } from "antd";
import { login } from "../../services/loginService";
import { useNavigate } from "@tanstack/react-router";

export default function Login() {
  const navigate = useNavigate();
  async function handleLogin(param: any) {
    const res = await login({
      password: param.password,
      username: param.username,
    });
    const token = res.data;
    localStorage.setItem("token_backend", token);

    navigate({ to: "/" });
  }
  return (
    <Flex
      style={{
        maxWidth: "1440px",
        minHeight: "100vh",
        padding: "20px",
      }}
      justify="center"
    >
      <div>
        <Typography.Title level={3}>Login</Typography.Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          style={{ maxWidth: 500 }}
          onFinish={handleLogin}
        >
          <Form.Item name={"username"}>
            <Input placeholder="username" />
          </Form.Item>
          <Form.Item name={"password"}>
            <Input placeholder="password" type="password" />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Flex>
  );
}
