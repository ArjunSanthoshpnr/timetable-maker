import styled from "@emotion/styled";
import { Flex, Typography } from "antd";

import getFormattedValue from "./get-formatted-value";
import Image from "next/image";

const getColumnTitle = (column) => {
  if (column?.isLogoVisible) {
    return (
      <Flex justify="center">
        <Image src="/logo.png" alt="Logo" width={70} height={70} />
      </Flex>
    );
  } else return column?.title;
};

const { Text } = Typography;

export default function mapToAntDColumns(columns, data) {
  return columns.map((column) => ({
    ...column,
    title: getColumnTitle(column, data),
    render: (item, record) => {
      if (column?.type === "break") {
        return (
          <Flex justify="center">
            <VerticalText>Break</VerticalText>
          </Flex>
        );
      } else if (!item) {
        return "---";
      }

      if (column?.dataType === "array") {
        return (
          <Flex gap="middle" vertical>
            <Text>{item && item[0]}</Text>
            <Text>{item && item[1]}</Text>
          </Flex>
        );
      }
      if (column?.copyable) {
        return (
          <_Text copyable ellipsis={{ tooltip: item }}>
            {item}
          </_Text>
        );
      } else {
        return getFormattedValue(
          item,
          record,
          column.dataFormat,
          column.currencyIndex
        );
      }
    },
    ellipsis: true,
  }));
}

export const _Text = styled(Text)`
  display: ${(props) => (props.copyable ? "flex !important" : "")};
  width: 90%;
  .ant-typography-copy {
    margin-left: auto;
  }
`;

const VerticalText = styled.div`
  text-transform: uppercase;
  letter-spacing: 3px;
`;
