const price = async () => {
    let now = document.createElement('tr')
    const got = await fetch("../config.json");
    const config = await got.json();
    let date = config.plans
    let price = date[1]
    // let name = price.name    
    for (let i = 0; i < price.length; i++) {
        let now = document.createElement('tr')
        row.innerHTML = `
     <p>   ${price[i]}  </p>
     `
        document.getElementById("price").innerHTML = price[0]
    }
    console.log(price)
};
price();
