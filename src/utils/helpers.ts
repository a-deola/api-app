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

export function parseDigit(digit: number) {
  return digit < 10 ? `0${digit}` : digit;
}

export function getUTC() {
  const now = new Date();

  const utcFullYear = now.getUTCFullYear();
  const utcDate = parseDigit(now.getUTCDate());
  const utcHours = parseDigit(now.getUTCHours());
  const utcMonth = parseDigit(now.getUTCMonth() + 1);
  const utcMinutes = parseDigit(now.getUTCMinutes());
  const utcSeconds = parseDigit(now.getUTCSeconds());

  const time = `${utcFullYear}-${utcMonth}-${utcDate}T${utcHours}:${utcMinutes}:${utcSeconds}Z`;

  return time;
}
