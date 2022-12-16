import { Select } from "antd";

const SelectSample = () => {
  const fruits = ["Banana", "Mango", "Orange", "Cherry"];
  return (
    <div className="App">
      <header className="App-header">
        <p> Which is your favorite fruit?</p>
        <Select placeholder="Select fruit" style={{ width: "30%" }}>
          {fruits.map((fruit, index) => {
            return <Select.Option key={index} value={fruit}></Select.Option>;
          })}
        </Select>
        <br />
        <p> Which areyour favorite fruits?</p>
        <Select
          mode="multiple" // ! coklu secim
          maxTagCount={2} // ! 2 den fazlasini yazi ile degil rakam ile gosterir
          placeholder="Select fruit"
          style={{ width: "30%" }}
        >
          {fruits.map((fruit, index) => {
            return <Select.Option key={index} value={fruit}></Select.Option>;
          })}
        </Select>
      </header>
    </div>
  );
};

export default SelectSample;
