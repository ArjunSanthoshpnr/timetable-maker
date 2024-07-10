import { useState, useEffect } from "react";

import { EntityList } from "@/shared/ui";
import { columns } from "../config/columns";
import { getAllClassSubjectTeacherAssociation } from "../api/get-all-csta";

function ClassSubjectTeacherAssociationList({
  isLoading,
  reloadData,
  pageNo,
  setPageNo,
  pageSize,
  setPageSize,
}) {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getAllClassSubjectTeacherAssociation().then((data) => {
      setTableData(data);
    });
  }, []);

  return (
    <div>
      <EntityList
        // componentRef={componentRef}
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

export default ClassSubjectTeacherAssociationList;
