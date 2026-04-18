📅 Day 5 – useState

🧠 1. Concept

👉 State = Component oda data (change aagum data)

UI change aaganumna → state change aaganum
State change → React auto re-render 💥

👉 Simple:
➡️ “Data change → UI change”

🔥 2. Why useState?

Without state ❌
👉 Static UI

With state ✅
👉 Dynamic UI

⚡ 3. Syntax (Very Important)
import { useState } from "react";

const [state, setState] = useState(initialValue);

👉 Breakdown:

state → current value
setState → update panna function
initialValue → starting value

👉 Explain:

➡️ Click → count update → UI auto change

🧠 5. Important Concepts

✅ 1. State update async

👉 Immediately update aagathu (React handle pannum)

✅ 2. Never modify directly ❌
count = count + 1 ❌

👉 Correct:

setCount(count + 1) ✅

✅ 3. Re-render concept

👉 State change → component re-render

🔥 6. Multiple State

const [name, setName] = useState("");
const [age, setAge] = useState(0);

⚠️ 7. Common Mistakes

❌ Direct update
❌ Forget import
❌ Wrong naming
❌ Infinite re-render

📝 8. Student Tasks (Practice)

🎯 Task 1:

👉 Counter:

+1
-1

🎯 Task 2:

👉 Input → show text

🎯 Task 3:

👉 Toggle:

Login / Logout

🎯 Task 4:

👉 Like Button ❤️

Click → increase count

🎯 Task 5 (Challenge 🔥)

👉 Simple Calculator:

Add 2 numbers
Show result

🎤 9. Interview Questions

🔹 Basic

👉 Q1: useState na enna?
👉 A: React hook → state manage panna

👉 Q2: useState syntax?
👉 A: [state, setState] = useState(value)

👉 Q3: State change panna enna use pannuvom?
👉 A: setState function

🔹 Medium

👉 Q4: State change na enna nadakkum?
👉 A: Re-render

👉 Q5: Direct state modify panna mudiyuma?
👉 A: Mudiyathu

👉 Q6: Multiple state use pannalama?
👉 A: Yes

🔹 Advanced

👉 Q7: Why async update?
👉 A: Performance optimization

👉 Q8: Functional update enna?

setCount(prev => prev + 1)

✅ Day 5 Result

After this:

Student dynamic apps build panna start 💪
State concept strong 🔥
Real React understanding start 💥