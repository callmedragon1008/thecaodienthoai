let carts = document.querySelectorAll('.add-cart');

let products=[
    {
        name:'Gray T-Shirt',
        tag:'Graytshirt',
        price:15,
        inCart:0

    },
    {
        name:'Blue T-Shirt',
        tag:'Bluetshirt',
        price:20,
        inCart:0

    },
    {
        name:'Yellow T-Shirt',
        tag:'Yellowtshirt',
        price:10,
        inCart:0

    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',()=>{
        cartNumbers();
    })
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    console.log(productNumbers);

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span')
    }

}