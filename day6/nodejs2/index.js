const figlet = require("figlet");

figlet("Hello India!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     });
//     })
//     .catch((err) => {
//     console.log(err);
//     }
// );

const asyncFunction = async () => {
  try {
    console.log("Api callin ...");
    const response = await fetch("https://api.github.com/users/deepak3440");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
asyncFunction();