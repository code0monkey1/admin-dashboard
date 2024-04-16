import { Col, Row, Input, Select } from "antd";
import Card from "antd/es/card/Card";
import { Role } from "../../store";
import { Status } from "../../types";

interface userFilterProps {
  onFilterChange: (filterName: string, filterValue: string) => void;
  children: React.ReactNode;
}
export const UsersFilter = ({ onFilterChange, children }: userFilterProps) => {
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
          {children}
        </Col>
      </Row>{" "}
    </Card>
  );
};

export default UsersFilter;
