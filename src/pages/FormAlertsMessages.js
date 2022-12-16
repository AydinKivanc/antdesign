import { Form, Input, Button, message, Alert } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const FormAlertsMessages = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    console.log(e);
    setTimeout(() => {
      setShowAlert(true);
      message.success("Login success");
      message.error("Login faild!");
      message.warning("Login warning!");
    }, 1000);
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {showAlert && (
          <Alert
            type="error"
            description="There was no error login."
            closable
          />
        )}
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="User Name"
            name="username"
            tooltip="This is a required field" // !
          >
            <Input placeholder="User Name" required></Input>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            tooltip={{
              // !
              title: "Tooltip with customize icon",
              icon: <InfoCircleOutlined />,
            }}
          >
            <Input.Password placeholder="Password" required></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
};

export default FormAlertsMessages;
