import { DateTime } from "luxon";

export default function getFormattedDateTime(dateString) {
  const dateTime = DateTime.fromISO(dateString);
  return dateTime.isValid ? dateTime.toFormat("MMM dd yyyy hh:mm:ss a") : null;
}
