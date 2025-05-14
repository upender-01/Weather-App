const API_KEY='379e0703c0b41a12734518b98e9bd02c';
let url="https://api.openweathermap.org/data/2.5/weather?q=";
window.addEventListener('load' , fetchweather('huzurnagar'));
let inputvalue=document.getElementById('inputvalue');
let searchbtn=document.getElementById('search-btn');

async function  fetchweather(query) {
    let res=await fetch(url+`${query}`+"&appid="+API_KEY);
    let data=await res.json();

    document.getElementById('temperature1').innerHTML=Math.round(data.main.temp)+'°K';
    document.getElementById('placename').innerHTML=data.name;
    document.getElementById('superscript1').innerHTML=data.wind.speed;
    document.getElementById('superscript2').innerHTML=data.main.humidity;
}
searchbtn.addEventListener("click", ()=>{
    fetchweather(inputvalue.value);
})


