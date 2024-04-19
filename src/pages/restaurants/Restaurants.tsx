import { useQuery } from "@tanstack/react-query";
import { getTenants } from "../../http/api";
import { Breadcrumb, Button, Space, Table, TableProps, Tag } from "antd";
import { Tenant } from "../../store";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import AddRestaurantDrawer from "./AddRestaurantDrawer";
import { RestaurantsFilter } from "./RestaurantsFilter";

export const Restaurants = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

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

  const onFilterChange = (filterName: string, filterValue: string) => {
    console.log("Filter name is ", filterName);
    console.log("Filter value is", filterValue);
  };

  const massagedData =
    restaurants &&
    restaurants.map((restaurant: Tenant) => {
      return {
        id: restaurant.id,
        name: restaurant.name,
        address: restaurant.address,
        createdAt: new Date(restaurant.createdAt),
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
                title: <Link to={"/restaurants"}> Restaurants</Link>,
              },
            ]}
          />
        </div>

        <AddRestaurantDrawer
          open={open}
          showDrawer={showDrawer}
          onClose={onClose}
        />

        <div>
          {isLoading && <div>Loading ... </div>}
          {isError && (
            <Tag color="red">{`Cannot Retrieve Users.... Please Try Later`}</Tag>
          )}
          <Space size="large" direction="vertical" style={{ width: "100%" }}>
            <RestaurantsFilter onFilterChange={onFilterChange}>
              <Button
                type="primary"
                onClick={showDrawer}
                icon={<PlusOutlined />}
              >
                Add Restaurant
              </Button>
            </RestaurantsFilter>
            <Table columns={columns} dataSource={massagedData} rowKey={"id"} />
          </Space>
        </div>
      </Space>
    </>
  );
};

interface DataType {
  id: number;
  key: string;
  name: string;
  address: string;
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
    title: "Restaurant",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{`${text.toUpperCase()}`}</a>,
  },
];

export default Restaurants;
