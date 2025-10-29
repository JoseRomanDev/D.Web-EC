export class Review{
    rating;
    total_review;

    constructor(rating, total_review){
        this.rating = rating;
        this.total_review = total_review;
    }

    getRating(){
        return this.rating
    }
    
    setRating(newRating){
        this.rating = newRating;
    }

    getTotalReview(){
        return this.total_review;
    }

    setTotalReview(newTotalReview){
        this.total_review = newTotalReview;
    }
}
