import { Review } from "./review";
import { Price } from "./price";

export class Product{
nameProduct;
urlProduct;
urlImg;
score;
price;
review;


constructor(nameProduct, urlProduct, urlImg, score, price, review){
    this.nameProduct = nameProduct;
    this.urlProduct = urlProduct;
    this.urlImg = urlImg;
    this.score = score;
    this.price = price;
    this.review = review;
}

getNameProduct(){
    return this.nameProduct = nameProduct
}

setNameProdcut(newNameProduct){
    this.nameProduct = newNameProduct;
}

getUrlProdcut(){
    return this.urlProduct = urlProduct;
}

setUrlProduct(newUrlProdcut){
    this.urlProduct = newUrlProdcut;
}

getUrlImg(){
    return this.urlImg = this.urlImg;
}

setUrlImg(newUrlImg){
    this.urlImg = newUrlImg;
}

getScore(){
    return this.score = score;
}

setScore(newScore){
    this.score = newScore;
}

getPrice(){
    return this.price = price;
}

setPrice(newPrice){
    this.price = newPrice; 
}

getReview(){
    return this.review = review;
}

setReview(newReview){
    this.review = newReview;
}
}