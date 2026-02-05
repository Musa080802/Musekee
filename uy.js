// const mainInput = document.getElementById("main-input")
// const mainheader = document.getElementById("header")
// const mainButton = document.getElementById("main-btn")
// const mainPara = document.getElementById("paragraphs")
// const mainRemove = document.getElementById("remove-cards") 
// mainheader.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const input = mainheader.querySelector("input").value
//     const newItem = document.createElement("p")
//     newItem.textContent = input
//     mainPara.append(newItem)
//     mainheader.reset()
// })
// mainRemove.addEventListener("click", (ee) => {
//     mainPara.remove()
    
// })

const mainInput = document.getElementById("main-input")
const mainheader = document.getElementById("header")
const mainButton = document.getElementById("main-btn")
const mainPara = document.getElementById("paragraphs")
const mainRemove = document.getElementById("remove-cards") 
mainheader.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = mainheader.querySelector("input").value
    const newItem = document.createElement("p")
    newItem.textContent = input
    mainPara.append(newItem)
    mainheader.reset()
})
mainRemove.addEventListener("click", (ee) => {
    mainPara.innerHTML = ""
    
})