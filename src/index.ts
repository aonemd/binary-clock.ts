setInterval(() => {
  console.clear();

  let [hour, minute, second] = _getTimeSections();

  let hourComponents   = _getTimeSecionComponents(hour);
  let minuteComponents = _getTimeSecionComponents(minute);
  let secondComponents = _getTimeSecionComponents(second);

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

const _getTimeSecionComponents = (section: number): Array<string> => {
  // secion is one of: hours, minutes, or seconds
  //
  // convert the section number into a string
  // pad the string with a 0 if it's a signle digit. For example, '2' => '02'
  // split the string into two components (represented by an array of two
  // items): tens and ones
  //
  return section.toString().padStart(2, '0').split("");
}
