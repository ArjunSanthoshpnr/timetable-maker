import { useState } from "react";

export default function useRowSelection(data, rowKey) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const selectedRows = data.filter((obj) =>
    selectedRowKeys.includes(obj[rowKey])
  );

  return {
    selectedRowKeys,
    selectedRows,
    onSelectChange,
  };
}
