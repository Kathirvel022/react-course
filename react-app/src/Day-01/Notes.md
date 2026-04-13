JSX = JavaScript XML

JavaScript la HTML madhiri write panna use pannuvom
Browser puriyathu → React convert pannum (Babel use pannum)

2. JSX Rules (Important)

 1. Single Parent Element

❌ Wrong:

<h1>Hello</h1>
<p>Hi</p>

✅ Correct:

<div>
  <h1>Hello</h1>
  <p>Hi</p>
</div>

✅ 2. Use className (not class)

<div className="box">Hello</div>

✅ 3. Use {} for JavaScript

const name = "Kathir";
<h1>Hello {name}</h1>

✅ 4. Self Closing Tags

<img src="img.png" />
<input />

✅ 5. Inline CSS (object format)

<h1 style={{color: "red"}}>Hello</h1>
-------------------------------------------------------------

📝 5. Student Task (Practice)

🎯 Task 1:

👉 Create variables:

name
college
marks

👉 Display:

My name is ___
I study at ___
My marks are ___

🎯 Task 2:

👉 Show current date & time

{new Date().toLocaleString()}

🎯 Task 3:

👉 Create simple UI:

Heading
Image
Paragraph

🎯 Task 4 (Challenge):

👉 Even / Odd checker:

const num = 10;

-----------------------------------------------

6. Interview Questions
🔹 Basic

 Q1: JSX na enna?

 A: JavaScript XML, React la HTML madhiri code ezhutha use pannuvom

 Q2: JSX browser ku puriyuma?

 A: Illa, Babel convert pannum JavaScript ah

 Q3: JSX la JS epdi use pannuvom?

 A: {} inside

 Q4: class ku badila enna use pannuvom?

 A: className

 Q5: JSX la multiple elements return panna mudiyuma?

 A: Mudiyum, but single parent venum

-- 🔹 Medium --

 Q6: JSX vs HTML difference?

JSX → JavaScript inside use panna mudiyum

HTML → static

 Q7: Inline CSS epdi poduvom?

style={{color: "red"}}

 Q8: JSX expression na enna?

 {} kulla use panna JS code

🔹 Advanced

 Q9: JSX behind the scenes enna nadakkum?

 React.createElement()

 Q10: JSX use panna advantage enna?

-Readable

- Easy UI creation

- Dynamic rendering


✅ Day 1 Result

After this:

- Student JSX strong 💪
- Dynamic UI create panna theriyum
- Interview basic ready 🔥