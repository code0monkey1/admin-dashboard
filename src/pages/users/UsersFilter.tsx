import { Col, Row, Input, Button, Select } from "antd";
import Card from "antd/es/card/Card";
const { Search } = Input;
import { PlusOutlined } from "@ant-design/icons";

import { Role } from "../../store";

interface userFilterProps {
  setSelectedRole: (role: Role) => void;
  selectedRole: Role | null;
}
export const UsersFilter = (props: userFilterProps) => {
  const { setSelectedRole } = props;
  const handleChange = (value: string) => {
    setSelectedRole(value as Role);
  };
  return (
    <Card>
      <Row gutter={16} justify="space-around">
        <Col span={12}>
          <Row gutter={10} justify="space-between">
            <Col span={8}>
              {" "}
              <Search
                placeholder="input search text"
                // onSearch={onSearch}
              />
            </Col>
            <Col span={8} style={{ textAlign: "right" }}>
              {" "}
              <Select
                placeholder="Filter By Role"
                onChange={handleChange}
                options={[
                  { value: "admin", label: "Admin" },
                  { value: "customer", label: "Customer" },
                  { value: "manager", label: "Manager" },
                ]}
              />
            </Col>
            <Col span={8} style={{ textAlign: "right" }}>
              {" "}
              <Select
                placeholder="Filter By Role"
                onChange={handleChange}
                options={[
                  { value: "admin", label: "Admin" },
                  { value: "customer", label: "Customer" },
                  { value: "manager", label: "Manager" },
                ]}
              />
            </Col>
          </Row>
        </Col>

        <Col span={12} style={{ textAlign: "right" }}>
          <Button type="primary" icon={<PlusOutlined />}>
            Add User
          </Button>
        </Col>
      </Row>{" "}
    </Card>
  );
};

export default UsersFilter;
