function solution(D) {
  let output = {};
  let keys = Object.keys(D);

  for (let i = 0; i < keys.length; i++) {
    let date = new Date(keys[i]);
    let dayOfWeek = date.toLocaleString("en-US", { weekday: "short" });

    if (!output[dayOfWeek]) {
      output[dayOfWeek] = D[keys[i]];
    } else {
      output[dayOfWeek] += D[keys[i]];
    }

    if (i > 0 && i < keys.length - 1) {
      let prevDate = new Date(keys[i - 1]);
      let nextDate = new Date(keys[i + 1]);

      let prevDayOfWeek = prevDate.toLocaleString("en-US", { weekday: "short" });
      let nextDayOfWeek = nextDate.toLocaleString("en-US", { weekday: "short" });

      if (!output[dayOfWeek]) {
        output[dayOfWeek] = (D[keys[i - 1]] + D[keys[i + 1]]) / 2;
      }
    }
  }

  return output;
}
