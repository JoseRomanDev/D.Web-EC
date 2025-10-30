import {Price} from "./classes/price";
import { Review } from "./classes/review";
import { Product } from "./classes/product";

let price = new Price("USD", 399.0);
let review = new Review(4.6, 73);
let product = new Product(
    "New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
    "https://www.amazon.com/dp/B087623TMW",
    "https://m.media-amazon.com/images/I/810DvHOZ9nL._AC_UL320_.jpg",
)
product.score = 335.8;
product.price = price;
product.review = review;

const MAIN = document.getElementsByClassName("Container");
const UL = document.createElement("ul");
let keysP = Object.keys(product)
let ValP = Object.values(product)

keysP.forEach((Item, index) => {
    if (Item === "Review"){
        CreateReviewItem(ValP[index],UL);
    } else {
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.textContent = 
            Item === "price"
            ? `${Item} = ${ValP[index].currentPrice} ${valP[index].currency}`
            : `${Item} = ${ValP[index]}`
        li.appendChild(p);
        UL.appendChild(li);
    }});
    MAIN.appendChild(UL);

