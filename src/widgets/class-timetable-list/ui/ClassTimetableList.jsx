import { useState } from "react";

import { ClassTimetableList as _ClassTimetableList } from "@/entities/class-timetable";

function ClassTimetableList() {
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState("receivedTimeStamp,desc");
  return (
    <_ClassTimetableList
      pageNo={pageNo}
      setPageNo={setPageNo}
      pageSize={pageSize}
      setPageSize={setPageSize}
      setSort={setSort}
      isLoading={false}
    />
  );
}

export default ClassTimetableList;
