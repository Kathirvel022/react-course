📅 Day 11 – React Router (Full Class Plan)

🧠 1. Concept

👉 React normally = Single Page Application (SPA)

👉 But user ku:

Home page
About page
Contact page

madhiri different pages venum.

👉 React Router:

➡️ Page reload illaama navigation pannum 💥

💡 Real Examples
YouTube
Instagram
Amazon

👉 Click pannumbodhu full reload aagathu.

🔥 2. Install React Router

Terminal:

npm install react-router-dom

👉 Explain:

➡️ External package install pannrom

⚡ 3. Basic Setup

📄 main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

👉 Explain:
➡️ Whole app ku routing enable pannrom

💻 4. Your Demo (Live Coding)
🎯 Step 1: Create Pages
Home.jsx
function Home() {
  return <h1>Home Page</h1>;
}

export default Home;
About.jsx
function About() {
  return <h1>About Page</h1>;
}

export default About;
Contact.jsx
function Contact() {
  return <h1>Contact Page</h1>;
}

export default Contact;
🎯 Step 2: Setup Routes
App.jsx
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}

export default App;

👉 Explain:

Routes → container
Route → single route
path
element
🔗 5. Navigation using Link

❌ Wrong:

<a href="/about">About</a>

👉 Page reload aagum

✅ Correct:

import { Link } from "react-router-dom";

<Link to="/about">About</Link>
🎯 Full Navigation Demo
import { Link, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}
🧠 6. Important Concepts

✅ 1. SPA (Single Page Application)

👉 Full page reload illa

✅ 2. BrowserRouter

👉 Routing enable pannum

✅ 3. Route

👉 URL → component connect pannum

✅ 4. Link

👉 Navigation without reload

⚠️ 7. Common Mistakes

❌ Forget BrowserRouter
❌ Wrong path
❌ Using href instead of Link
❌ Wrong import

🔥 8. Nested Routing (Intro Only)
<Route path="/dashboard" element={<Dashboard />} />

👉 Full detail later teach pannunga

📝 9. Student Tasks (Practice)

🎯 Task 1:

👉 Create:

Home
About

🎯 Task 2:

👉 Add navigation using Link

🎯 Task 3:

👉 Create Contact page

🎯 Task 4:

👉 Navbar create pannunga

🎯 Task 5 (Challenge 🔥)

👉 Mini Website:

Home
Services
Contact
Navbar

🎤 10. Interview Questions
🔹 Basic

👉 Q1: React Router na enna?
👉 A: Navigation handle panna library

👉 Q2: SPA na enna?
👉 A: Single Page Application

👉 Q3: Route use enna?
👉 A: URL → component mapping

🔹 Medium

👉 Q4: Link vs anchor tag difference?
👉 A:

Link → no reload
anchor → reload

👉 Q5: BrowserRouter use enna?
👉 A: Routing enable panna

🔹 Advanced

👉 Q6: Nested routing na enna?
👉 Q7: Dynamic routes na enna?

(Next classes la detail sollunga)


✅ Day 11 Result

After this:

Student multi-page apps build pannuvanga 💪
Navigation strong aagum 🔥
Real website structure understand pannuvanga 💥