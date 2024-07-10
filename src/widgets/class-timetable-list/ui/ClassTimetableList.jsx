import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Space } from "antd";

import { ClassTimetableList as _ClassTimetableList } from "@/entities/class-timetable";
import { useClasses, SelectClass } from "@/features/change-class";

function ClassTimetableList() {
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { selectedClass, onSelectedClassChange, classList } = useClasses("all");

  let AllTimetables = [];

  if (selectedClass === "all") {
    AllTimetables = classList.map((item, index) => {
      if (item?.value === "all") {
        return null;
      }

      return (
        <div key={item?.value}>
          <_ClassTimetableList isLoading={false} selectedClass={item?.value} />
          {index < classList.length - 1 && <div className="page-break" />}
        </div>
      );
    });
  }

  return (
    <>
      <Space>
        <SelectClass
          selectedClass={selectedClass}
          onSelectedClassChange={onSelectedClassChange}
          classList={classList}
        />
        <Button onClick={handlePrint}>Download</Button>
      </Space>

      <div>
        <div ref={componentRef}>
          {selectedClass === "all" ? (
            AllTimetables
          ) : (
            <_ClassTimetableList
              pageNo={pageNo}
              setPageNo={setPageNo}
              pageSize={pageSize}
              setPageSize={setPageSize}
              isLoading={false}
              selectedClass={selectedClass}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ClassTimetableList;
