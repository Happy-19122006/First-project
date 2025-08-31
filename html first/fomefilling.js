<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Filling</title>
    <link rel="stylesheet" href="fomefilling.css">
    
</head>
<body>
    <h3>Form Filling for the Joining</h3>
    <h5>Personal Info</h5>

    <form id="joinForm" method="post">
        <label>Name:</label>
        <input type="text" id="name" placeholder="Enter your name" required><br><br>

        <label>Hobby:</label>
        <input type="text" id="hobby" placeholder="Enter your hobby" required><br><br>

        <label>Age:</label>
        <input type="number" id="age" placeholder="Enter your age" required><br><br>

        <label>Password:</label>
        <input type="password" id="password" placeholder="Enter your password" required><br><br>

        <label>Date of Birth:</label>
        <input type="date" id="dob" required><br><br>

        <label>Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required><br><br>

        <h4>Qualification</h4>
        <label>Degree:</label>
        <input type="text" id="degree" placeholder="Enter your degree" required><br><br>

        <label>College:</label>   
        <input type="text" id="college" placeholder="Enter your college name" required><br><br>

        <label>Year of Passing:</label>
        <input type="number" id="year" placeholder="Enter your year of passing" required><br><br>

        <label>Branch:</label>
        <input type="text" id="branch" placeholder="Enter your branch" required><br><br>

        <h4>What is your gender?</h4>
        <input type="radio" name="gender" value="Male" required> Male<br>
        <input type="radio" name="gender" value="Female" required> Female<br>
        <input type="radio" name="gender" value="Other" required> Other<br><br>

        <h4>Which languages do you know?</h4>
        <input type="checkbox" value="HTML"> HTML<br>
        <input type="checkbox" value="CSS"> CSS<br>
        <input type="checkbox" value="JavaScript"> JavaScript<br>
        <input type="checkbox" value="Python"> Python<br>
        <input type="checkbox" value="Java"> Java<br><br>

        <input type="submit" value="Submit">
    </form>

    <script>
        document.getElementById("joinForm").addEventListener("submit", function(e) {
            e.preventDefault(); // form reload होने से रोकेगा

            let name = document.getElementById("name").value.trim();
            let hobby = document.getElementById("hobby").value.trim();
            let age = document.getElementById("age").value.trim();
            let password = document.getElementById("password").value;
            let dob = document.getElementById("dob").value;
            let email = document.getElementById("email").value.trim();
            let degree = document.getElementById("degree").value.trim();
            let college = document.getElementById("college").value.trim();
            let year = document.getElementById("year").value.trim();
            let branch = document.getElementById("branch").value.trim();
            let gender = document.querySelector('input[name="gender"]:checked');
            let languages = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(el => el.value);

            // Name check
            if (name.length < 3) {
                alert("Name must be at least 3 characters long.");
                return;
            }

            // Age check
            if (age < 18 || age > 60) {
                alert("Age must be between 18 and 60.");
                return;
            }

            // Password check
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            // Email format check
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Enter a valid email address.");
                return;
            }

            // Gender check
            if (!gender) {
                alert("Please select your gender.");
                return;
            }

            // At least one language
            if (languages.length === 0) {
                alert("Please select at least one language.");
                return;
            }

            // सब सही है तो
            alert(
                `✅ Form Submitted Successfully!\n\nName: ${name}\nHobby: ${hobby}\nAge: ${age}\nDOB: ${dob}\nEmail: ${email}\nDegree: ${degree}\nCollege: ${college}\nYear: ${year}\nBranch: ${branch}\nGender: ${gender.value}\nLanguages: ${languages.join(", ")}`
            );

            // Form reset
            this.reset();
        });
    </script>
</body>
</html>
