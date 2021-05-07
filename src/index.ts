class BinaryClock {
  run() {
    setInterval(() => {
      let timeComponents = this._tick();

      this._printToConsole(timeComponents);
    }, 1000);
  }

  private _tick(): Array<Array<string>> {
    let [hours, minutes, seconds] = this._getTimeSections();

    let hourComponents   = this._getTimeSecionComponents(hours);
    let minuteComponents = this._getTimeSecionComponents(minutes);
    let secondComponents = this._getTimeSecionComponents(seconds);

    let hourBinaryComponents   = this._convertComponentsToBinary(hourComponents);
    let minuteBinaryComponents = this._convertComponentsToBinary(minuteComponents);
    let secondBinaryComponents = this._convertComponentsToBinary(secondComponents);

    let components = [
      hourBinaryComponents,
      minuteBinaryComponents,
      secondBinaryComponents,
    ];

    return components;
  }

  private _getTimeSections(): Array<number> {
    const date = new Date();

    let hours   = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return [
      hours,
      minutes,
      seconds
    ];
  }

  private _getTimeSecionComponents(section: number): Array<string> {
    // secion is one of: hours, minutes, or seconds
    //
    // convert the section number into a string
    // pad the string with a 0 if it's a signle digit. For example, '2' => '02'
    // split the string into two components (represented by an array of two
    // items): tens and ones
    //
    return section.toString().padStart(2, '0').split("");
  }

  private _convertComponentsToBinary(components: Array<string>): Array<string> {
    // components: is an array of length two: one for the tens and another for
    // the ones
    //
    // for each component `c`, we do the following:
    //   - convert it into binary using Javascript `toString(2)` function. Notice
    //     we used the function `Number()` first to convert the component into a
    //     number so we can use `toString(2)` on the component.
    //   - pad the resulting string with 0's in order to make it of length 4
    //
    return components.map((c) => Number(c).toString(2).padStart(4, '0'));
  }

  private _printToConsole(components: Array<Array<string>>) {
    // clear the previous clock from the terminal before printing
    console.clear();

    // print each row to the terminal
    // 4: is the number of the rows of the binary clock
    // 3: is the number of sections (hours, minutes, and seconds)
    //
    for (let i = 0; i < 4; i++) {
      let row = "";
      for (let j = 0; j < 3; j++) {
        row += (components[j][0][i] + ' ');  // tens component
        row += (components[j][1][i] + ' ');  // ones component
      }

      console.log(row);
    }
  }
}

new BinaryClock().run();
