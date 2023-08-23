// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function addZero(i) {
  // function to ad zero to a single digit number
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const printTime = () => {
  console.clear(); //clearing before every log

  let d = new Date();

  let h = addZero(d.getHours()); // for hours
  let ampm = h <= 12 ? "AM" : "PM"; // for am pm

  if (h > 12) {
    // for 12 hour format
    h = h - 12;
  }
  let m = addZero(d.getMinutes()); // for minutes
  s = addZero(d.getSeconds()); // for seconds
  let time = `${h}:${m}:${s}  ${ampm}`;
  console.log(time);
  s += 1;
  setTimeout(printTime, 1000); // recursion  after every 1 sec
};
printTime();
