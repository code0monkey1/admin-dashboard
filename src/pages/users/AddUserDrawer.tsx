import { Button, Drawer, Space } from "antd";

interface AddUserDrawerProps {
  open: boolean;
  showDrawer: () => void;
  onClose: () => void;
}

const AddUserDrawer = ({ open, showDrawer, onClose }: AddUserDrawerProps) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      title="Create User"
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

export default AddUserDrawer;
