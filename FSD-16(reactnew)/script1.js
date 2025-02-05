const collegeName = "mru";
const marks = 100;
const m1 = "pass";
function Tasking() {
  console.log("I am learning code now at " + collegeName);
  document.getElementById("hello").innerText = "I am learning code now at";
}

export { collegeName, Tasking };
export default { marks, m1 };
