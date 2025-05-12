const eventCard = document.querySelectorAll("[data-event]")

for (let i = 0; i < eventCard.length; i++) {
    const element = eventCard[i];
    element.addEventListener("click", () => {
        window.location.href='./html/paid-reg.html'
    })
}

