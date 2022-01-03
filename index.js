
function getAlldish(){

    for(let i=0;i<30;i++){
        getdish()
    }
}

let url="https://www.themealdb.com/api/json/v1/1/random.php"
async function getdish(){

    try{
        let data=await fetch(url)
         let res= await data.json()
        

         appendmeal(res)
        
   }
   catch(e){
       console.log("error",e)
   }
}
let a=document.getElementById("dish")


function appendmeal(m){



    let img=document.createElement('img')
  
    let imgsrc=m.meals[0].strMealThumb
    img.src=imgsrc
    let n=document.createElement("h2")

   
    let names=m.meals[0].strMeal
    n.innerText=names
let p=document.createElement("h2")



let prices="Price: "+Math.round(Math.random()*(500-100)+100)
p.innerText= prices
let btn =document.createElement("button")
btn.innerText="Add to cart"

btn.addEventListener("onclick",function(){
    cartadd(imgsrc,names,prices)})


let div=document.createElement("div")
div.append(img,n,p,btn)
a.append(div)
}



let cart=[]||JSON.parse(localStorage.getItem("cart"))
function cartadd(imgsrc,names,prices){
let obj={
    img:imgsrc,
    name:names,
    price:prices,

}
console.log(obj,cart)
cart.push(obj)

localStorage.setItem("cart",JSON.stringify(cart))
}