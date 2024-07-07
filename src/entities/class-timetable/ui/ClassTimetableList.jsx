import useSWR from "swr";

import { columns } from "../config/columns";
import { getAllClassTimetable } from "../api/get-class-timetable";
import { EntityList } from "@/shared/ui";
import { generateTimetable } from "../lib/generate-timetable";

function ClassTimetableList({
  // isLoading,
  reloadData,
  pageNo,
  setPageNo,
  pageSize,
  setPageSize,
  setSort,
}) {
  const { data, isLoading } = useSWR(
    "/api/class-timetable",
    getAllClassTimetable
  );

  console.log("data: ", data);

  return (
    <div>
      <EntityList
        // componentRef={componentRef}
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
      />
    </div>
  );
}

export default ClassTimetableList;
