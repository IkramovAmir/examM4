let token = window.localStorage.getItem("token");
if(!token) window.location.href = "/register";   

let elLogOut = document.getElementById("js-logout-btn")

elLogOut.addEventListener("click", async (evt) => {
    window.localStorage.removeItem("token");
    window.location.href = "/"
})

document.getElementById("cart").addEventListener("click", async (evt) => {

    evt.preventDefault();
    window.location.href = "/carts"

});

