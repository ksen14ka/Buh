function strtotime(time, now) {

  var d = new Date();
  d.setTime(now);

  var ParsedTime = new RegExp('([+-][0-9]+) (\\w+)', 'i').exec(time);
  if(!ParsedTime) return 0;

  switch(ParsedTime[2]) {
    case 'second':
      d.setSeconds(d.getSeconds() + parseInt(ParsedTime[1], 10));
      break;
    case 'minute':
      d.setMinutes(d.getMinutes() + parseInt(ParsedTime[1], 10));
      break;
    case 'hour':
      d.setHours(d.getHours() + parseInt(ParsedTime[1], 10));
      break;
    case 'day':
      d.setDate(d.getDate() + parseInt(ParsedTime[1], 10));
      break;
    case 'month':
      d.setMonth(d.getMonth() + parseInt(ParsedTime[1], 10));
      break;
    case 'year':
      d.setFullYear(d.getFullYear() + parseInt(ParsedTime[1], 10));
      break;
  }

  return d.getTime();
}