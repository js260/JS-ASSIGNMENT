N = Number(prompt("Enter N:"));
seed = Number(prompt("Enter seed:"));
current = N;
for (let i = 0; i < 3; i++) {
  if (current % 2 === 0) {
    current = current / 2 + seed;
  } else {
    current = current * 3 - seed;
  }
}
middleDigit = Math.floor(current / 10) % 10;

if (current >= 100 && current <= 999 && middleDigit === seed) {
  alert("YES, " + current);
} else {
  alert("NO, " + current);
}
