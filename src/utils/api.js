import contries from "./countries.json";

export function getCountries(){
return contries;
}
  
const url= "https://v6.exchangerate-api.com/v6/fd5e43cfd65ef84f4c4c986f/pair/"
export async function getExhange(currency , target){
    console.log(url+currency+"/"+target);
  const res = await fetch(url+currency+"/"+target);
  const data = await res.json();
  return [data.conversion_rate , data.time_last_update_utc];
// return [4 , 25555]

}