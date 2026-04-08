function isPalindrome(n) {
  str = n.toString();
  reversed = str.split("").reverse().join("");
  return str === reversed;
}
N = Number(prompt("Enter N:"));
K = Number(prompt("Enter K:"));
answer = -1;
for (let X = 0; X <= 100000; X++) {
    value = N + X;
   if (isPalindrome(value) && value % K === 0) {
    answer = X;
    break;
  }
}

alert(answer);
