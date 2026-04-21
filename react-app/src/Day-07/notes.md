📅 Day 7 – Conditional Rendering
🧠 1. Concept

👉 Conditional Rendering =

Condition base pannitu UI show pannradhu

👉 Simple:

➡️ “If true → show something”
➡️ “If false → show something else”

💡 Real Examples:

Login / Logout
Show error message
Hide / Show password
Loading spinner

🔥 2. Basic Methods

✅ 1. if / else (Normal JS)

function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}
✅ 2. Ternary Operator (Most Used 🔥)

<h1>{isLoggedIn ? "Welcome" : "Please Login"}</h1>

👉 Explain:

➡️ Short & clean
➡️ Industry la ithu than use pannuvanga

✅ 3. Logical AND (&&)

{isLoggedIn && <h1>Welcome</h1>}

👉 True na mattum show aagum

👉 Explain:

➡️ Real API usage concept 💥

🧠 4. Important Concepts

✅ 1. UI control using state

👉 State change → condition change → UI change

✅ 2. Clean UI logic

👉 Avoid too many if-else inside JSX

✅ 3. Use ternary mostly

👉 Short & readable

⚠️ 5. Common Mistakes

❌ Complex nested ternary
❌ Missing condition
❌ Returning multiple JSX without wrapper

📝 6. Student Tasks (Practice)

🎯 Task 1:

👉 Toggle Login / Logout

🎯 Task 2:

👉 Show / Hide password

🎯 Task 3:

👉 Even / Odd checker

🎯 Task 4:

👉 Loading screen (2 sec delay)

🎯 Task 5 (Challenge 🔥)

👉 Age check:

<18 → Minor
>=18 → Adult

🎤 7. Interview Questions

🔹 Basic

👉 Q1: Conditional rendering na enna?
👉 A: Condition base UI render pannradhu

👉 Q2: React la condition epdi use pannuvom?
👉 A: if / ternary / &&

🔹 Medium

👉 Q3: Ternary syntax enna?
👉 A: condition ? true : false

👉 Q4: && use enna?
👉 A: True na mattum show

🔹 Advanced

👉 Q5: Nested ternary avoid panna reason?
👉 A: Readability problem

👉 Q6: Conditional rendering real use case?
👉 A: Auth, loading, error handling

✅ Day 7 Result

After this:

Student logic-based UI build pannuvanga 💪
Real app behaviour understand pannuvanga 🔥
Smart React developer path start 💥