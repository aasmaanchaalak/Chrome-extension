let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const delBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
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

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({"active": true, "currentWindow": true}, function(tabs){
        myLeads.push(tabs[0].url);
        renderLeads();
    })
})

delBtn.addEventListener("dblclick", function(){
    myLeads = [];
    localStorage.clear()
    renderLeads();
})

function renderLeads(){
    let listItems = "";
    for (let i=0; i<myLeads.length; i++){
        listItems += `<li><a href='https://${myLeads[i]}' target='_blank'>${myLeads[i]}</a></li>`;
    }
    ulEl.innerHTML = listItems;
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
}