function Prime(n) {
  if (n < 2) 
  return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) 
     return false;
  }
  return true;
}
function sum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
function Zero(n) {
  while (n > 0) {
    if (n % 10 === 0) return true;
    n = Math.floor(n / 10);
  }
  return false;
}
L = Number(prompt("Enter L:"));
R = Number(prompt("Enter R:"));
K = Number(prompt("Enter K:"));
count = 0;
for (let x = L; x <= R; x++) {
  if (x % K !== 0) 
     continue;
  if (Zero(x)) 
     continue;
  if (!Prime(sum(x))) 
      continue;

  count++;
}

alert(count);
