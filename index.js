

// Buttons
// hint 
// When the button with id "display-name-button" is clicked, remove
// the "invisible" class from the alert with id "display-name"

// const displayNameButton = document.querySelector('#display-name-button');
// displayNameButton.addEventListener('click', () => {
// const displayName = document.querySelector('#display-name');
// displayName.classList.remove('invisible');
// });
function buttonFunction(){
    document.querySelector('#display-name').classList.remove('invisible');
}

// ------------------------------------------------------------------------
// Mouse Over
// hint 
// When the mouse hovers over the image with id "light-bulb", change
// the "src" attribute of the image to "images/light-bulb-on.png"
// When the mouse leaves, change the "src" attribute to "images/light-bulb-off.png"
mouseOver = () => {
    document.getElementById("light-bulb").src = "images/light-bulb-on.png";
}
mouseOut = () => {
    document.getElementById("light-bulb").src = "images/light-bulb-off.png";
}
document.getElementById("light-bulb").addEventListener("mouseover", mouseOver);
document.getElementById("light-bulb").addEventListener("mouseout", mouseOut);
// const lightBulb = document.querySelector('#light-bulb');

// lightBulb.addEventListener('mouseenter', () => {
//     lightBulb.src = 'images/light-bulb-on.png';
// });

// lightBulb.addEventListener('mouseleave', () => {
//     lightBulb.src = 'images/light-bulb-off.png';}
//     );

// ----------------------------------------------------------------------------------
// Toggle
// hint 
// Clicking the button with id "toggle-button" should toggle the visibility
// of the alert with id "toggle-alert" on and off.
// Why define aaa to false first? 先定义为假是为了不让执行需要做逻辑处理的代码，一般都是这样，
// 当判断条件成立时，执行逻辑代码，当然在if里面直接写ture也是可以的，
// 代码不会有错误，但是这样条件就始终成立了
// 因为我们期望的结果是真，但是可能出现假的，为了防止不必要异常和期望值放水，所以取了相反值[false],

let a = false;
// 这里eventlistener定义在button里的ID，我的理解是这里的button是一个单独的功能，不同于下个例子的form
const toggleButton = document.querySelector('#toggle-button');
const toggleAlert = document.querySelector('#toggle-alert');

toggleButton.addEventListener('click', () => {
    if (a) {
        a = false;
        toggleAlert.classList.add('invisible');
        toggleButton.innerHTML = 'On';
    } else {
        a = true;
        toggleAlert.classList.remove('invisible');
        toggleButton.innerHTML = 'Off';
    }
});
// let Togglecontent = false;
// const Togglecontent = document.querySelector('#toggle-alert')
// Togglecontent.addEventListener('click', () => {
//     if (Togglecontent = true) {
//         document.querySelector('#display-name').classList.remove('invisible');
//         }
//      else {}


// --------------------------------------------------------------------------
// Validate
// hint 
// When the form with id "form-validate" is submitted,
// - prevent the default event from firing
// - check the length of the input with id "form-validate-first-name"
// - if the length is greater than 2, add "is-valid" class to the input, remove the "is-invalid" class
// - if the length if less than 2, add "is-invalid" class to the input, remove the "is-valid" class
// Use bootstrap validation: https://getbootstrap.com/docs/4.5/components/forms/#server-side
// 这里的eventlistener的id定义在整个form（#form-validate)，在里面找submit
const formValidate = document.querySelector('#form-validate');
const formValidateFirstName = document.querySelector('#form-validate-first-name');

formValidate.addEventListener('submit', (event) => {
    // 首先event.preventDefault()是通知浏览器不要执行与事件关联的默认动作
    // 该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。
    // 例如，如果 type 属性是 "submit"，在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单。
    event.preventDefault();

    if (formValidateFirstName.value.length > 2) {
        // this classList is-valid in bootstrap?我想因该是吧，😥
        formValidateFirstName.classList.add('is-valid'); 
        formValidateFirstName.classList.remove('is-invalid');
    } else {
        formValidateFirstName.classList.add('is-invalid');
        formValidateFirstName.classList.remove('is-valid');
    }
});
// const buttonSubmit = document.querySelectorAll('.btn.btn-primary.btn-block');
// const formFirstName = document.querySelector('#form-validate-first-name');
// buttonSubmit.addEventListener('submit', (event) => {
// event.preventDefault();
// if (formFirstName.value.length > 2){
// formFirstName.classList.add('is-valid');
// formFirstName.classList.remove('is-invalid');}
// else {
// formFirstName.classList.add('is-invalid');
// formFirstName.classList.remove('is-valid');
// }

// });
// --------------------------------------------------------------------------------
// Challenge: Lists
// hint 
// When the form with the id "form-hobby" is submitted
// - prevent default events from firing
// - get the value from the input with the id "form-hobby-text"
// - use the vlaue to create a new li with the class "list-group-item"
// - add the li to the ul with the id "hobby-list"

// when event listen target must to be at the begining of form
// 这个案例，跟上面的例子一样

const formHobby = document.querySelector('#form-hobby');
const formHobbyText = document.querySelector('#form-hobby-text');
const hobbyList = document.querySelector('#hobby-list');

formHobby.addEventListener('submit', (event)  => {
event.preventDefault();
const newHobby = document.createElement('li');
newHobby.innerText = formHobbyText.value;
newHobby.classList.add('list-group-item');
hobbyList.appendChild(newHobby);
})

// const formHobby = document.querySelector('#form-hobby');
// const formHobbyText = document.querySelector('#form-hobby-text');
// const hobbyList = document.querySelector('#hobby-list');

// formHobby.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const newHobby = document.createElement('li');
//     newHobby.innerText = formHobbyText.value
//     newHobby.classList.add('list-group-item');
//     hobbyList.appendChild(newHobby);
// });


// Challenge: Lists (Part 2)
// hint 
// When the ul with the id "hobby-list-2" is clicked
// - check if the event target has the class "remove-hobby", if it does
//      - prevent the default event
//      - get the parent li of the target
//      - remove the parent li from the list with the id "hobby-list-2"

// here the eventlistener look for id (#hobby-list-2) in the unorder list group 
const hobbyList2 = document.querySelector('#hobby-list-2');

hobbyList2.addEventListener('click', (event) => {
// if ul 里面的 a tag 里面的 X with .remove-hobby detected then...
    if (event.target.classList.contains('remove-hobby')) {
        event.preventDefault();
        const parentLi = event.target.parentElement;
        hobbyList2.removeChild(parentLi);
    }
});
