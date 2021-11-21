let n = 5;
let p = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    p += "*";
  }
  p += "\n";
}
console.log(p);