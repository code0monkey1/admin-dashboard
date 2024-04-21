import { Button, Drawer, Form, Space, theme } from "antd";
import UserForm from "./forms/UserForm";

interface AddUserDrawerProps {
  open: boolean;
  showDrawer: () => void;
  onClose: () => void;
}

const AddUserDrawer = ({ open, showDrawer, onClose }: AddUserDrawerProps) => {
  const {
    token: { colorBgLayout },
  } = theme.useToken();
  return (
    <Drawer
      open={open}
      onClose={onClose}
      title="Create User"
      width={720}
      styles={{
        body: {
          paddingBottom: 80,
          background: colorBgLayout,
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
    >
      <Form layout="vertical">
        <UserForm />
      </Form>
    </Drawer>
  );
};

export default AddUserDrawer;
