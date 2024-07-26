import { Flex, Typography } from "antd";

const { Text } = Typography;

function getDurationByPeriodName(periods, periodName) {
  for (let period of periods) {
    if (period.name === periodName) {
      return period.duration;
    }
  }
  return null;
}

export function generateTimetableColumns(
  columns,
  periods,
  selectedClass,
  isEditable
) {
  const periodNames = periods.map((period) => period?.name);

  return columns.map((column) => {
    if (column?.key === "day" || column?.key === "break") {
      return column;
    }
    if (periodNames?.includes(column?.title))
      return {
        ...column,
        onCell: (record) => ({
          record,
          editable: isEditable,
          dataIndex: column.title,
          title: column.title,
          selectedClass: selectedClass,
          handleSave: () => {},
        }),

        title: (
          <Flex gap="small" vertical>
            <Text>{column?.title}</Text>
            <Text style={{ fontSize: "14px" }}>
              {getDurationByPeriodName(periods, column?.title)}
            </Text>
          </Flex>
        ),
      };
  });
}
