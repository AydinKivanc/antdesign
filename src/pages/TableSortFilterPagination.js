import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const TableSortFilterPagination = () => {
  const [datam, setDatam] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Starting page
  const [pageSize, setPageSize] = useState(8); // Each page row count

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setDatam(response.data);
      })
      .catch((err) => console.log("categories error", err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "User",
      dataIndex: "userId",
      sorter: (record1, record2) => {
        return record1.userId > record2.userId;
      },
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Complete" : "In Progress"}</p>;
      },
      filters: [
        { text: "Complete", value: true },
        { text: "In Progress", value: "false" },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Table
          columns={columns}
          dataSource={datam}
          loading={loading}
          pagination={{
            current: page,
            pageSize: pageSize,
            total: 500,
            onChange: (page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
              // ! Make api call here with page and pageSize if u need
            },
          }}
        ></Table>
      </header>
    </div>
  );
};

export default TableSortFilterPagination;
