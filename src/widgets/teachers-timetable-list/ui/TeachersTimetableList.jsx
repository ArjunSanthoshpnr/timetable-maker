import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Space } from "antd";

import { TeachersTimetableList as _TeachersTimetableList } from "@/entities/teachers-timetable";
import { useTeachers, SelectTeacher } from "@/features/change-teacher";

function TeachersTimetableList() {
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { selectedTeacher, onSelectedTeacherChange, teachersList } =
    useTeachers("all");

  let AllTimetables = [];

  if (selectedTeacher === "all") {
    AllTimetables = teachersList.map((item, index) => {
      if (item?.value === "all") {
        return null;
      }

      return (
        <div key={item?.value}>
          <_TeachersTimetableList
            isLoading={false}
            selectedTeacher={item?.value}
          />
          {index < teachersList.length - 1 && <div className="page-break" />}
        </div>
      );
    });
  }

  return (
    <>
      <Space>
        <SelectTeacher
          selectedTeacher={selectedTeacher}
          onSelectedTeacherChange={onSelectedTeacherChange}
          teachersList={teachersList}
        />
        <Button onClick={handlePrint}>Download</Button>
      </Space>

      <div>
        <div ref={componentRef}>
          {selectedTeacher === "all" ? (
            AllTimetables
          ) : (
            <_TeachersTimetableList
              pageNo={pageNo}
              setPageNo={setPageNo}
              pageSize={pageSize}
              setPageSize={setPageSize}
              isLoading={false}
              selectedTeacher={selectedTeacher}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default TeachersTimetableList;
