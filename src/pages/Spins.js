import { Button, Spin, Progress, Space } from "antd";
import { useState } from "react";

const Spins = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Spin spinning={loading}></Spin>
        <Button
          onClick={() => {
            setLoading((preValue) => !preValue);
          }}
        >
          Toggle Spinning
        </Button>
        <Spin spinning={loading}>
          <p>P tag 1</p>
          <p>P tag 2</p>
          <p>P tag 3</p>
        </Spin>
        <br />
        <Progress percent={33} status="success" />
        <Progress percent={33} steps={3} />
        <br />
        <div style={{ display: "flex" }}>
          <Space>
            <Progress percent={33} type="circle" />
            <Progress percent={33} type="circle" status="success" />
            <Progress percent={33} type="circle" status="exception" />
          </Space>
        </div>
        <br />
        <Progress
          percent={33}
          type="line"
          strokeColor="red"
          strokeWidth={50}
          status="active"
        />
      </header>
    </div>
  );
};

export default Spins;
