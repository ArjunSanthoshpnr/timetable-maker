import { DateTime } from "luxon";

export default function getFormattedDate(item) {
  return DateTime.fromISO(item).toFormat("MMM dd yyyy");
}
