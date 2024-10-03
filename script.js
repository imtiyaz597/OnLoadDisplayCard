
 const ProductName = document.getElementById('productName');
 const Display = document.getElementById('display');

 document.addEventListener('submit', function(){
    
    const ProductName = document.querySelector('#productName').value;
    const ProductImage = document.querySelector('#productImage').value;
    const ProductDescription = document.querySelector('#productDescription').value;


    saveProduct(ProductName,ProductImage,ProductDescription);

    card();

    form.reset();    
 })

 function saveProduct(name,image,desc){

    const product = {
        name,
        image,
        desc
    };
    localStorage.setItem('product', JSON.stringify(product));
}

function card(){
    const item = JSON.parse( localStorage.getItem('product'));   
        Display.innerHTML = `<img src = "${item.image}">
        <h2> ${item.name} </h2>
        <h3> ${item.desc}</h3>
        `;     
}

document.onload = card();

 