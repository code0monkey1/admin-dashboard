import { NavLink, Navigate, Outlet } from "react-router-dom";
import { Role, useAuthStore } from "../store";

import {
  Avatar,
  Badge,
  Dropdown,
  Flex,
  Layout,
  Menu,
  Space,
  theme,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useState } from "react";
import Logo from "../components/icons/Logo";
import {
  HomeOutlined,
  UserOutlined,
  ShopOutlined,
  ProductOutlined,
  PercentageOutlined,
  BellFilled,
} from "@ant-design/icons";

import { useLogout } from "../hooks/useLogout";

const { Sider } = Layout;

const Dashboard = () => {
  const { user } = useAuthStore();
  const { logoutUser } = useLogout();

  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: <NavLink to={"/"}>Home</NavLink>,
    },
    {
      key: "/users",
      icon: <UserOutlined />,
      label: <NavLink to={"/users"}>Users</NavLink>,
    },
    {
      key: "/restaurants",
      icon: <ShopOutlined />,
      label: <NavLink to={"/restaurants"}>Restaurants</NavLink>,
    },
    {
      key: "/products",
      icon: <ProductOutlined />,
      label: <NavLink to={"/products"}>Products</NavLink>,
    },
    {
      key: "/promos",
      icon: <PercentageOutlined />,
      label: <NavLink to={"/promos"}>Promos</NavLink>,
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  if (user === null) return <Navigate to="auth/login" replace={true} />;

  return (
    <>
      <Layout style={{ minHeight: "100vh", background: colorBgContainer }}>
        <Sider
          collapsible
          theme="light"
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div id="logo">
            <Logo />
          </div>
          <Menu
            theme="light"
            defaultSelectedKeys={["/"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <Flex gap="middle" align="start" justify="space-between">
              <Badge
                text={
                  user.role === Role.ADMIN
                    ? "ADMIN"
                    : user.tenant?.name || "GLOBAL"
                }
                status="success"
              />

              <Space size="middle">
                <Badge dot={true}>
                  <BellFilled />
                </Badge>
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: "logout",
                        label: "Logout",
                        onClick: () => logoutUser(),
                      },
                    ],
                  }}
                  placement="bottomRight"
                  arrow={{ pointAtCenter: true }}
                >
                  <Avatar
                    style={{
                      backgroundColor: "#fde3cf",
                      color: "#f56a00",
                    }}
                  />
                </Dropdown>
              </Space>
            </Flex>
          </Header>
          <Content style={{ margin: "1rem" }}>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>Footer</Footer>
        </Layout>
      </Layout>{" "}
    </>
  );
};

export default Dashboard;
