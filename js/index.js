const btn = document.getElementById("btn");
const movieContainer = document.getElementById("movieContainer");
const paragraph = document.querySelector("#movieContainer p");
const h2 = document.querySelector("#movieContainer h2");
const img = document.querySelector("#movieContainer img ");

import { BASE_URL, API_KEY, IMG_URL, language } from "./api.js";

btn.addEventListener("click", async () => {
    let data = await getData();

    const number = generateNumber(data.results.length);

    movieContainer.classList.remove("hide");
    movieContainer.classList.add("movie");

    console.log(data.results[number]);

    h2.textContent = data.results[number].original_title;
    paragraph.textContent = data.results[number].overview;
    img.setAttribute("src", `${IMG_URL}/${data.results[number].backdrop_path}`);
});

function generateNumber(length) {
    const number = Math.floor(Math.random() * length);

    return number;
}

async function getData() {
    let data;
    await axios
        .get(`${BASE_URL}?api_key=${API_KEY}&${language}`)
        .then((res) => {
            data = res.data;
            console.log(data);
        });

    return data;
}
