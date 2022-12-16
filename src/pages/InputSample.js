import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const InputSample = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Name"
          maxLenght={10}
          prefix={<UserOutlined />} // ! input icinde icon eklemek
          allowClear // ! input icinde x cikar icerigi temizlemek icin
          //disabled
        ></Input>
        <Input.Search
          placeholder="Name"
          maxLenght={10}
          prefix={<UserOutlined />}
          allowClear
          //disabled
        ></Input.Search>
      </header>
    </div>
  );
};

export default InputSample;
