document.getElementById('memory1').addEventListener('click', function(){
     document.getElementById('memory-price').innerText = 0;
     calculateTotal();
    })
document.getElementById('memory2').addEventListener('click', function(){
    document.getElementById('memory-price').innerText = 200;
    calculateTotal();
    })

document.getElementById('storage1').addEventListener('click', function(){
    document.getElementById('storage-price').innerText = 0;
    calculateTotal();
    })
document.getElementById('storage2').addEventListener('click', function(){
    document.getElementById('storage-price').innerText = 100;
    calculateTotal();
    })
document.getElementById('storage3').addEventListener('click', function(){
    document.getElementById('storage-price').innerText = 300;
    calculateTotal();
    })

document.getElementById('delivery1').addEventListener('click', function(){
    document.getElementById('delivery-price').innerText = 0;
    calculateTotal();
    })
document.getElementById('delivery2').addEventListener('click', function(){
    document.getElementById('delivery-price').innerText = 20;
    calculateTotal();
    })

function calculateTotal(){
    let totalPrice = parseInt(document.getElementById('imac-price').innerText) +
    parseInt(document.getElementById('memory-price').innerText) + 
    parseInt(document.getElementById('storage-price').innerText) +
    parseInt(document.getElementById('delivery-price').innerText) ;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('your-total').innerText = "Your total: $"+String(totalPrice);
}

document.getElementById('promo-button').addEventListener('click', function(){
    const promoCodeEntered = document.getElementById('promo-code').value;
    if (promoCodeEntered == 'stevekaku'){
        let yourPrice = document.getElementById('total-price').innerText * 0.8;
        document.getElementById('your-total').innerText = "Your total: $"+String(Math.floor(yourPrice*100/100));
    }
    else{
        document.getElementById('your-total').innerText = "Your total: $"+String(document.getElementById('total-price').innerText);
        document.getElementById('promo-code').value = '';
    }
})



   



