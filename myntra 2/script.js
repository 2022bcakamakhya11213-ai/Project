let bagItems=[];
onLoad();


function onLoad(){   
let bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemsOnHomepage();
displayBagIcon();

}


function addToBag(itemsId) {
    bagItems.push(itemsId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();

}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
         bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;    
    } else {
        bagItemCountElement.style.visibility = 'hidden';}
    }
    bagItemCountElement.innerText = bagItems.length;



function displayItemsOnHomepage() {
    
let itemContElements = document.querySelector('.item-cont')
if (!itemContElements) {
    return;
}
 
let innerHTML='';
item.forEach(items => {
    innerHTML += `<div class="items-cont">
<img class="image" src="${items.image}" alt="itemsimage">
<div class="rating"> ${items.rating.stars}★|${items.rating.count}</div>
<div class="company-name">${items.company}</div>
<div class="item-name">${items.item_name}</div>
<div class="price">
<span class="current-price">Rs ${items.current_price}</span>
<span class="original-price">Rs ${items.original_price}</span>
<span class="discount">(${items.discount_percentage}%)</span>
</div>
<button class="add-to-bag" onclick="addToBag(${items.id})">Add To Bag</button></div>
`
});


itemContElements.innerHTML = innerHTML;    

}

