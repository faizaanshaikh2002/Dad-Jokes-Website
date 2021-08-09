console.log("hi");

let myBtn = document.getElementById("myBtn");
myBtn.addEventListener('click',getJoke)
let jokes = document.getElementById("jokes");
// myBtn.addEventListener(getjoke)
getJoke()
function getJoke(){
    // url = "faizaan.txt"
    let args = {
        headers:{Accept: "application/json"}
    }
    fetch('https://icanhazdadjoke.com/',args).then((response)=>{
        // console.log(response.text());
        return response.json()
    }).then((data)=>{
        jokes.innerHTML = data.joke
    });
}
