📅 Day 9 – useEffect

🧠 1. Concept

👉 useEffect =

Side effects handle panna use pannuvom

💡 Side Effect na enna?

Examples:

API call
Timer
Local storage
Event listener

👉 UI render aana apram nadakkura work 💥

🔥 2. Syntax (Very Important)

import { useEffect } from "react";

useEffect(() => {

}, []);

Breakdown:

✅ useEffect(() => {})

👉 Function run aagum

✅ []

👉 Dependency array

Control pannum:

Eppo run aaganum?

⚡ 3. Types of useEffect

✅ 1. Run Every Render

useEffect(() => {
  console.log("Runs every render");
});

👉 Every UI update ku run aagum

✅ 2. Run Only Once (Most Used 🔥)
useEffect(() => {
  console.log("Runs once");
}, []);

👉 Component first load la mattum run aagum

👉 API calls ku use pannuvom 💥

✅ 3. Run on State Change
useEffect(() => {
  console.log("Count changed");
}, [count]);

👉 count change aana run aagum


🎯 Demo 1: Simple useEffect

import { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return <h1>Hello</h1>;
}

👉 Explain:

➡️ Component load → effect run

🎯 Demo 2: Counter + useEffect

import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

👉 Explain:

➡️ count update → effect run 💥

🎯 Demo 3: API Fetch (Most Important 🔥🔥)
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </div>
  );
}

👉 Explain:

Component load
API call
Data store in state
Render UI 💥

🎯 Demo 4: Loading State (Real-world 🔥)

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <h1>Data Loaded</h1>}
    </div>
  );
}

🧠 5. Dependency Array Deep Explanation

Syntax	Meaning

useEffect()	Every render
useEffect([],)	Once
useEffect([count])	count change

👉 Ithu romba important 🔥

⚠️ 6. Infinite Loop (Important)

❌ Wrong:

useEffect(() => {
  setCount(count + 1);
});

👉 Endless render 😵

🧹 7. Cleanup Function (Intro Only)
useEffect(() => {

  return () => {
    console.log("Cleanup");
  };

}, []);

👉 Component remove aagumbodhu run aagum


📝 8. Student Tasks (Practice)

🎯 Task 1:

👉 Console log using useEffect

🎯 Task 2:

👉 Counter + useEffect

🎯 Task 3:

👉 Fetch users from API

API:

https://jsonplaceholder.typicode.com/users
🎯 Task 4:

👉 Loading screen

🎯 Task 5 (Challenge 🔥)

👉 Search input:

Typing panna console log using useEffect

🎤 9. Interview Questions

🔹 Basic

👉 Q1: useEffect na enna?
👉 A: Side effects handle panna hook

👉 Q2: API call epdi pannuvom?
👉 A: useEffect use pannuvom

👉 Q3: Empty dependency array meaning?
👉 A: Once run aagum

🔹 Medium

👉 Q4: Dependency array use enna?
👉 A: Control effect execution

👉 Q5: useEffect eppo run aagum?
👉 A: Render apram

🔹 Advanced

👉 Q6: Cleanup function enna?
👉 A: Memory cleanup

👉 Q7: Infinite loop epdi varum?
👉 A: Wrong state update inside effect

✅ Day 9 Result

After this:

Student API fetch panna theriyum 💪
Lifecycle basic understand pannuvanga 🔥
Real-world React start 💥