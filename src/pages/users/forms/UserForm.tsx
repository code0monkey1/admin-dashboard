import { Col, Form, Input, Row } from "antd";
import Card from "antd/es/card/Card";

const UserForm = () => {
  return (
    <>
      <Row gutter={20}>
        <Col span={24}>
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
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default UserForm;
