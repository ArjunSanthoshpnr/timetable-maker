export const columns = [
  {
    title: "Day",
    dataIndex: "day",
    key: "day",
    rowScope: "row",
    width: 150,
    hidden: false,
  },
  {
    key: "P1",
    title: "P1",
    dataIndex: "P1",
    hidden: false,
  },
  {
    title: "P2",
    dataIndex: "P2",
    key: "P2",
    hidden: false,
  },
  {
    width: 100,
    key: "break",
    dataIndex: "break",
    hidden: false,
    onCell: (_, index) => ({
      rowSpan: index === 0 ? 6 : 0,
    }),
    type: "break",
    align: "center",
    rowScope: "row",
  },
  {
    title: "P3",
    dataIndex: "P3",
    key: "P3",
    hidden: false,
  },
  {
    title: "P4",
    dataIndex: "P4",
    key: "P4",
    hidden: false,
  },
  {
    title: "P5",
    dataIndex: "P5",
    key: "P5",
    hidden: false,
  },
];
