export class Price{
    
    currency;
    current_price;

    constructor(currency, current_price){
        this.currency = currency;
        this.current_price = current_price;
    }

    getCurrency(){
        return this.currency
    }

    setCurrency(newCurrency){
        this.currency = newCurrency;
    }

    getCurrentPrice(){
        return this.current_price;
    }

    setCurrentPrice(newCurrentPrice){
        this.current_price = newCurrentPrice
    }
}