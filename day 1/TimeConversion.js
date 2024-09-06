function timeConversion(s) {
  const format = s.slice(-2);
  let time = s.slice(0, s.length - 2).split(":");

  if (format === "AM") {
    if (time[0] >= 12) time[0] = Number(time[0]) - 12;
    if (time[0] === 0) time[0] = "00";
  }

  if (format === "PM" && time[0] < 12) time[0] = Number(time[0]) + 12;

  console.log(time.join(":"));
}

let s = "06:40:03AM";

timeConversion(s);
