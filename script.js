/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

async function getUserData(url) {
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getUserDataFromUrl(url) {
  const data = await getUserData(url);
  document.getElementById("btn").addEventListener("click", () => {
    drawUserCard(data);
  });
}

function drawUserCard(data) {
  const output = document.getElementById("output");
  document.getElementById("message").style = "display: none;";
  data.forEach((dataItem) => {
    const userDiv = document.createElement("div");
    userDiv.setAttribute("class", "user-container");

    const userLogin = document.createElement("h2");
    userLogin.textContent = dataItem.login;

    const userImg = document.createElement("img");
    userImg.src = dataItem.avatar_url;

    userDiv.append(userLogin, userImg);
    output.append(userDiv);
  });
}

getUserDataFromUrl(ENDPOINT);
