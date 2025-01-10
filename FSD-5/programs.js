//!Patterns
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    document.writeln("*");
  }
  document.write("<br>");
}

//!Left Angled Triangle
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i >= j) {
      document.writeln("*");
    } else {
      document.writeln("&nbsp"); //!nbsp=non breaking space
    }
  }
  document.write("<br>");
}

//!Right Angled Triangle
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j <= i) {
      document.write("*"); // Print an asterisk for valid positions
    } else {
      document.write("&nbsp;&nbsp;"); // Print spaces to maintain alignment
    }
  }
  document.write("<br>");
}

//!Diagonal Triangle
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i == j || i + j == 6) {
      document.write("*"); // Print an asterisk for valid positions
    } else {
      document.write("&nbsp;&nbsp;&nbsp;&nbsp;"); // Print spaces to maintain alignment
    }
  }
  document.write("<br>");
}
