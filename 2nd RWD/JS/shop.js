let cartArr = [];
let cartProductArr=[];

function add(elem){

    let product = parseInt(elem.id);
    cartArr.push(product);
    // let cartFilter = [...new Set(cartArr)];
    let cartFilter = cartArr;
    console.log(cartFilter);
    
    let productName = elem.name;
    cartProductArr.push(productName);
    let cartFilterNames = [...new Set(cartProductArr)];
    console.log(cartFilterNames);
    
        //document.getElementById(this).button.disabled=true;
    // }
    // else if(a%2==0){
        
    // }
}

function goCart(){
    if(cartArr.length==0){
        alert("your cart is empty");
    }
    else if(cartArr.length!=0){
        localStorage.setItem("cartItems",cartArr);
        localStorage.setItem("cartItemsName", cartProductArr);
        window.open("./cart.html");
        return false;
    }
}