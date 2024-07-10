import pb from "@/shared/lib/pocketbase";

export const getAllClassTimetableAssociation = async () => {
  const result = await pb.collection("CTA").getFullList(200 /* batch size */, {
    sort: "created",
  });

  return result;
};
