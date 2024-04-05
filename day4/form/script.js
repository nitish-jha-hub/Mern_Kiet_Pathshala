// let fun1 = (e) => {
//     console.log(e.target.value);
//     if(e.target.value.length < 5){
//         e.target.style.border = "2px solid red";
//     }
//     else{
//         e.target.style.border = "2px solid green";
//     }
// }

// let submitForm = (e) => {
//     e.preventDefault();
//     let form = document.forms[0];
//     let data = new FormData(form);
//     let obj = {};
//     for(let [key, value] of data.entries()){
//         obj[key] = value;
//     }
//     console.log(obj);
// }

const submitForm = (e) => {
    e.preventDefault();
    const t = e.target;
    const res = {
        hobbies: [],
    };
    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;
        const vl = t[i].value;
        const nm = t[i].name;

        // console.log(ty, vl, nm);
        if (ty == "checkbox" && t[i].checked) {
            // res[nm] = vl;
            res.hobbies.push(vl);
        }
    }
    console.log(res);
}

// for(let i = 0; i < t.length; i++){
//     if(t[i].type == "text"){
//         console.log(t[i].value);
//     }
//     if(t[i].type == "radio" && t[i].checked){
//         console.log(t[i].value);
//     }
//     if(t[i].type == "checkbox" && t[i].checked){
//         console.log(t[i].value);
//     }
// }