let allSection = document.querySelector(".tab-col")
let allList = allSection.querySelector("ul");
let btn=allList.querySelectorAll("a");
let tabPages = allSection.querySelectorAll(".tab-pages > div");

btn.forEach((tab, index) =>{

if(index === 0){

 
}else{
 tabPages[index].setAttribute("hidden"," ");
 
}
});

 allSection.addEventListener("click", (e)=>{
 let clickedTab =e.target.closest("a");
 if(!clickedTab)return
  //console.log(clickedTab);
  e.preventDefault();

  let activeTabId= clickedTab.getAttribute("href");
  //console.log(activeTab);

  let activeTab = allSection.querySelectorAll(activeTabId);
  //console.log(activeTab);

  tabPages.forEach((panels)=>{
    panels.setAttribute("hidden","true");

  });
  for (let i = 0; i < activeTab.length; i++) {
    //const element = array[i];
    allSection.querySelectorAll(activeTabId)[i].removeAttribute("hidden");
  }
  
 });
