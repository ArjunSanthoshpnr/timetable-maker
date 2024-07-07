import { DateTime } from "luxon";

export default function getFormattedTimestamp(item) {
  return DateTime.fromISO(item).toFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZZ");
}
