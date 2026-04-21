📅 Day 6 – Forms

🧠 1. Concept

👉 Form = User data collect pannradhu

Examples:

Login form
Signup form
Contact form

👉 React la:

➡️ Form inputs = state la control pannuvom

👉 Ithu dhan:

🔥 Controlled Components

🔥 2. Controlled Component

👉 Input value → state la irukum
👉 onChange → update pannuvom

⚡ Basic Syntax
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

👉 Explain:

value → state connect
onChange → update

🧠 4. Important Concepts

✅ 1. preventDefault()

👉 Page reload avoid pannum

✅ 2. Controlled vs Uncontrolled

Controlled	   Uncontrolled
React control	 DOM control
useState use	 ref use

👉 Beginners → Controlled use pannunga

✅ 3. Input Types

<input type="text" />
<input type="password" />
<input type="email" />

⚠️ 5. Common Mistakes

❌ value without onChange
❌ forget preventDefault
❌ wrong state update

📝 6. Student Tasks (Practice)

🎯 Task 1:

👉 Name input → show below

🎯 Task 2:

👉 Login form:

Email
Password

🎯 Task 3:

👉 Signup form:

Name
Email
Password

🎯 Task 4:

👉 Form submit → console log

🎯 Task 5 (Challenge 🔥)

👉 Form validation:

Empty fields check
Show error message

🎤 7. Interview Questions
🔹 Basic

👉 Q1: Controlled component na enna?
👉 A: React state control pannum input

👉 Q2: onChange use enna?
👉 A: Input value update panna

👉 Q3: preventDefault enna?
👉 A: Page reload stop pannum

🔹 Medium

👉 Q4: Multiple inputs handle epdi?
👉 A: One state + name attribute

👉 Q5: value prop use enna?
👉 A: State connect panna

🔹 Advanced

👉 Q6: Controlled vs Uncontrolled difference?
👉 Q7: Form performance improve epdi?

✅ Day 6 Result

After this:

Student forms build pannuvanga 💪
Login/signup ready 🔥
Real-world React start 💥