let elNumProd = document.getElementById("numberProduct");

document.querySelectorAll(".addcard").forEach(btn => btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let isAdd;
    if (btn.textContent === "Added") {
        btn.textContent = "Add";
        isAdd = "Add"
    } else {
        btn.textContent = "Added";
        isAdd = "Added"
    }

    const id = btn.dataset.id;

    let req = await fetch("/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id, isAdd})
    });



    let res = await req.json();
    console.log(res)
    elNumProd.textContent = res.orderL;
}));