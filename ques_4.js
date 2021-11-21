let n = 5;
let p = "";

for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    p += " ";
  }
  
  for (let k = 0; k < i * 2 - 1; k++) {
    p += "*";
  }
  p += "\n";
}

for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    p += " ";
  }
  
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    p += "*";
  }
  p += "\n";
}
console.log(p);