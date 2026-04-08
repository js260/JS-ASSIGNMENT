a = Number(prompt("Enter correct answers (a):"));
b = Number(prompt("Enter partially correct answers (b):"));
c = Number(prompt("Enter wrong answers (c):"));
score = 3 * a + b - 2 * c;
if (score < 0) {
  score = 0;
}
if (a + b + c > 50) {
  score = score - 10;
}
let status;
if (score >= 60) {
  alert("Score: "+ score);
  alert("PASS");
} 
else {
  alert("Score: "+ score);
  alert("FAIL");
}

