const city=document.getElementById('city');
const btn=document.getElementById('search-button')
const citytemp=document.getElementById('city-temp');
const cityname=document.getElementById('city-name')
const feellike=document.getElementById('feel-like')
const weathercondition=document.getElementById('weather-condition')



async function getdata(city)
{  const promise= await fetch
    (
        `https://api.weatherapi.com/v1/current.json?key=e3b2c14eb89046b295f162337231410&q=${city}&aqi=yeshttps://api.weatherapi.com/v1/current.json?key=e3b2c14eb89046b295f162337231410&q=${location}&aqi=yes`
    )
    return promise.json()
};

document.addEventListener('keypress',async (key)=>{
    if(key.charCode===13)
    {
        const value=city.value;
        const result=await getdata(value);
        console.log(result)
        cityname.innerText=`${result.location.name},${result.location.region}-${result.location.country}`;
        citytemp.innerText= `${result.current.temp_c}`;
        feellike.innerText= `Feels Like: ${result.current.feelslike_c} °C`;
        weathercondition.innerText=`${result.current.condition.text}`
    }

})


btn.addEventListener('click',async ()=>{
    const value=city.value;
    const result=await getdata(value);
    console.log(result)
    cityname.innerText=`${result.location.name},${result.location.region}-${result.location.country}`;
    citytemp.innerText= `${result.current.temp_c}`;
    feellike.innerText= `Feels Like: ${result.current.feelslike_c} °C`;
    weathercondition.innerText=`${result.current.condition.text}`
})