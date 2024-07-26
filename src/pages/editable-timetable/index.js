import { Page } from "@/shared/ui/page";
import { EditableTimetableList } from "@/widgets/editable-timetable-list";

function ClassTimetable() {
  return (
    <Page
      showPageHeader
      header={{
        title: "Generate class timetable",
        breadcrumbs: [
          {
            title: "Home",
          },

          {
            title: "Generate class timetable",
          },
        ],
      }}
      content={<EditableTimetableList />}
    />
  );
}

export default ClassTimetable;
