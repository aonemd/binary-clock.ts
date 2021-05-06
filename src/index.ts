setInterval(() => {
  console.clear();

  let [hour, minute, second] = _getTimeSections();

  let hourComponents   = hour.toString().padStart(2, '0').split("");
  let minuteComponents = minute.toString().padStart(2, '0').split("");
  let secondComponents = second.toString().padStart(2, '0').split("");

  let hourBinaryComponents   = hourComponents.map((e) => Number(e).toString(2).padStart(4, '0'));
  let minuteBinaryComponents = minuteComponents.map((e) => Number(e).toString(2).padStart(4, '0'));
  let secondBinaryComponents = secondComponents.map((e) => Number(e).toString(2).padStart(4, '0'));

  let components = [
    hourBinaryComponents,
    minuteBinaryComponents,
    secondBinaryComponents,
  ];


  for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < 3; j++) {
      row += (components[j][0][i] + ' ');
      row += (components[j][1][i] + ' ');
    }
    console.log(row);
  }
}, 1000);

const _getTimeSections = (): Array<number> => {
  const date = new Date()

  let hours   = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return [
    hours,
    minutes,
    seconds
  ];
}
