import getFormattedDate from "./get-formatted-date";
import getFormattedDateTime from "./get-formatted-date-time";
import getFormattedTimestamp from "./get-formatted-timestamp";

export default function getFormattedValue(item, record, type, currencyIndex) {
  if (type === "dateTime") {
    return getFormattedDateTime(item);
  } else if (type === "date") {
    return getFormattedDate(item);
  } else if (type === "timestamp") {
    return getFormattedTimestamp(item);
  } else {
    return item;
  }
}
