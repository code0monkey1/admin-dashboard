import { useQuery } from "@tanstack/react-query";
import { Col, Form, Input, Row, Select, Space, Tag } from "antd";
import Card from "antd/es/card/Card";
import { getTenants } from "../../../http/api";
import { Tenant } from "../../../store";

const UserForm = () => {
  const getRestaurants = async () => {
    const { data } = await getTenants();

    return data;
  };
  const {
    data: restaurants,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["restaurants"],
    queryFn: getRestaurants,
    staleTime: Infinity,
  });

  return (
    <>
      <Row gutter={20}>
        <Col span={24}>
          <Space size={20} style={{ width: "100%" }} direction="vertical">
            <Card title="Basic Info">
              <Row gutter={20}>
                <Col span={12}>
                  <Form.Item label="First Name" name="firstName">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Last Name" name="lastName">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col span={12}>
                  <Form.Item label="Email" name="email">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="Security Info">
              <Row gutter={20}>
                <Col span={12}>
                  <Form.Item label="Password" name="password">
                    <Input type="password" />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
            <Card title="Auth Info">
              <Row gutter={20}>
                <Col span={12}>
                  <Form.Item label="Role" name="role">
                    <Select>
                      <Select.Option value="admin">Admin</Select.Option>
                      <Select.Option value="manager">Manager</Select.Option>
                      <Select.Option value="customer">Customer</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Select Restaurant" name="tenantId">
                    <Select>
                      {isError && (
                        <Tag color="red">
                          ❗️ Unable to Retrieve Restaurants...{" "}
                        </Tag>
                      )}
                      {isLoading && <div>Loading Restaurants... </div>}
                      {restaurants &&
                        restaurants.map((t: Tenant) => (
                          <Select.Option key={t.id} value={t.name}>
                            {t.name}
                          </Select.Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default UserForm;
