import { useState, useEffect } from "react";

import { EntityList } from "@/shared/ui";
import { columns } from "../config/columns";
import { getAllPeriods } from "../api/get-periods";

function PeriodsList({
  isLoading,
  reloadData,
  pageNo,
  setPageNo,
  pageSize,
  setPageSize,
  setSort,
}) {
  const [periods, setPeriods] = useState([]);
  useEffect(() => {
    getAllPeriods().then((periods) => {
      setPeriods(periods);
    });
  }, []);

  return (
    <div>
      <EntityList
        isLoading={isLoading}
        columns={columns}
        data={periods}
        reloadData={reloadData}
        rowKey="id"
        totalCount={periods?.length}
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

export default PeriodsList;
