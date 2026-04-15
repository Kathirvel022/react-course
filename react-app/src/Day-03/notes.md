📅 Day 3 – Props 

👉 Props = Data passing system

Parent → Child ku data anuppuvom
Props = arguments (function madhiri)

👉 Simple ah:
👉 “Component ku values kudukura vazhi”

🔥 2. Why Props?

Without props ❌
👉 Same UI only

With props ✅
👉 Dynamic UI 💥

⚡ 3. Basic Syntax
Step 1: Parent Component
function App() {
  return (
    <div>
      <Profile name="Kathir" age={21} />
      <Profile name="Sri" age={23}/>
    </div>
  );
}
Step 2: Child Component
function Profile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}

👉 🎯 Output:

Kathir
21
💡 4. Destructuring (Important 🔥)

👉 Cleaner method:

function Profile({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}

👉 Explain:
➡️ props.name → name
➡️ props.age → age

🔥 5. Props Types

✅ String
name="Kathir"

✅ Number
age={21}

✅ Boolean
isLoggedIn={true}

✅ Array
items={["apple", "banana"]}

✅ Object
user={{name: "Kathir", age: 21}}

⚠️ 6. Important Rules

✔️ Props are Read-Only
❌ Modify panna koodathu

props.name = "New"; ❌

🔁 7. Reusable Example (Real Power 💥)
<Product name="Phone" price={10000} />
<Product name="Laptop" price={50000} />
<Product name="Watch" price={2000} />

👉 Same component → different data 🔥

🧠 8. Props vs State (Short Intro)

Props	State
Parent → Child	Inside component
Read-only	Change panna mudiyum

👉 (Full detail Day 6 la sollunga)

📝 9. Student Tasks (Practice)

🎯 Task 1:

👉 Create User component
Pass:

name
email
🎯 Task 2:

👉 Create Product component
Pass:

product name
price
🎯 Task 3:

👉 Pass object:

const user = {
  name: "Kathir",
  age: 21
};

🎯 Task 4 (Challenge 🔥)

👉 Create Card:

Image
Name
Price

👉 Use props for all data

🎤 11. Interview Questions
🔹 Basic

👉 Q1: Props na enna?
👉 A: Parent → Child data pass panna use pannuvom

👉 Q2: Props editable ah?
👉 A: Illa (read-only)

👉 Q3: Props epdi pass pannuvom?
👉 A: Attributes madhiri

🔹 Medium

👉 Q4: Props vs State difference?
👉 A:

Props → external
State → internal

👉 Q5: Destructuring enna?
👉 Direct ah values use pannuvom

👉 Q6: Multiple props pass panna mudiyuma?
👉 A: Mudiyum

🔹 Advanced

👉 Q7: Props flow direction?
👉 One-way (Parent → Child)

👉 Q8: Props immutable na enna meaning?
👉 Change panna mudiyathu

✅ Day 3 Result

After this:

Student dynamic UI build pannuvanga 💪
Props strong understanding 🔥
Real projects ku ready