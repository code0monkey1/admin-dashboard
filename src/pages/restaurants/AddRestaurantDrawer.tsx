import { Button, Drawer, Space } from "antd";

interface AddRestaurantDrawerProps {
  open: boolean;
  showDrawer: () => void;
  onClose: () => void;
}

export const AddRestaurant = ({
  open,
  showDrawer,
  onClose,
}: AddRestaurantDrawerProps) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      title="Add Restaurant"
      width={720}
      styles={{
        body: {
          paddingBottom: 80,
        },
      }}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={showDrawer}>
            Submit
          </Button>
        </Space>
      }
    ></Drawer>
  );
};

export default AddRestaurant;
