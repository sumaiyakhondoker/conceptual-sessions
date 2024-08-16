const allBtn = document.getElementsByClassName('add-btn');
// console.log(allBtn);

for(const btn of allBtn){
    // console.log(btn);
    btn.addEventListener('click', function(event){
        const name = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        // console.log(name, price, category);

        const selectedContainer = document.getElementById('selected-players-container');


        
        const firstCartCount = getConvertedValue('cart');
        const firstLeftCount = getConvertedValue('left');
        if(firstCartCount + 1 > 6 || firstLeftCount - 1 < 0){
            alert('limit is closed');
            return;
        }
        event.target.setAttribute('disabled', true);
        event.target.parentNode.style.backgroundColor = 'gray';

     
        // update budget
        const budget = getConvertedValue('budget');
        document.getElementById('budget').innerText = budget - parseInt(price);
        
        // update cart
        const cartCount = getConvertedValue('cart');
        document.getElementById('cart').innerText = cartCount + 1;


        // update left
        const leftCount = getConvertedValue('left');
        document.getElementById('left').innerText = leftCount - 1;


        const div = document.createElement('div');
        const p1 = document.createElement('p');
        p1.innerText = name;
        const p2 = document.createElement('p');
        p2.innerText = price;
        const p3 = document.createElement('p');
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        div.classList.add('flex', 'justify-around')
        selectedContainer.appendChild(div);

        

        updateTotalCost(price);
        updateGrandTotal();



    })
}

function updateGrandTotal(status){
    const totalCost = getConvertedValue('total-cost');
   if(status == undefined){
    
    document.getElementById('grand-total').innerText = totalCost;
    }
    else{
        const couponCode = document.getElementById('coupon-code').value;
        if(couponCode == 'love420'){
            const discounted = totalCost * 0.2;
            document.getElementById('grand-total').innerText = totalCost - discounted;
        }
        else{
            alert('please enter valid coupon code.')
        }
    }

}

function updateTotalCost(value){
    const totalCost = getConvertedValue('total-cost');
    const sum = totalCost + parseInt(value);
    
    document.getElementById('total-cost').innerText = sum;
}




function getConvertedValue(id){
    const elementInnerText = document.getElementById(id).innerText;
    const convertToNumber = parseInt(elementInnerText);
    return convertToNumber;
}

// const value = getConvertedValue('left')
// console.log(value);
// const value1 = getConvertedValue('cart')
// console.log(value1);
// const value2 = getConvertedValue('budget')
// console.log(value2);