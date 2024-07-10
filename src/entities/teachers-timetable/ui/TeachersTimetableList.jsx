import useSWR from "swr";
import { Typography } from "antd";

import { EntityList } from "@/shared/ui";

import { columns } from "../config/columns";
import { getAllTeachersTimetable } from "../api/get-teachers-timetable";
import { generateTimetable } from "../lib/generate-timetable";

function TeachersTimetableList({
  reloadData,
  pageNo,
  setPageNo,
  pageSize,
  setPageSize,
  setSort,
  selectedTeacher = "",
}) {
  const { Text } = Typography;

  const { data, isLoading } = useSWR(
    ["/api/teachers-timetable", selectedTeacher],
    () => getAllTeachersTimetable(selectedTeacher)
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
      title={() => <Text strong>{selectedTeacher}</Text>}
    />
  );
}

export default TeachersTimetableList;
