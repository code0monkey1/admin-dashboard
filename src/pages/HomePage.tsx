import { Button, Card, Col, Flex, Row, Typography } from "antd";
import { useAuthStore } from "../store";
const { Title, Text } = Typography;
import { ShoppingFilled, BarChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function HomePage() {
  const { user } = useAuthStore();

  const orders = [
    {
      id: 1,
      item: "Peperroni is the ottal y  bad things for people these days ",
      address: "123 Main St",
      status: "Pending",
      price: "10.99",
    },
    {
      id: 2,
      item: "Cuban Slice",
      address: "13342  California ",
      status: "on the way ",
      price: "12.99",
    },

    {
      id: 3,
      item: "Peperroni is the ottal y  bad things for people these days ",
      address: "123 Main St",
      status: "Pending",
      price: "10.99",
    },
    {
      id: 4,
      item: "Cuban Slice",
      address: "13342  California ",
      status: "on the way ",
      price: "12.99",
    },
    {
      id: 5,
      item: "Peperroni is the ottal y  bad things for people these days ",
      address: "123 Main St",
      status: "Pending",
      price: "10.99",
    },
    {
      id: 6,
      item: "Cuban Slice",
      address: "13342  California ",
      status: "on the way ",
      price: "12.99",
    },
    {
      id: 7,
      item: "Peperroni is the ottal y  bad things for people these days ",
      address: "123 Main St",
      status: "Pending",
      price: "10.99",
    },
    {
      id: 8,
      item: "Cuban Slice",
      address: "13342  California ",
      status: "on the way ",
      price: "12.99",
    },
    {
      id: 9,
      item: "Peperroni is the ottal y  bad things for people these days ",
      address: "123 Main St",
      status: "Pending",
      price: "10.99",
    },
    {
      id: 10,
      item: "Cuban Slice",
      address: "13342  California ",
      status: "on the way ",
      price: "12.99",
    },
    {
      id: 11,
      item: "Peperroni is the ottal y  bad things for people these days ",
      address: "123 Main St",
      status: "Pending",
      price: "10.99",
    },
    {
      id: 12,
      item: "Cuban Slice",
      address: "13342  California ",
      status: "on the way ",
      price: "12.99",
    },
    {
      id: 14,
      item: "Peperroni is the ottal y  bad things for people these days ",
      address: "123 Main St",
      status: "Pending",
      price: "10.99",
    },
    {
      id: 15,
      item: "Cuban Slice",
      address: "13342  California ",
      status: "on the way ",
      price: "12.99",
    },
  ];
  return (
    <>
      <div>
        <Title level={3}> {`Welcome, ${user?.firstName} 😁 `}</Title>

        <Row gutter={16}>
          <Col span={12}>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card
                  style={{ padding: "0.5rem" }}
                  title="Total orders"
                  bordered={false}
                >
                  <Title level={3}> 234 </Title>
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  style={{ padding: "0.5rem" }}
                  title="Total sales"
                  bordered={false}
                >
                  <Title level={3}>$ 256</Title>
                </Card>
              </Col>
            </Row>
            <Row style={{ marginTop: "2rem" }}>
              <Col span={24}>
                <Card
                  title={
                    <span>
                      <BarChartOutlined style={{ marginRight: 8 }} />
                      Sales
                    </span>
                  }
                  bordered={false}
                ></Card>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Row>
              <Card
                style={{ width: "100%", padding: "1rem" }}
                title={
                  <span>
                    <ShoppingFilled style={{ marginRight: 8 }} />
                    Recent Orders
                  </span>
                }
                bordered={false}
              >
                {orders
                  .map((order) => (
                    <li key={order.id}>
                      <Order {...order} />
                    </li>
                  ))
                  .slice(0, 8)}
                <div style={{ marginTop: 20 }}>
                  <Button type="link">
                    <Link to="/orders">See all orders</Link>
                  </Button>
                </div>
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

interface orderProps {
  item: string;
  address: string;
  status: string;
  price: string;
}

const Order = (props: orderProps) => {
  const { item, address, status, price } = props;

  return (
    <Card bordered={false}>
      <Flex justify="space-between" gap={1} style={{ width: "100%" }}>
        <div style={{ width: "33.33%" }}>
          <Text strong ellipsis>
            {item}
          </Text>
          <br />
          <Text italic ellipsis>
            {address}
          </Text>
        </div>
        <div
          style={{
            width: "33.33%",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <Title level={5}>{`$ ${price}`}</Title>
        </div>
        <div
          style={{
            alignContent: "center",
            textAlign: "center",
            width: "33.33%",
          }}
        >
          {" "}
          <Button
            style={{
              backgroundColor: "#fde3cf",
              color: "#f56a00",
            }}
            size="small"
          >
            {status}
          </Button>
        </div>
      </Flex>
    </Card>
  );
};

export default HomePage;
