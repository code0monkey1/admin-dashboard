import { Col, Row, Input } from "antd";
import Card from "antd/es/card/Card";

interface RestaurantsFilterProps {
  onFilterChange: (filterName: string, filterValue: string) => void;
  children: React.ReactNode;
}
export const RestaurantsFilter = ({
  onFilterChange,
  children,
}: RestaurantsFilterProps) => {
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
          </Row>
        </Col>
        <Col span={12} style={{ textAlign: "right" }}>
          {children}
        </Col>
      </Row>{" "}
    </Card>
  );
};

export default RestaurantsFilter;
