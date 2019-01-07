// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

var fruits,storeEachFruits,fruitDetails;
fruits = [
    {name:'Apple',color:'red',pricePerKg: 50},
    {name:'Bananas',color:'Yellow',pricePerKg: 30},
    {name:'Cherries',color:'lightRed',pricePerKg: 150},
    {name:'Blueberry',color:'blue',pricePerKg: 120},
    {name:'Boysenberry',color:'gray',pricePerKg: 110}
];
storeEachFruits = {};
for(item of fruits){
    storeEachFruits[item.name] = item;
}
function getFruits(fruitName){
    fruitDetails  = storeEachFruits[fruitName];
    if(fruitDetails){
        return "Color of the fruit is "+fruitDetails.color+"and it's Price is "+fruitDetails.pricePerKg;
    }
    else{
        return "Invalide Fruit Name";
    }
}