let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
})

function renderLeads(){
    for (let i=0; i<myLeads.length; i++){
        ulEl.innerHTML += `<li><a href='https://${myLeads[i]}' target='_blank'>${myLeads[i]}</a></li>`;
    }
}