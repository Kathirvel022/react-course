📅 Day 2 – Components 

👉 Component = Reusable UI block

UI ah small small pieces ah break pannuvom

Reuse panna mudiyum

👉 Example:

Header
Footer
Card
Button

👉 Real life:

Lego blocks 🧩 → join pannina full app

🔥 2. Types of Components

✅ Functional Component (Important 🔥)

function Header() {
  return <h1>This is Header</h1>;
}

👉 Modern React la ithu than use pannuvom

⚡ 3. Basic Syntax
Step 1: Create Component
function Header() {
  return <h1>Welcome</h1>;
}
Step 2: Use Component
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

🧩 5. Reusable Component Example (Important)
function Card() {
  return (
    <div>
      <h2>Product Name</h2>
      <p>Price: ₹100</p>
    </div>
  );
}

👉 Use multiple times:

<Card />
<Card />
<Card />

🧠 6. Naming Rules

✔️ Must start with Capital letter

function Header() {}

❌ Wrong:

function header() {}

⚠️ 7. Common Mistakes

❌ Forgetting return
❌ Small letter component name
❌ Not exporting component
❌ Wrong import path

📝 8. Student Task (Practice)

🎯 Task 1:

👉 Create components:

Header
Footer
Main

🎯 Task 2:

👉 Create Profile Component:

Name
Age
City

🎯 Task 3:

👉 Create Card Component (reuse 3 times)

Product Name
Price

🎯 Task 4 (Challenge 🔥)

👉 Create:

Navbar
Sidebar
Content

👉 Combine into one page

🎤 9. Interview Questions
🔹 Basic

👉 Q1: Component na enna?

👉 A: Reusable UI block in React

👉 Q2: React la evlo types components?

👉 A: Functional & Class

👉 Q3: Which is mostly used?

👉 A: Functional Component

👉 Q4: Component name epdi irukanum?

👉 A: Capital letter start

🔹 Medium

👉 Q5: Component reuse panna mudiyuma?

👉 A: Mudiyum, multiple times use pannalam

👉 Q6: Component use panna enna benefit?

Reusability
Clean code
Easy maintenance

👉 Q7: Export/import why?

👉 Component share panna

🔹 Advanced

👉 Q8: Component structure enna?

UI split into small parts

👉 Q9: Why component-based architecture?

Scalable
Maintainable

✅ Day 2 Result

After this:

Student understand components 💪
UI split panna theriyum
Reusable code write pannuvanga 🔥