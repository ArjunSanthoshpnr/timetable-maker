import { useState } from "react";

import { SubjectsList as _SubjectsList } from "@/entities/subject";

function SubjectsList() {
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState("receivedTimeStamp,desc");
  return (
    <_SubjectsList
      pageNo={pageNo}
      setPageNo={setPageNo}
      pageSize={pageSize}
      setPageSize={setPageSize}
      setSort={setSort}
      isLoading={false}
    />
  );
}

export default SubjectsList;
