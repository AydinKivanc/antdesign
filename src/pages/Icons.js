import { Button, Divider } from "antd";
import {
  PieChartFilled,
  AppleFilled,
  LoadingOutlined,
  BankTwoTone,
  LoginOutlined,
} from "@ant-design/icons";

const Icons = () => {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>
        <PieChartFilled style={{ color: "purple", fontSize: 100 }} />
        <AppleFilled style={{ color: "green", fontSize: 100 }} />
        <LoadingOutlined spin style={{ color: "red", fontSize: 100 }} />
        <PieChartFilled
          rotate={45}
          style={{ color: "orange", fontSize: 100 }}
        />
        <BankTwoTone twoToneColor="green" style={{ fontSize: 100 }} />
        <Button icon={<LoginOutlined style={{ color: "red", fontSize: 20 }} />}>
          Button woth custom icon
        </Button>
        <Divider />
      </div>
    </div>
  );
};

export default Icons;
