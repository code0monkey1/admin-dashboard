import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { useQuery } from "@tanstack/react-query";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { users } from "../../http/api";
import { Role } from "../../store";

const Users = () => {
  const getUsers = async () => {
    const { data } = await users();

    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const massagedData =
    data &&
    data.map((user: DataType) => {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: user.address,
        role: user.role,
        createdAt: new Date(user.createdAt),
      };
    });
  return (
    <>
      <Space size="large" direction="vertical" style={{ width: "100%" }}>
        <div>
          {" "}
          <Breadcrumb
            items={[
              {
                title: <Link to={"/"}> Dashboard</Link>,
              },
              {
                title: <Link to={"/users"}> Users</Link>,
              },
            ]}
          />
        </div>
        <div>
          {isLoading && <div>Loading ... </div>}
          {isError && (
            <Tag color="red">{`Cannot Retrieve Users.... Please Try Later`}</Tag>
          )}

          <ul>{<Table columns={columns} dataSource={massagedData} />}</ul>
        </div>
      </Space>
    </>
  );
};

interface DataType {
  id: number;
  key: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  role: string;
  createdAt: Date;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Registered",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (date: Date) => <a>{date.toDateString()}</a>,
    sorter: (a: DataType, b: DataType) =>
      a.createdAt.getTime() - b.createdAt.getTime(),
    defaultSortOrder: "descend",
  },
  {
    title: "Name",
    dataIndex: "firstName",
    key: "firstName",
    render: (_text, record) => (
      <a>{`${record.firstName.toUpperCase()}, ${record.lastName.toUpperCase()}`}</a>
    ),
  },

  {
    title: "Role",
    key: "role",
    dataIndex: "role",
    render: (role) => (
      <Tag color={role === Role.ADMIN ? "volcano" : "green"} key={role}>
        {role.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

export default Users;
