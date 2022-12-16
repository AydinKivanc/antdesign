import { Table } from "antd";

const TableSample = () => {
  const data = [
    {
      name: "Kivanc",
      age: 45,
      address: " Stoke",
      key: "1",
    },
    {
      name: "Sena",
      age: 16,
      address: " Newcastle",
      key: "2",
    },
    {
      name: "Enes",
      age: 15,
      address: "Newcastle",
      key: "3",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
      render: (name) => {
        return <a>{name}</a>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "key",
    },
    {
      title: "Graduated",
      dataIndex: "address",
      key: "key",
      render: (payload) => {
        return <p>{payload.age > 20 ? "True" : "False"}</p>;
      },
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Table dataSource={data} columns={columns}></Table>
      </header>
    </div>
  );
};

export default TableSample;
