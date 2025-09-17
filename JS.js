//  import {countryList} from "./codes.js"
const btn=document.querySelector("form button");
const BASE_URL =
  "https://2024-03-06.currency-api.pages.dev/v1/currencies";
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");
const amt=document.querySelector(".amt-box input");
const dropdowns=document.querySelectorAll(".drop-down select");


for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        

    

if(select.name==="from"&& currCode==="USD"){
    newOption.selected="selected";
}else if(select.name==="to"&& currCode==="INR"){
    newOption.selected="selected";
}
    
select.append(newOption);}
select.addEventListener("change",(evt)=>
{
    updateFlag(evt.target);
});}

const updateFlag=(element)=>{
    let countryCode=countryList[element.value];
    
    
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.parentElement.querySelector("img");
    img.src=newSrc;

}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    console.log("Btn clicked");
getExchange();

});
const getExchange=async()=>{
    // const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data=await response.json();
    let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalRate=rate*amt.value;
    msg.innerText=`${amt.value} ${fromCurr.value} = ${finalRate} ${toCurr.value}`;

    

};
window.addEventListener("load",()=>{
    getExchange();
}
);

