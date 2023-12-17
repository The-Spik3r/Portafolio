// ...

export function getCurrentTimeInArgentina(): Date {
  // Create a date object with the current UTC time
  const now = new Date();

  // Argentina is in UTC-3 time zone, which does not have Daylight Saving Time
  now.setHours(now.getUTCHours() - 3);

  return now;
}

export function formatTimeForArgentina(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "America/Argentina/Buenos_Aires", // Set the time zone to Argentina
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append the time zone abbreviation. In this example, "ART" is used.
  formattedTime += " ARG";

  return formattedTime;
}

// ...
