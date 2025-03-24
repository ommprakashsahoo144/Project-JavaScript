let items = [
    { id: 101, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3KIqJ0c33D0FZDclm5gv9KdI0FmO3q8c2g&s", iName: "Idli", price: 39, qty: 1, type: "veg" },
    { id: 102, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviz2fl9NHmlFmO8-NdMkSwoMMr9hypcK1Kw&s", iName: "Bada", price: 59, qty: 1, type: "veg" },
    { id: 103, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZf2tks_5xpHBOUZzbmqxWbXWXQkglQH5PQ&s", iName: "Puri", price: 69, qty: 1, type: "veg" },
    { id: 104, imgUrl: "https://melam.com/wp-content/uploads/2022/12/ambur-biriyani.jpg", iName: "Chicken Curry", price: 199, qty: 1, type: "nonveg" },
    { id: 105, imgUrl: "https://melam.com/wp-content/uploads/2022/12/ambur-biriyani.jpg", iName: "Mutton Biryani", price: 299, qty: 1, type: "nonveg" }
];

function displayItems(foodItems) {
    if (foodItems.length == 0) return;
    let eachItem = "";
    foodItems.forEach((item) => {
        eachItem += `<tr>
                        <td>${item.id}</td>
                        <td><img src="${item.imgUrl}" alt="" width="30px" height="30px"></td>
                        <td>${item.iName}</td>
                        <td>&#8377; ${item.price}</td>
                        <td>
                            <i class="bi bi-dash-circle-fill" onclick="decQty(${item.id})"></i>
                            <span id="display-${item.id}">${item.qty}</span>
                            <i class="bi bi-plus-circle-fill" onclick="incQty(${item.id})"></i>
                        </td>
                        <td>&#8377; <span id="total-price-${item.id}">${item.price * item.qty}</span>.00</td>
                    </tr>`;
    });
    document.getElementById("item-data").innerHTML = eachItem;
}
displayItems(items);

let vegBtn = document.getElementById('veg-item');
let nonvegBtn = document.getElementById('nonveg-item')

function incQty(id) {
    items = items.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item);
    displayItems(items);
}

function decQty(id) {
    items = items.map((item) => item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item);
    displayItems(items);
}

function vegItems() {
    let filteredItems = items.filter(item => item.type === 'veg');
    displayItems(filteredItems);
}
vegBtn.addEventListener('click',vegItems);

function nonvegItems() {
    let filteredItems = items.filter(item => item.type === 'nonveg');
    displayItems(filteredItems);
}
nonvegBtn.addEventListener('click',nonvegItems);