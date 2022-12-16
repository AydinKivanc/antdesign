import { Form, Input, Button } from "antd";

const FormSample = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form
          onFinish={handleSubmit}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item label="User Name" name="username">
            <Input placeholder="User Name" required></Input>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Password" required></Input.Password>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" block>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
};

export default FormSample;
