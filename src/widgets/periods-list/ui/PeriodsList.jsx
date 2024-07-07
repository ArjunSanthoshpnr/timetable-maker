import { useState } from "react";

import { PeriodsList as _PeriodsList } from "@/entities/periods";

function PeriodsList() {
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState("receivedTimeStamp,desc");
  return (
    <_PeriodsList
      pageNo={pageNo}
      setPageNo={setPageNo}
      pageSize={pageSize}
      setPageSize={setPageSize}
      setSort={setSort}
      isLoading={false}
    />
  );
}

export default PeriodsList;
