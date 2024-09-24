function reverseWords(str) {
  str = str.split(" ").reverse().join(" ");
  return str; // reverse those words
}
console.log(reverseWords("hello world!"));
