let alertWindow = document.getElementById("divAlert");
let alertImage = document.getElementById("forImage");
let alertH3 = document.getElementById("h3");
let alertP = document.getElementById("p");

function onclickButtons1() {
    alertWindow.style.display="block";
    alertImage.src="images/main_image2.jpeg";
    alertH3.innerHTML = "Live online classes";
    alertP.innerHTML = "Learn English with a global community of expert British Council teachers in live, online, interactive classes." + 
    "<br><br>Choose your own timetable. Study in small-group classes or choose one-to-one private lessons. Receive British Council certificates when completing each theme." +
    "<br><br>Proven, quality teaching that delivers real results.";
}
function onclickButtons2() {
    alertWindow.style.display="block";
    alertImage.src = "images/main_image3.jpeg";
    alertH3.innerHTML = "Self-study online courses";
    alertP.innerHTML = "Our English Online self-study course costs just $5.99 per month and gives you the low-cost way to reach your goals in English." +
    "<br><br>You can improve your English language level and your professional communication skills, and learn how to express yourself with confidence to boost your career." +
    "<br><br>It's the perfect choice if you want to learn English in your own time, at your own pace.";
}
function onclickButtons3() {
    alertWindow.style.display="block";
    alertImage.src = "images/main_image1.jpg";
    alertH3.innerHTML = "Personal online tutoring";
    alertP.innerHTML = "Learn English with the help of one of our professional English tutors. Book private online sessions with a tutor of your choice and focus on the areas important to you." +
    "Work together on a learning plan based on your level to help you reach your goal. Sessions are fun, friendly and designed to get you speaking confidently.";
}
function onclickButtons4() {
    alertWindow.style.display="block";
    alertImage.src = "images/main_image4.jpg";
    alertH3.innerHTML = "IELTS online courses";
    alertP.innerHTML = "IELTS (International English Language Testing System) is the world's most popular English language test for higher education and global migration.";
}
function cancelWindow() {
    alertWindow.style.display = "none";
}
function windowToTop() {
    window.scroll(0, 0);
}