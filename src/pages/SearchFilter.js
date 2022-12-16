import { Input, Table, Button } from "antd";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

const SearchFilter = () => {
  const [data, setData] = useState([
    {
      name: "Kivanc",
      age: 45,
      address: " Stoke",
    },
    {
      name: "Ali",
      age: 16,
      address: " Newcastle",
    },
    {
      name: "Mehmet",
      age: 15,
      address: "Newcastle",
    },
    {
      name: "Ahmet",
      age: 10,
      address: "Bristol",
    },
    {
      name: "Ayse",
      age: 35,
      address: "London",
    },
  ]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filterDropdown: ({
        selectedKeys,
        setSelectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <Input
              autoFocus
              placeholder="Type text here"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></Input>
            <Button
              type="primary"
              onClick={() => {
                confirm();
              }}
            >
              Search
            </Button>
            <Button
              type="danger"
              onClick={() => {
                clearFilters();
              }}
            >
              Reset
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Table
          style={{ display: "flex", flex: "1", margin: 10 }}
          dataSource={data}
          columns={columns}
        ></Table>
      </header>
    </div>
  );
};

export default SearchFilter;
