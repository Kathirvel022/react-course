📅 Day 8 – Lists & Keys

🧠 1. Concept

👉 List rendering  =

Multiple data → UI la display pannradhu

👉 Real examples:

Product list
User list
Comments
Messages

👉 React la:

➡️ map() use pannuvom

🔥 2. Basic Syntax (map)

const items = ["Apple", "Banana", "Orange"];

function App() {
  return (
    <div>
      {items.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

👉 Explain:

➡️ Array → loop → UI generate 💥

🔑 4. Keys (Very Important 🔥)

👉 Key = Unique ID for each item

👉 Why?

➡️ React identify pannum which item changed

❌ Without key (Wrong)

{users.map((user) => (
  <h2>{user.name}</h2>
))}

✅ With key (Correct)

{users.map((user) => (
  <h2 key={user.id}> {user.name} </h2>
))}

👉 Explain:
➡️ Key must be unique
➡️ Performance improve 💥

⚡ 5. Index as Key (Important)

{items.map((item, index) => (
  <h2 key={index}>{item}</h2>
))}

👉 Use only if no id available ⚠️

💡 6. Advanced Example (Card List)
function App() {
  const products = [
    { id: 1, name: "Mobile", price: 10000 },
    { id: 2, name: "Laptop", price: 50000 }
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}
🧠 7. Important Concepts

✅ 1. map() returns JSX

👉 Always return panna venum

✅ 2. Key must be unique

👉 Duplicate irundha problem

✅ 3. Avoid index as key (if dynamic list)

⚠️ 8. Common Mistakes

❌ Missing key
❌ Using same key
❌ Forget return
❌ Using for loop instead of map

📝 9. Student Tasks (Practice)

🎯 Task 1:

👉 Array → render list

🎯 Task 2:

👉 Object array → show name

🎯 Task 3:

👉 Product list:

Name
Price
🎯 Task 4:

👉 Add key properly

🎯 Task 5 (Challenge 🔥)

👉 Student list:

Name
Marks
Show “Pass / Fail” (Conditional + map 💥)

🎤 10. Interview Questions
🔹 Basic

👉 Q1: List rendering na enna?
👉 A: Array data UI la display pannradhu

👉 Q2: React la list render epdi?
👉 A: map()

👉 Q3: Key enna?
👉 A: Unique identifier

🔹 Medium

👉 Q4: Key use panna reason?
👉 A: React optimize rendering

👉 Q5: Index use panna correct aa?
👉 A: Only last option

🔹 Advanced

👉 Q6: Key wrong na enna problem?
👉 A: Re-render issues

👉 Q7: map vs for loop difference?
👉 A: map returns JSX directly


✅ Day 8 Result

After this:

Student dynamic data display pannuvanga 💪
API data render panna ready 🔥
Real-world React start 💥