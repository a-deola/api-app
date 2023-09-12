export function getDay() {
  const day = new Date().getDay();
  switch (day) {
    case 0:
      return "Sunday";
      break;

    case 1:
      return "Monday";
      break;

    case 2:
      return "Tuesday";
      break;

    case 3:
      return "Wednesday";
      break;

    case 4:
      return "Thursday";
      break;

    case 5:
      return "Friday";
      break;

    case 6:
      return "Saturday";
      break;

    default:
      return "Unknown";
  }
}

export function getUTC() {
  return new Date().getUTCDate();
}
