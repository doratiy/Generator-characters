const names_male = ["Иван","Валерий","Роман","Дмитрий"];
const names_female = ["Юлия","Ольга","Вика","Екатерина"];
const surnames_male = ["Жуликов","Кузьмин","Владыкин","Бусовиков"];
const surnames_female = ["Жуликова","Кузьмина","Владыкина","Бусовикова"];
const professions = ["Программист","Учитель","Врач","Инженер"];

const button = document.querySelector(".generate");
const result = document.querySelector(".result");
const gender = document.getElementById("gender_check");

button.addEventListener("click", () => {
    const isfemale = gender.checked;
    const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
    let age = Math.floor(Math.random() * (60-18) + 18);
    const character = {
        "Имя": isfemale ? random(names_female): random(names_male),
        "Фамилия": isfemale ? random(surnames_female): random(surnames_male),
        "Лет": age,
        "Профессия": random(professions)
    };
    const block = document.createElement("div");
    block.classList.add("character");
    isfemale ? block.classList.add("block_female"): block.classList.add("block_male");
    for (let key in character) {
        const p = document.createElement("p");
        p.textContent = `${key}: ${character[key]}`;
        block.appendChild(p);
    }
    result.appendChild(block);
});