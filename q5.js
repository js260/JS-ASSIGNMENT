N = Number(prompt("Enter N:"));
seed = Number(prompt("Enter seed:"));
divisor = seed + 2; 
sum = 0;
m = 0;
while (sum < N) {
  m++;
  if (m % divisor !== 0) {
    sum += m;
  }
}
alert("m = " + m + ", sum = " + sum);
