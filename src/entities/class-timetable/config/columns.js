export const columns = [
  {
    title: "Day",
    dataIndex: "day",
    key: "day",
    rowScope: "row",
    width: 120,
    hidden: false,
    isLogoVisible: true,
  },
  {
    key: "P1",
    title: "P1",
    dataIndex: "P1",
    hidden: false,
    align: "center",
    dataType: "array",
    type: "period",
  },
  {
    title: "P2",
    dataIndex: "P2",
    key: "P2",
    hidden: false,
    align: "center",
    dataType: "array",
    type: "period",
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
    align: "center",
    dataType: "array",
    type: "period",
  },
  {
    title: "P4",
    dataIndex: "P4",
    key: "P4",
    hidden: false,
    align: "center",
    dataType: "array",
    type: "period",
  },
  {
    title: "P5",
    dataIndex: "P5",
    key: "P5",
    hidden: false,
    align: "center",
    dataType: "array",
    type: "period",
  },
];
