export const hours = [
  "1am",
  "2am",
  "3am",
  "4am",
  "5am",
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
  "9pm",
  "10pm",
  "11pm",
  "12am",
];
function getTomorrow(hour = 6) {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  date.setHours(hour);
  date.setMinutes(0);
  date.setMilliseconds(0);
  return date;
}
//.toLocaleString("en-US", {timeZone: "America/New_York"});
export function getTimeNumFromZone(tz: string): number {
  return (
    Number(
      new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        hour: "numeric",
        hour12: false,
      }).format(getTomorrow())
    ) - 1
  );
}
export const hoursNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 0,
];
export function isValidHourNumber(n: number): boolean {
  return !Number.isNaN(n) && Number.isSafeInteger(n) && n >= 0 && n < 24;
}
// Sunday - Saturday : 0 - 6
export const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
/*
export function getMyTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
*/
export function getTimestamps(days: number[], hours: number[]): number[] {
  const timestamps: number[] = [];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 1, 0);
  const tomorrowsWeekDay = tomorrow.getDay();
  // "tomorrow is tuesday === 2"
  days.forEach((dayNum) => {
    const date = new Date(tomorrow);
    if (dayNum > tomorrowsWeekDay) {
      date.setDate(date.getDate() + dayNum - tomorrowsWeekDay);
    } else if (dayNum < tomorrowsWeekDay) {
      date.setDate(date.getDate() + ((dayNum + (7 - tomorrowsWeekDay)) % 7));
    }
    hours.forEach((hourNum) => {
      date.setHours(hourNum);
      timestamps.push(date.getTime());
    });
  });
  return timestamps;
}
