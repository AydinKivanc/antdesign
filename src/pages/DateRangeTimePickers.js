import { DatePicker, Space, TimePicker } from "antd";

const DateRangeTimePickers = () => {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}

        //style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <Space>
            <DatePicker picker="date" />
            <DatePicker picker="month" />
            <DatePicker picker="quarter" />
            <DatePicker picker="time" />
            <DatePicker picker="week" />
            <DatePicker picker="year" />
          </Space>
        </div>
        <br />
        <div>
          <Space>
            <DatePicker.RangePicker />
            <DatePicker.RangePicker picker="month" />
          </Space>
        </div>
        <br />
        <div>
          <Space>
            <TimePicker />
            <TimePicker.RangePicker />
            <TimePicker disabled />
          </Space>
        </div>
      </header>
    </div>
  );
};

export default DateRangeTimePickers;
