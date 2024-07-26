import { getAllClassTimetable } from "../api/get-class-timetable";

export async function checkForCtaConflict(teacher_id, day, period) {
  const conflictList = await getAllClassTimetable(
    "",
    `class_sub_teach_ass.teacher_name="${teacher_id}" && day.name="${day}" && period.name="${period}"`
  );

  const className =
    conflictList[0]?.expand?.class_sub_teach_ass?.expand?.class_name?.name;
  const teacherName =
    conflictList[0]?.expand?.class_sub_teach_ass?.expand?.teacher_name?.name;
  const subjectName =
    conflictList[0]?.expand?.class_sub_teach_ass?.expand?.subject_name?.name;

  const dayName = conflictList[0]?.expand?.day?.name;
  const periodName = conflictList[0]?.expand?.period?.name;

  return {
    isUnique: conflictList?.length === 0,
    description:
      conflictList?.length === 0
        ? "No conflicts"
        : `Conflict detected: ${className} - ${subjectName} with teacher ${teacherName} during ${periodName} on ${dayName}.`,
  };
}
