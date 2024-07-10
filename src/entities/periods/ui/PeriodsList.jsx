import useSWR from "swr";

import { EntityList } from "@/shared/ui";
import { columns } from "../config/columns";
import { getAllPeriods } from "../api/get-periods";

function PeriodsList({
  reloadData,
  pageNo,
  setPageNo,
  pageSize,
  setPageSize,
  setSort,
}) {
  const { data, isLoading } = useSWR(["/api/classes"], getAllPeriods);

  return (
    <div>
      <EntityList
        isLoading={isLoading}
        columns={columns}
        data={data}
        reloadData={reloadData}
        rowKey="id"
        totalCount={data?.length}
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
