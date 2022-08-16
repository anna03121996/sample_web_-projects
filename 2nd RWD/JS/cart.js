let cartItems = localStorage.getItem("cartItems").split(",");
        console.log(cartItems);
        let cartItemsArr =[];
        for(let i of cartItems){
            let arrInt = parseInt(i);
            cartItemsArr.push(arrInt);
            //console.log(cartItemsArr);
        }

        let cartItemName = localStorage.getItem("cartItemsName").split(",").sort();
        console.log(cartItemName);

        for(let j of cartItemName){
            console.log(j);
        }
        

        console.log(cartItemsArr);
        let totalPriceOfProducts = cartItemsArr.reduce(function(tot,val){
            return tot+val;
        });
        if(totalPriceOfProducts<900){
            console.log(`Total Price Rs.${totalPriceOfProducts}`);
            console.log("delivery Charges Rs.100");
            console.log("Grand Total was Rs."+(totalPriceOfProducts+100));
        }
        else{
            console.log(`Total Price (with out delivery Charge) Rs.${totalPriceOfProducts}`);
        }
        //