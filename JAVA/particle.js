for (let i = 1; i <= 55; i++) {
  console.log(2 * i - 1);
}

function printSequence() {
  let num = 90;
  while (num >= 60) {
    console.log(num);
    num -= 5;
  }
}



function printSequence() {
  let num = 2;
  for (let i = 1; i <= 20; i++) {
    console.log(num);
    if (i % 6 == 0) {
      num = 12;
    } else {
      num *= 2;
    }
  }
}


function printMultiplesOfFive() {
  for (let i = -29; i <= 10; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}



let sum = 0;
let evenCount = 0;

for (let i = 50; i <= 150; i++) {
  sum += i;
  if (i % 2 === 0) {
    evenCount++;
  }
}






