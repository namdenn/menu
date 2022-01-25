let users = [
    {
        name: "Bánh Mì Bò Nướng",
        age: "36.000đ",
        school: "Đã được đặt lần"
    },{
        name: "Bánh Mì Thập Cẩm",
        age: "36.000đ",
        school: "Đã được đặt lần"
    },{
        name: "Bánh Mì Trứng Pa Tê",
        age: "36.000đ",
        school: "Đã được đặt lần"
    },{
        name: "Bánh Mì Gà Nướng",
        age: "47.700đ",
        school: "Đã được đặt lần"
    },{
        name: "Bánh Mình Bò Phô Mai",
        age: "37.800đ",
        school: "Đã được đặt lần",
    }
]
let user = document.querySelector(".items")
console.log(user);
//create form for each user
user.innerHTML += `<div></div>`
for ( i of users) {
    user.innerHTML += `
    <div class="menu">
    <div class="food">
        <h3>${i.name}</h3>
        <p class="value">${i.school}</p>
    </div>
    <div class="order-food">
        <p>${i.age}<p>
        <button class="order-button">ORDER</button>
    </div>
    </div>
    `
}