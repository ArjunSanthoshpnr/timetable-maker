export const generateTimetable = (apiResponse) => {
  if (!apiResponse) {
    return [];
  }
  const daysMap = {
    "1e1xg1v3vq9x2v0": "Monday",
    "0owdmobi8q77f2v": "Tuesday",
    "4oa4tvslg76dhyk": "Wednesday",
    "933mjiv7810gnlc": "Thursday",
    "86s4wbvm5r4xg2v": "Friday",
    rv487hzwa2al7jp: "Saturday",
  };

  const periodsMap = {
    zfoc4mqohvffr8z: "P1",
    w2gnz7m57h9ez79: "P2",
    "4wshakk03oabz25": "P3",
    zrqa2lp0m4h08bq: "P4",
    uk7pezozbq7x795: "P5",
  };

  let data = {
    Monday: { day: "Monday", key: "1" },
    Tuesday: { day: "Tuesday", key: "2" },
    Wednesday: { day: "Wednesday", key: "3" },
    Thursday: { day: "Thursday", key: "4" },
    Friday: { day: "Friday", key: "5" },
    Saturday: { day: "Saturday", key: "6" },
  };
  apiResponse.forEach((item) => {
    const dayName = daysMap[item?.day];
    const periodName = periodsMap[item?.period];
    const classInfo =
      item?.expand?.class_sub_teach_ass?.expand?.subject_name[0]?.name;

    if (!data[dayName]) {
      data[dayName] = { day: dayName };
    }

    data[dayName][periodName] = classInfo;
  });

  const tableData = Object.values(data);

  return [...tableData];
};
