import useSWR from "swr";
import { Typography } from "antd";

import { EntityList } from "@/shared/ui";

import { columns } from "../config/columns";
import { getAllClassTimetable } from "../api/get-class-timetable";
import { generateTimetable } from "../lib/generate-timetable";
import { generateTimetableColumns } from "@/shared/lib/generate-timetable-columns";
import { EditableCell } from "./EditableCell";
// import { EditableRow } from "./EditableRow";

function ClassTimetableList({
  reloadData,
  pageNo,
  setPageNo,
  pageSize,
  setPageSize,
  setSort,
  selectedClass = "",
  periods = [],
  isEditable,
}) {
  const { Text } = Typography;

  const { data, isLoading } = useSWR(
    ["/api/class-timetable", selectedClass],
    () => getAllClassTimetable(selectedClass)
  );

  const components = {
    body: {
      // row: EditableRow,
      cell: EditableCell,
    },
  };

  return (
    <EntityList
      isLoading={isLoading}
      columns={generateTimetableColumns(
        columns,
        periods,
        selectedClass,
        isEditable
      )}
      data={generateTimetable(data)}
      reloadData={reloadData}
      rowKey="key"
      totalCount={data?.length || 0}
      pageNo={pageNo}
      setPageNo={setPageNo}
      pageSize={pageSize}
      setPageSize={setPageSize}
      showTableResizeOption
      setSort={setSort}
      isBordered={true}
      showToolbar
      title={
        <Text style={{ fontSize: "24px" }} strong>
          {selectedClass}
        </Text>
      }
      isEditable={isEditable}
      components={isEditable && components}
    />
  );
}

export default ClassTimetableList;
