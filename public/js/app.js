

var person ={
    name:'RAO DANIYAL',
    description:'Software Engineer | raodaniyal1995@yahoo.com',
    bio:'"Former Software Engineer/Developer with Good photography Skills"',
    introduction:"My name is Rao Daniyal and I am a Web Application Developer and Software Developer, currently living in Karachi, Pk. I have a Bachelor of Science in Software Engineer(Final year) from ILMA University, and my primary focus and inspiration for my studies is Web/App Development. In my free time, I use Social networking and do Street/Nature Photography. I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques like React native. I am very passionate about Web App Development, and strive to better myself as a developer, and the development community as a whole.",
    bachelor:"<strong>Bachelor of Software Engineering</strong><br/> ILMA University <br/><i>4 Years Degree</i>",
    intermediate:"<strong>Intermediate</strong><br/> Board of Intermediate Education, karachi <br/>",
    matric:"<strong>Matriculation</strong><br/> Board of Secondary Education, karachi <br/>",
    frontend:"I work with Design in Campanies and agencies around the globe, building a strong Front-end for fast inclusive web interfaces and experiences, with a strong focus on responsive Design, accessibility & performance.",
    quizapp:"Quiz Taking Application based on JavaScript, HTML and CSS.<br/><sm><i class='icon-tag'></i>Web Application</sm>",
    todoapp:"Todo Web Application based on Firebase Realtime database. Develop by using JavaScript, html/css and bootstrap.<br/><sm><i class='icon-tag'></i>Web Application</sm>",
    signup:"Sign up and login form develop by using javaScript. Just design simple UI in html and CSS<br/><sm><i class='icon-tag'></i> Web Application</sm>"
};
var images = {
    img1: "img/port01.jpg",
    img2:"img/port02.jpg",
    img3:"img/port03.jpg"
};

var links = {
    quiz:"https://quizapp-83aa3.firebaseapp.com/",
    todo:"https://todo-8d72f.firebaseapp.com/",
    signup:"https://signup-ce782.firebaseapp.com/",
    facebook:"https://facebook.com/rao.daniyal.39",
    twitter:"https://twitter.com/n0tyourbhai",
    linkedin:"https://www.linkedin.com/in/rao-daniyal-6558b5104/",
    github:"https://github.com/iam-raodani",
    Firebase:"www.rao-daniyal.firebaseapp.com"
};

// for innerHTML change
function rendorData(id, value) {
    document.getElementById(id).innerHTML = value
};

// for img src change
function rendorImg(id, value) {
    document.getElementById(id).src = value
};

// for href change
function rendorHref(id, value) {
    document.getElementById(id).href = value
};

// rendoring data 
rendorData("name", person.name);
rendorData("description", person.description);
rendorData("bio", person.bio);
rendorData("introduction", person.introduction);
rendorData("bachelor", person.bachelor);
rendorData("intermediate", person.intermediate);
rendorData("matric", person.matric);
rendorData("frontend", person.frontend);
rendorData("quizapp", person.quizapp);
rendorData("todoapp", person.todoapp);
rendorData("signup", person.signup);

// image rendoring
rendorImg("img1",images.img1);
rendorImg("img2",images.img2);
rendorImg("img3",images.img3);

// rendoring href values
rendorHref('link1', links.quiz);
rendorHref('link2', links.todo);
rendorHref('link3', links.signup);
rendorHref('facebook', links.facebook);
rendorHref('twitter', links.twitter);
rendorHref('github', links.github);
rendorHref('linkedin', links.linkedin);
rendorHref('firebase', links.Firebase);


