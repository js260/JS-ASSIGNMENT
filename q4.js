base = Number(prompt("Enter base:"));
distance = Number(prompt("Enter distance:"));
minutesLate = Number(prompt("Enter minutesLate:"));
seed = Number(prompt("Enter seed:"));
fare = base + 7 * distance;
if (minutesLate > 15) {
  fare = fare + 20;
}
if (distance > 10) {
  fare = fare + Math.floor(fare * 0.10);
}
if (seed % 2 !== 0) {
  fare = fare - seed;
} else {
  fare = fare + seed;
}
fare = Math.ceil(fare / 5) * 5;
alert(fare);
