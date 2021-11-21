let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads()
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
})

function renderLeads(){
    let listItems = "";
    for (let i=0; i<myLeads.length; i++){
        listItems += `<li><a href='https://${myLeads[i]}' target='_blank'>${myLeads[i]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
}