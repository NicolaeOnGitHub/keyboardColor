// let vibilityOnKeyboard ;
// vibilityOnKeyboard.addEventListener("keydown", (e) => {
// //     const a =  document.querySelector(".row-three.red")
// // e.key === a;
//     console.log(e.keyCode)
//   })
const input = document.querySelector("body");
const begin =  document.querySelector("button")
input.appendChild(begin);
console.log(document.querySelector("#zero"))
begin.addEventListener("keydown", (event) => {
    if (event.key == "0") { document.querySelector("#zero").animate(getByAnimate())
        console.log(document.querySelector("#zero"))}

    else if (event.key == "1") {document.body.append()}
    else if (event.key == "2") {document.body.append("2")}
    else if (event.key == "3") {document.body.append("3")}
    else if (event.key == "4") {document.body.append("4")}
    else if (event.key == "5") {document.body.append("5")}
    else if (event.key == "6") {document.body.append("6")}
    else if(event.key == "7") {document.body.append("7")}
    else if(event.key == "8") {document.body.append("8")}
    else if(event.key == "9") {document.body.append("9")}
    else if(event.key == "+") {document.body.append("+")}
    else if(event.key == "-") {document.body.append("-")}
    else if(event.key == "*") {document.body.append("*")}
    else if(event.key == "/") {document.body.append("/")}
});
const getByAnimate = () => {
    let animatie;
    animatie.animate(
        {transform: "scale(1.1)"},
        {
            duration:500
        }
    )

}