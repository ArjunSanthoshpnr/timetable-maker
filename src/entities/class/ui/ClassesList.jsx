import { useState, useEffect } from "react";

import { EntityList } from "@/shared/ui";
import { columns } from "../config/columns";
import { getAllClasses } from "../api/get-classes";

function ClassesList({
  isLoading,
  reloadData,
  pageNo,
  setPageNo,
  pageSize,
  setPageSize,
  setSort,
}) {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    getAllClasses().then((classes) => {
      setClasses(classes);
    });
  }, []);

  return (
    <div>
      <EntityList
        // componentRef={componentRef}
        isLoading={isLoading}
        columns={columns}
        data={classes}
        reloadData={reloadData}
        rowKey="id"
        totalCount={classes?.length}
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

export default ClassesList;
