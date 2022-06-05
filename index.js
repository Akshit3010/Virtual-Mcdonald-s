const order = document.querySelector("#form");
const menu =document.querySelector("#food");
const items = document.querySelector(".items");


order.addEventListener("submit",initiate_order);


async function initiate_order(e){
    e.preventDefault();
    let fries = document.querySelector("#fries").checked;
    let burger = document.querySelector("#burger").checked;
    let nuggets = document.querySelector("#nuggets").checked;
    let coffee = document.querySelector("#coffee").checked;
    let coke = document.querySelector("#coke").checked;
    let sandwich = document.querySelector("#sandwich").checked;
    let cake = document.querySelector("#cake").checked;
    let oat = document.querySelector("#oat").checked;
   


        let checked_value = document.querySelectorAll(".check");
        let checked_array=[];
        for(let i=0;i<checked_value.length;i++){
            if(checked_value[i].checked){
                checked_array.push(checked_value[i].value);
            }
         }

         let status="open";
         
        let order_id = Math.floor(Math.random()*1000);
        
        let food_promise = new Promise(function(resolve,reject){
            let time =Math.floor(Math.random() * 6000) +3000;
            
    
            if(status==="close"){
                reject("We are not taking orders right now!");
            }else{
                setTimeout(function(){
                    resolve(checked_array);
                },time);
            }
        });
    
      try{
        let res = await food_promise;
        res.map(function(elem){
            switch(elem){
                case "fries":
                    let div = document.createElement("div");

                    let img = document.createElement("img");
                    img.src="https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800";
               
                    div.append(img);
                    items.append(div);
                    break;
                case "burger":
                    let div2 = document.createElement("div");

                    let img2 = document.createElement("img");
                    img2.src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
                   

                    div2.append(img2);
                    items.append(div2);
                    break;
                case "nuggets":
                    let div3 = document.createElement("div");

                    let img3 = document.createElement("img");
                    img3.src="https://bakeitwithlove.com/wp-content/uploads/2021/05/Air-Fryer-Chicken-Nuggets-sq.jpg";
                    

                    div3.append(img3);
                    items.append(div3);
                    break;
                case "coffee":
                    let div4 = document.createElement("div");

                    let img4 = document.createElement("img");
                    img4.src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg";
                    

                    div4.append(img4);
                    items.append(div4);
                    break;
                case "coke":
                    let div5 = document.createElement("div");

                    let img5 = document.createElement("img");
                    img5.src="https://www.rd.com/wp-content/uploads/2020/10/mcdonalds-coke-collage.jpg";
                    

                    div5.append(img5);
                    items.append(div5);
                    break;
                case "sandwich":
                    let div6 = document.createElement("div");

                    let img6 = document.createElement("img");
                    img6.src="https://media.istockphoto.com/photos/turkey-sandwich-with-tomato-and-lettuce-picture-id1256670482?k=20&m=1256670482&s=612x612&w=0&h=WF0PjDr4iFdVI6IjKQjvvJipZrLYWIwHiRRDlbEwsQs=";
                    

                    div6.append(img6);
                    items.append(div6);
                    break;
                case "cake":
                    let div7 = document.createElement("div");

                    let img7 = document.createElement("img");
                    img7.src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-211109-mcdonalds-hot-cakes-005-ab-web-1636758468.jpg";
                    

                    div7.append(img7);
                    items.append(div7);
                    break;
                case "oat":
                    let div8 = document.createElement("div");

                    let img8 = document.createElement("img");
                    img8.src="https://i.pinimg.com/originals/b7/a9/5c/b7a95cfc2ac949b4a12feb36f03cec35.jpg";
                  

                    div8.append(img8);
                    items.append(div8);
                    break;
            }
        });
      }
        catch(error){
        console.log(error);
        }

}

