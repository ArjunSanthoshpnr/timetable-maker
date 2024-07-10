import { useState, useEffect } from "react";

import { EntityList } from "@/shared/ui";
import { columns } from "../config/columns";
import { getAllClassTimetableAssociation } from "../api/get-all-cta";

function ClassTimetableAssociationList({
  isLoading,
  reloadData,
  pageNo,
  setPageNo,
  pageSize,
  setPageSize,
}) {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getAllClassTimetableAssociation().then((data) => {
      setTableData(data);
    });
  }, []);

  return (
    <div>
      <EntityList
        isLoading={isLoading}
        columns={columns}
        data={tableData}
        reloadData={reloadData}
        rowKey="id"
        totalCount={tableData?.length}
        pageNo={pageNo}
        setPageNo={setPageNo}
        pageSize={pageSize}
        setPageSize={setPageSize}
        showTableResizeOption
      />
    </div>
  );
}

export default ClassTimetableAssociationList;
