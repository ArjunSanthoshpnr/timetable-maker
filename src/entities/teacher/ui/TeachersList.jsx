import { EntityList } from "@/shared/ui";
import { columns } from "../config/columns";
import { getAllTeachers } from "../api/get-teachers";
import { useState, useEffect } from "react";

function TeachersList({
  data,
  isLoading,
  reloadData,
  pageNo,
  setPageNo,
  pageSize,
  setPageSize,
  setSort,
}) {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    getAllTeachers().then((teachers) => {
      setTeachers(teachers);
    });
  }, []);
  return (
    <EntityList
      isLoading={isLoading}
      columns={columns}
      data={teachers}
      reloadData={reloadData}
      rowKey="id"
      totalCount={teachers?.length}
      pageNo={pageNo}
      setPageNo={setPageNo}
      pageSize={pageSize}
      setPageSize={setPageSize}
      showTableResizeOption
      setSort={setSort}
      isPaginationVisible={true}
      isRowSelectionVisible={true}
    />
  );
}

export default TeachersList;
