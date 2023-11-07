const form = document.querySelector(".form1");
const search = document.getElementById("search-button");
const input_data = document.querySelector("input")
const search_images = document.querySelector(".head")
const image = document.querySelector("img")
const key = "-hVt6kPeHli92rKBY1kqEONQT6IDbLDM5f3MJoPxoPw"
let page = 1;

async function search_image(){
    let inputdata = input_data.value
    const url = `https://api.unsplash.com/search/photos/?page=${page}&query=${inputdata}&client_id=${key}`
    const data = await fetch(url)
    console.log(data)

    const new_data = await data.json()
    console.log(new_data);
     

    const head = await new_data.results;
    generate_cards(head)
    // console.log(head)
    

}

function generate_cards(head){
    if(page == 1){
        search_images.innerText = "";

    }



    head.map((index)=>{
        const image_wrapper = document.createElement("div")
        image_wrapper.classList.add = "head"
        const image = document.createElement("img")
        image.src = index.urls.small;
        const link = document.createElement("a")
        link.href = index.links.html;
        link.target = "blank";
        link.innerText = index.alt_description ;
        image_wrapper.append(image)
        image_wrapper.append(link)
        search_images.append(image_wrapper)
         
    })
}

  form.addEventListener("submit",(event)=>{
    console.log("hello")
    event.preventDefault();
    search_image();
  })



  

// api

//   async function fetch_api(){

//     let fetch_data = await fetch("https://fakestoreapi.com/products");
//     console.log(fetch_data);

//     let data =  await fetch_data.json();
//     console.log(data)
//     Show_data(data)
// }


// function Show_data(data){
// console.log(data);
// let str = ""
// for(let i=0; i<data.length; i++){

//     str = `  <div class=" col-4 card" style="width: 18rem;">
//                 <img src=${data[i].image} class="card-img-top" height="100px" width="100px" alt="...">
//                 <div class="card-body">
 
//                  <h5 class="card-title">${data[i].title}</h5>
//                   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                   <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//               </div>
    
//     `
//     document.getElementById("first").innerHTML += str 

//     console.log(data[i].title)
// }


// }
// fetch_api()