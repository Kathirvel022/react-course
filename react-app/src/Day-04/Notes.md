📅 Day 4 – Event Handling 

🧠 1. Concept 

👉 Event Handling = User actions handle pannradhu

Examples:

Button click
Input typing
Form submit

👉 Real life: ➡️ User click pannina → React respond pannum

🔥 2. Syntax Basics

✅ HTML vs React Difference

❌ HTML:
HTML
<button onclick="clickMe()">Click</button>

✅ React:
JSX
<button onClick={clickMe}>Click</button>

👉 Important:

onClick (camelCase)
{} use pannuvom

⚡ 3. Basic Example

JSX
function App() {

  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <button onClick={handleClick}>Click Me</button>
  );
}
🔥 5. Passing Parameters
JSX
function App() {

  function greet(name) {
    alert("Hello " + name);
  }

  return (
    <button onClick={() => greet("Kathir")}>
      Click
    </button>
  );
}

👉 Explain: ➡️ Direct function call panna koodathu
➡️ Arrow function use pannunga

⚠️ 6. Common Mistakes
❌ Wrong:
JSX
<button onClick={greet("Kathir")}>

👉 Immediately run aagum ❌

✅ Correct:
JSX
<button onClick={() => greet("Kathir")}>

🧠 7. Event Object

JSX
function handleChange(e) {
  console.log(e.target.value);
}
👉 e = event object
👉 e.target.value = input value

📝 8. Student Tasks (Practice)

🎯 Task 1:
👉 Button click → show alert

🎯 Task 2:
👉 Button click → change text

🎯 Task 3:
👉 Input box → live display text

🎯 Task 4:
👉 Create counter:
Increase
Decrease

🎯 Task 5 (Challenge 🔥)

👉 Toggle button:

ON → OFF
OFF → ON

🎤 9. Interview Questions

🔹 Basic

👉 Q1: Event Handling na enna?
👉 A: User actions handle pannradhu

👉 Q2: React la click event epdi?
👉 A: onClick

👉 Q3: Why {} use pannuvom?
👉 A: JavaScript execute panna

🔹 Medium

👉 Q4: Function call direct use panna enna problem?
👉 A: Immediately execute aagum

👉 Q5: Parameter pass epdi pannuvom?
👉 A: Arrow function use pannuvom

👉 Q6: Event object enna?
👉 A: Event details store pannum object

🔹 Advanced

👉 Q7: Controlled input na enna?
👉 A: State la control pannura input

👉 Q8: React event vs DOM event difference? 
👉 React uses Synthetic Events



✅ Day 4 Result
After this:
Student interact panna theriyum 💪
Button, input handle pannuvanga 🔥
Mini apps build panna start pannuvanga
