import {
  Layout,
  Card,
  Space,
  Input,
  Form,
  Checkbox,
  Button,
  Flex,
  Alert,
} from "antd";
import { LockFilled, UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "../../components/icons/Logo";
import { Credentials } from "../../types";
import { login } from "../../http/api";
import { useMutation } from "@tanstack/react-query";

const LoginPage = () => {
  const loginUser = async (credentials: Credentials) => {
    const { data } = await login(credentials);
    return data;
  };

  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: loginUser,
    onSuccess: async () => {
      console.log("Login Successful");
    },
  });

  console.log("error is", error);

  return (
    <>
      <Layout
        style={{ display: "grid", placeItems: "center", height: "100vh" }}
      >
        <Space direction="vertical" align="center" size="large">
          <Layout.Content
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Logo />
          </Layout.Content>
          <Card
            bordered={false}
            style={{ width: 300 }}
            title={
              <Space
                style={{
                  width: "100%",
                  fontSize: 16,
                  justifyContent: "center",
                }}
              >
                <LockFilled /> Sign In
              </Space>
            }
          >
            <Form
              initialValues={{
                remember: true,
              }}
              onFinish={(values) => {
                console.log(values);
                mutate({ email: values.username, password: values.password });
              }}
            >
              {isError && (
                <Alert
                  message={error.message}
                  type="error"
                  style={{ marginBottom: "1rem" }}
                />
              )}
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>
              <Flex justify="space-between">
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox> Remember Me </Checkbox>
                </Form.Item>
                <a href="#" id="remember-me-label">
                  Forgot Password
                </a>
              </Flex>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                  loading={isPending}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Space>
      </Layout>
    </>
  );
};

export default LoginPage;
