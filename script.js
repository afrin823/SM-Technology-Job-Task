// hamburger 
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const icon = hamburger.querySelector("i");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");

});

// calender
const monthYear = document.getElementById("monthYear")
const datesContainer = document.getElementById("dates")

const prev = document.getElementById("prev")
const next = document.getElementById("next")

let date = new Date()
let today = new Date().getDate()

function renderCalendar() {

    const year = date.getFullYear()
    const month = date.getMonth()

    const firstDay = new Date(year, month, 1).getDay()
    const lastDate = new Date(year, month + 1, 0).getDate()

    datesContainer.innerHTML = ""

    monthYear.innerText =
        date.toLocaleString("default", { month: "long" }) + " " + year

    for (let i = 1; i < firstDay; i++) {
        const blank = document.createElement("div")
        datesContainer.appendChild(blank)
    }

    for (let i = 1; i <= lastDate; i++) {

        const day = document.createElement("div")

        day.innerText = i

        // DEFAULT ACTIVE DATE
        if (i === today) {
            day.classList.add("active")
        }

        day.onclick = () => {
            document.querySelectorAll(".dates div")
                .forEach(d => d.classList.remove("active"))

            day.classList.add("active")
        }

        datesContainer.appendChild(day)

    }

}

prev.onclick = () => {
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
}

next.onclick = () => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar()
}

renderCalendar()