import { NavLink, Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store";
import { Layout, Menu, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useState } from "react";
import Logo from "../components/icons/Logo";
import {
  HomeOutlined,
  UserOutlined,
  ShopOutlined,
  ProductOutlined,
  PercentageOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

const Dashboard = () => {
  const { user } = useAuthStore();

  const [collapsed, setCollapsed] = useState(false);

  if (user === null) return <Navigate to="auth/login" replace={true} />;

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
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: "1rem" }}>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>{" "}
    </>
  );
};

export default Dashboard;
