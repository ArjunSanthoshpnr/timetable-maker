import pb from "@/shared/lib/pocketbase";

export const getAllClassTimetable = async () => {
  const result = await pb.collection("CTA").getFullList(200 /* batch size */, {
    sort: "-created",
    filter: "class_sub_teach_ass.class_name.name='KG1'",
    expand:
      "class_sub_teach_ass, class_sub_teach_ass.subject_name, day, period",
  });

  return result;
};
