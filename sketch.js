function setup() {
    createCanvas(300, 250);
  }
  
  function draw() {
    background(0);
    timeStuff();
  
  }
  
  function timeStuff() {
    let h = hour();
    let m = minute();
    let s = second();
    let newH = map(h, 0, 23, 0, width);
    let newM = map(m, 0, 59, 0, width);
    let newS = map(s, 0, 59, 0, width);
  
    textAlign(CENTER);
    text('What Time Is It?', width / 2, 40)
    fill(255, 0, 0);
    rect(0, 50, newH, 50);
    fill(0, 255, 0);
    rect(0, 100, newM, 50);
    fill(0, 0, 255);
    rect(0, 150, newS, 50);
    textSize(32);
    fill(255);
  
    if (h < 12) { // am pm text by the hour.
      text('AM', 235, height - 15);
    } else {
      text('PM', 235, height - 15);
    }
  
    if (h >= 13) { // show the time in AM/PM style instead of 24 hour clock.
      h -= 12;
    }
    
    textAlign(CENTER);
    if (m <= 10) { // add the missing zero
      m = '0' + m;
    }
    if (s <= 10) { // add the missing zero
      s = '0' + s;
    }
    text(h + ':' + m + ':' + s, width / 2, height - 15);
  }