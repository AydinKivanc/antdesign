import { Button } from "antd";
import { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";

const ButtonSample = () => {
  const [loading, setLoading] = useState(false);
  const onButtonClick = (E) => {
    console.log("BUTTON CLICKED");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button
          type="primary"
          //style={{ backgroundColor: "green", color: "white" }} Bu App.css i ezer
          className="my-button"
          block
          onClick={onButtonClick}
          loading={loading}
          icon={<PoweroffOutlined />}
        >
          First Button
        </Button>
      </header>
    </div>
  );
};

export default ButtonSample;
