function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // تحقق من صحة بيانات الدخول
    if (email === "youssef@gmail.com" && password === "123456") {
        window.location.href = "logincollege.html"; // الانتقال إلى صفحة logo.html
    } else {
        document.getElementById('error').innerText = "Invalid email or password!";
    }
}