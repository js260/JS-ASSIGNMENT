Structure for Repository
README.md
q1.js
q2.js
q3.js
q4.js
q5.js
q6.js

Approaches for Questions

Q1
Check every integer 'x' from 'L' to 'R'. For each, 
check three conditions:
1. 'x % K === 0' (divisible by K)
2. No digit of 'x' is '0' (checked by repeatedly taking '% 10')
3. The sum of digits of 'x' is prime (by √n)
Count all integers that satisfy the three conditions.
Time Complexity: O((R − L) × d) where d = number of digits

Q2
Approach:
Apply the transformation rule 3 times to N:
 Even → 'N / 2 + seed'
 Odd  → 'N * 3 − seed'
After 3 steps check if the result is in [100, 999] AND its middle digit equals 'seed'.
Time Complexity: O(1) — fixed 3 iterations


Q3
Approach:
Check X from 0 to 100000. For each candidate 'val = N + X':
 Check palindrome by comparing the string to its reverse
 Check divisibility by K
Return the first X that satisfies both, or −1.
Time Complexity: O(100000 × log(N + 100000))

Q4
Approach:
Apply fare rules in the order:
1. 'fare = base + 7 × distance'
2. If 'minutesLate > 15', add 20
3. If 'distance > 10', add 'floor(10% of fare)'
4. If seed is odd, subtract seed; else add seed
5. Round up to nearest multiple of 5 using 'fare + (5 − fare % 5)' when 'fare % 5 ≠ 0'
Time Complexity: O(1)

Q5
Approach:
Solve 'divisor = seed + 2'. Increment 'm' one at a time; add 'm' to the running sum only if 'm % divisor !== 0'. Stop as soon as 'sum >= N'. Output both 'm' and 'sum'.
Time Complexity: O(m*) where m* is the answer — at most O(N) in the worst case


Q6 
Approach:
1. Find 'score = 3a + b − 2c'
2. Make 0 if negative
3. If total questions 'a + b + c > 50', subtract 10
4. Print PASS if 'score ≥ 60', else FAIL
Time Complexity: O(1)



How to Run
Open any '.js' file in a browser console or create a simple HTML file:
For example:
<html>
  <body>
    <script src="q1.js"></script>
  </body>
</html>

Open the HTML file in a browser and it will display the result.

# JS-ASSIGNMENT
