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

export function generateColumnTitle(columns, periods) {
  return columns.map((column) => ({
    ...column,
    title: (
      <Flex gap="small" vertical>
        <Text>{column?.title}</Text>
        <Text style={{ fontSize: "14px" }}>
          {getDurationByPeriodName(periods, column?.title)}
        </Text>
      </Flex>
    ),
  }));
}
