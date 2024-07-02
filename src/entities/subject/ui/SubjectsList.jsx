import { useState, useEffect, useRef, forwardRef } from "react";

import { EntityList } from "@/shared/ui";
import { columns } from "../config/columns";
import { getAllSubjects } from "../api/get-subjects";
import { useReactToPrint } from "react-to-print";
import { Button } from "antd";

function SubjectsList({
  isLoading,
  reloadData,
  pageNo,
  setPageNo,
  pageSize,
  setPageSize,
  setSort,
}) {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    getAllSubjects().then((subjects) => {
      setSubjects(subjects);
    });
  }, []);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const DownloadPdf = <Button onClick={handlePrint}>Download</Button>;

  return (
    <div>
      <EntityList
        componentRef={componentRef}
        isLoading={isLoading}
        columns={columns}
        data={subjects}
        reloadData={reloadData}
        rowKey="id"
        totalCount={subjects?.length}
        pageNo={pageNo}
        setPageNo={setPageNo}
        pageSize={pageSize}
        setPageSize={setPageSize}
        showTableResizeOption
        setSort={setSort}
        toolbarExtensions={[DownloadPdf]}
      />
    </div>
  );
}

export default SubjectsList;
