setInterval(() => {
  console.clear();

  const date = new Date()
  let hour   = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

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
