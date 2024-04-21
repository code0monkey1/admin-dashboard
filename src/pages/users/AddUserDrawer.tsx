import { Button, Drawer, Form, Space, theme } from "antd";
import UserForm from "./forms/UserForm";
import { useCreateUser } from "../../hooks/useCreateUser";

interface AddUserDrawerProps {
  open: boolean;
  showDrawer: () => void;
  onClose: () => void;
}

const AddUserDrawer = ({ open, onClose, showDrawer }: AddUserDrawerProps) => {
  const [form] = Form.useForm();

  //create user mutation
  const { createNewUser } = useCreateUser();

  const handleFormSubmit = () => {
    form.validateFields();

    console.log(JSON.stringify(form.getFieldsValue(), null, 2));
    createNewUser(form.getFieldsValue());
    showDrawer();
    //clear the cache for users
    form.resetFields();
    onClose();
  };
  const {
    token: { colorBgLayout },
  } = theme.useToken();
  return (
    <Drawer
      open={open}
      onClose={() => {
        form.resetFields();
        onClose();
      }}
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
          <Button
            onClick={() => {
              form.resetFields();
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button type="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Space>
      }
    >
      <Form form={form} layout="vertical">
        <UserForm />
      </Form>
    </Drawer>
  );
};

export default AddUserDrawer;
