import useSWR from "swr";
import { Typography } from "antd";

import { EntityList } from "@/shared/ui";

import { columns } from "../config/columns";
import { getAllClassTimetable } from "../api/get-class-timetable";
import { generateTimetable } from "../lib/generate-timetable";

function ClassTimetableList({
  reloadData,
  pageNo,
  setPageNo,
  pageSize,
  setPageSize,
  setSort,
  selectedClass = "",
}) {
  const { Text } = Typography;

  const { data, isLoading } = useSWR(
    ["/api/class-timetable", selectedClass],
    () => getAllClassTimetable(selectedClass)
  );

  return (
    <EntityList
      isLoading={isLoading}
      columns={columns}
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
      title={() => <Text strong>{selectedClass}</Text>}
    />
  );
}

export default ClassTimetableList;
