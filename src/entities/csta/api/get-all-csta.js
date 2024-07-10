import pb from "@/shared/lib/pocketbase";

export const getAllClassSubjectTeacherAssociation = async () => {
  const result = await pb
    .collection("ClassSubjectTeacherAssociation")
    .getFullList(200 /* batch size */, {
      sort: "created",
    });

  return result;
};
