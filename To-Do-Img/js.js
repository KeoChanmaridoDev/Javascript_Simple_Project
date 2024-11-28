const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask(){
    if (inputBox.value ===''){
        alert("You must input some text")
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = '\u00d7'
        li.appendChild(span);
    }

 inputBox.value = '';
}

listContainer.addEventListener ("click", function (e){
    // if (e.target.tagname === "LI"){
    //     e.target.classList.toggle("check");
    // }
    // else if (e.target.tagname === "SPAN"){
    //     e.target.parentElement.remove();
    // }
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    

},false);