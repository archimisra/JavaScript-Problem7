//for a given array with prices of 5 items = [250, 645, 300, 900, 50]. all items have an offer of 10% OFF on them. Change the array to store final proce after applying offer.
let items = [250, 645, 300, 900, 50];
for(let i = 0; i< items.length; i++){
    let offer = items[i]/10;
    items[i]-= offer;
}
console.log(items);