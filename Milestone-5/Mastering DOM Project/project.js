// function handleSelect(){
//     console.log('boss select korci');
// }

let count = 0;
const allBtn = document.getElementsByClassName('add-btn');
for(const btn of allBtn){
    // console.log(btn);
    btn.addEventListener('click', function(e){
        count = count + 1;
        // console.log(count);
       
        
        const placeName = e.target.parentNode.childNodes[1].innerText;

        const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
        // console.log(placeName,price);

        const selectedContainer = document.getElementById('selected-place-container');

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price;

        li.appendChild(p);
        li.appendChild(p2);

        const budget = document.getElementById('budget').innerText;
        const convertedBudget = parseInt(budget);

        if(convertedBudget - parseInt(price) < 0){
            alert('low budget please earn more.');
            return;
        }
        setInnerText('cart-count', count);
       e.target.parentNode.parentNode.style.backgroundColor = 'gray';
    //  e.target.setAttribute('disabled', 'true');
        e.target.disabled = true;

       document.getElementById('budget').innerText = convertedBudget - parseInt(price);
       










        selectedContainer.appendChild(li);

        totalCost('total-cost', parseInt(price));
        grandTotalCost('other');
       
        


      
        

        
        

        
    });
}





function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function totalCost(id, price){
    const totalCost = document.getElementById(id).innerText;
        
        const convertedTotalCost = parseInt(totalCost);
        const sum = convertedTotalCost + price;
        setInnerText(id, sum);

}

function grandTotalCost(category){
    const totalCost = document.getElementById('total-cost').innerText;
    const convertedTotalCost = parseInt(totalCost);

    if(category == 'bus'){
        setInnerText('grand-total',convertedTotalCost + 100);
    }
    else if(category == 'train'){
        setInnerText('grand-total',convertedTotalCost - 200)
    }
    else if(category == 'flight'){
        setInnerText('grand-total',convertedTotalCost + 500);
    }

    else{
        setInnerText('grand-total',convertedTotalCost )
    }

   

}
