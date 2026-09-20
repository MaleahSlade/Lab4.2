let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let cartList = document.getElementById("cart");
let newList = document.getElementById("new-list");
let searchInput = document.getElementById("searchInput");
let filterItemsButton = document.getElementById("filterItemsButton");

let shoppingList = [];

//take an item as a parameter and add it to the shoppingList array
function addItem(item) {
    if (shoppingList.includes(item) === true) {
        return "Item already added.";
    } else {
        shoppingList.push(item);
        console.log(shoppingList.length - 1);
        return shoppingList[shoppingList.length - 1]; //shoppingList[4]
    }
}

//remove the last item from the shoppingList array
    function removeLastItem(){
        shoppingList.pop();
        return shoppingList
}

//log all items in the shoppingList array to the console
    function displayList(){
        for(let items of shoppingList){
            console.log(items)
    }
}

// rebuild the visible <ul> list based on the current shoppingList array
function renderCart() {
    cartList.innerHTML = ""; // clear the existing list

    for (let i = 0; i < shoppingList.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = shoppingList[i];
        cartList.appendChild(listItem);
    }
}

//filters list for specific items
function filterItems(searchTerm){
    let newList = []
    for (let item of shoppingList){
        if(item.includes(searchTerm)){
            newList.push(item);
        }
    }
    return newList;
}

// rebuild the visible <ul id="new-list"> based on a filtered array
function renderFilteredList(filteredArray) {
    newList.innerHTML = ""; // clear the existing filtered list

    for (let i = 0; i < filteredArray.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerText = filteredArray[i];
        newList.appendChild(listItem);
    }
}

// run addItem() whenever the Add Item button is clicked
addItemButton.addEventListener("click", function () {
    let item = itemInput.value;
    let result = addItem(item);
    console.log(result);
    itemInput.value = "";
    renderCart();
});

// run removeLastItem() whenever the Remove Last Item button is clicked
removeItemButton.addEventListener("click", function () {
    removeLastItem();
    renderCart();
});

//run filterItems whenever the Search button is clicked
filterItemsButton.addEventListener("click", function () {
    let searchTerm = searchInput.value;
    let filteredResults = filterItems(searchTerm);
    renderFilteredList(filteredResults);
});