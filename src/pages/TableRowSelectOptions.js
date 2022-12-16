import { Table, Tag } from "antd";
import { useState } from "react";

const TableRowSelectOptions = () => {
  const [alreadySelectedRows, setAlreadySelectedRows] = useState(["1", "3"]);
  const columns = [
    {
      title: "Sutudent Id",
      dataIndex: "id",
    },
    {
      title: "Sutudent Name",
      dataIndex: "name",
    },
    {
      title: "Sutudent Grade",
      dataIndex: "grade",
      render: (tag) => {
        const color = tag.includes("A")
          ? "Green"
          : tag.includes("B")
          ? "blue"
          : "red";
        return (
          <Tag color={color} key={tag}>
            {tag}
          </Tag>
        );
      },
    },
  ];

  const data = [
    {
      key: "1",
      id: 1,
      name: "Ali",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "Veli",
      grade: "A",
    },
    {
      key: "3",
      id: 3,
      name: "Ahmet",
      grade: "A+",
    },
    {
      key: "4",
      id: 4,
      name: "Mehmet",
      grade: "C",
    },
    {
      key: "5",
      id: 5,
      name: "Zeki",
      grade: "B",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Table
          columns={columns}
          dataSource={data}
          // rowSelection={true} default checkBox
          rowSelection={{
            //type: "radio",  // single select
            type: "checkBox", // multiple select
            selectedRowKeys: alreadySelectedRows,
            onChange: (keys) => {
              setAlreadySelectedRows(keys);
            },
            onSelect: (record) => {
              // ! CONSOL A YAZDIRMAK
              console.log({ record });
            },
            getCheckboxProps: (record) => ({
              // ! SUSLU PARANTEZ DISINA BIE PARANTEZ GELMIS ?
              // disabled: record.grade === "C", // ! DISABLED
            }),
            // hideSelectAll: true, // ! SELECT ALL GIZLEME
            selections: [
              Table.SELECTION_NONE,
              Table.SELECTION_ALL,
              Table.SELECTION_INVERT,
              {
                key: "even",
                text: "Select Even Rows",
                onSelect: (allKeys) => {
                  const selectedKeys = allKeys.filter((key) => {
                    return key % 2 == 0;
                  });
                  setAlreadySelectedRows(selectedKeys);
                },
              },
              {
                key: "excellent",
                text: "Select Student with Excellent Grads",
                onSelect: (allKeys) => {
                  const selectedKeys = allKeys.filter((key) => {
                    const isExcellent = data.find((student) => {
                      return student.key == key && student.grade.includes("A");
                    });
                    return isExcellent;
                  });
                  setAlreadySelectedRows(selectedKeys);
                },
              },
            ],
          }}
        ></Table>
      </header>
    </div>
  );
};

export default TableRowSelectOptions;
