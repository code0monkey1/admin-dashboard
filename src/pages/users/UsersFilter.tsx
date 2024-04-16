import { Col, Row, Input, Button, Select, Modal } from "antd";
import Card from "antd/es/card/Card";
import { PlusOutlined } from "@ant-design/icons";
import { Role } from "../../store";
import { Status } from "../../types";
import { useState } from "react";

interface userFilterProps {
  onFilterChange: (filterName: string, filterValue: string) => void;
}
export const UsersFilter = ({ onFilterChange }: userFilterProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Card>
      <Row justify="space-around">
        <Col span={12}>
          <Row>
            <Col span={12}>
              {" "}
              <Input.Search
                placeholder="input search text"
                onChange={(e) =>
                  onFilterChange("UserSearchQuery", e.target.value)
                }
              />
              <Modal
                title="Add User"
                centered
                open={modalOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
              >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
              </Modal>
            </Col>
            <Col span={6} style={{ textAlign: "right" }}>
              {" "}
              <Select
                placeholder="Filter By Role"
                allowClear
                onChange={(selectedItem) =>
                  onFilterChange("RoleFilter", selectedItem)
                }
                options={[
                  { value: Role.ADMIN, label: Role.ADMIN.toUpperCase() },
                  { value: Role.CUSTOMER, label: Role.CUSTOMER.toUpperCase() },
                  { value: Role.MANAGER, label: Role.MANAGER.toUpperCase() },
                ]}
              />
            </Col>
            <Col span={6} style={{ textAlign: "right" }}>
              {" "}
              <Select
                placeholder="Filter By Status"
                allowClear
                onChange={(selectedItem) =>
                  onFilterChange("StatusFilter", selectedItem)
                }
                options={[
                  { value: Status.ACTIVE, label: Status.ACTIVE },
                  { value: Status.INACTIVE, label: Status.INACTIVE },
                  { value: Status.BLOCKED, label: Status.BLOCKED },
                ]}
              />
            </Col>
          </Row>
        </Col>

        <Col span={12} style={{ textAlign: "right" }}>
          <Button
            type="primary"
            onClick={() => setModalOpen(true)}
            icon={<PlusOutlined />}
          >
            Add User
          </Button>
        </Col>
      </Row>{" "}
    </Card>
  );
};

export default UsersFilter;
