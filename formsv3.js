
value = 50
const init = function () {
    document.getElementById('button-cancel').addEventListener('click', reset);
    document.getElementById('button-send').addEventListener('click', send);

}

const reset = function (ev) {
    //HTML will automatically put the form back to its initial state
    //unless we do 
    ev.preventDefault();
    // programmatically we can reset it 
    document.getElementById('form-user').reset();
    //if you want to do anything else...
    calculatevalue()
}



/*
function mowingSelected() {
    mSelect = 1;
    
    sizeOfHouse = document.querySelector('input[name="size"]:checked').value;

    if (sizeOfHouse == 1) {
        c = 0;
        mowName = "Mowing Size: Small |";
    } else if (sizeOfHouse == 1.3) {
        c = 1;
        mowName = "Mowing Size: Medium |";
    } else if (sizeOfHouse == 1.6) {
        c = 2;
        mowName = "Mowing Size: Large |";
    }
    var span = document.getElementById("mowingSize");
    span.textContent = "" + mowName
    var span = document.getElementById("mowingSizePrice");
    span.textContent = "$" + sizeOfHouse * 50
    showOptions()
    calculatevalue(mSelect,c)
    
}

function expiredlengthSelected() {
    lSelect = 1;
    length = document.querySelector('input[name="grassLength"]:checked').value;
    sizeOfHouse = document.querySelector('input[name="size"]:checked').value;

    if (sizeOfHouse == 1) {
        c = 0;
        mowName = "Mowing Size: Small |";
    } else if (sizeOfHouse == 1.3) {
        c = 1;
        mowName = "Mowing Size: Medium |";
    } else if (sizeOfHouse == 1.6) {
        c = 2;
        mowName = "Mowing Size: Large |";
    }

    if (length == 1) {
        r = 0;
        mowHeight = "Height: Ankle |";
    } else if (length == 1.25) {
        r = 1;
        mowHeight = "Height: Long |";
    } else if (length == 1.5) {
        r = 2;
        mowHeight = "Height: Overgrown |";
    }
    //cart
    var span = document.getElementById("mowingHeight");
    span.textContent = "" + mowHeight;
    var span = document.getElementById("mowingHeightPrice");
    span.textContent = "+$" + (price[r][c] - price[0][c]);
}

function grassSelected() {
    gSelect = 1;
    grassClippings = document.querySelector('input[name="grassClippings"]:checked').value;
    if (grassClippings == 0) {
        g = 0;
        mowGrass = "Grass: Compost Heap |";
    } else if (grassClippings == 10) {
        g = 1;
        mowGrass = "Grass: Green Bin |";
    } else if (grassClippings == 20) {
        g = 2;
        mowGrass = "Grass: Offsite Removal |";
    }
    calculatevalue()
}

function calculatevalue(mSelect,c) {
    if (mSelect == 1) {
        var span = document.getElementById("anklePrice");
        span.textContent = "Ankle | +$" + (price[0][c] - price[0][c]).toFixed(2);
        var span = document.getElementById("longPrice");
        span.textContent = "Long | +$" + (price[1][c] - price[0][c]).toFixed(2);
        var span = document.getElementById("overgrownPrice");
        span.textContent = "Overgrown | +$" + (price[2][c] - price[0][c]).toFixed(2);
        var span = document.getElementById("compostPrice");
        span.textContent = "Compost Heap | $" + price[3][c].toFixed(2);
        var span = document.getElementById("greenBinPrice");
        span.textContent = "Green Bin | $" + price[4][c].toFixed(2);
        var span = document.getElementById("offsitePrice");
        span.textContent = "Offsite Removal | $" + price[5][c].toFixed(2);
    }



    var span = document.getElementById("mowingGrass");
    span.textContent = "" + mowGrass
    var span = document.getElementById("mowingGrassPrice");
    span.textContent = "$" + grassClippings * sizeOfHouse;

    totalValue = sizeOfHouse * 50 * length + grassClippings * sizeOfHouse;
    //document.getElementById("dateBox").value = ankleMultiplier;
    var span = document.getElementById("cartValue");
    span.textContent = "Total quote: $" + totalValue.toFixed(2);

}

<div>
<img src="https://i.ibb.co/ZV5KJdp/LARGE.png">
</div>
*/

// New code --------------------------------------------------------------

function resetRadio(rmv1, rmv2, rmv3,resetCart) {
    document.getElementById(rmv1).checked = document.getElementById(rmv1).defaultChecked;
    document.getElementById(rmv2).checked = document.getElementById(rmv2).defaultChecked;
    document.getElementById(rmv3).checked = document.getElementById(rmv3).defaultChecked;
    
    if (resetCart == 1){
        prices.sprayPrice = 0;
        var span = document.getElementById("lawnSpray");
        span.textContent = "Spray: -- |"
        var span = document.getElementById("lawnSprayPrice");
        span.textContent = "$" + prices.sprayPrice
    }
    calculateCart();
}


function isElementHidden(id) {
    var element = document.getElementById(id);
    return window.getComputedStyle(element).opacity === '0';
}
function popUpDismiss(id){

}

function showOptions() {
    if (isElementHidden('qu2')) {
        qu2 = document.getElementById('qu2');
        qu2.classList.add('visible');
        qu3 = document.getElementById('qu3');
        qu3.classList.add('visible');
        qu4 = document.getElementById('qu4');
        qu4.classList.add('visible');
        qu5 = document.getElementById('qu5');
        qu5.classList.add('visible');
    } else {

    }

}




let price = [
    //mowing 0-2
    [50, 65, 80],
    [62.5, 81, 100],
    [75, 98, 120],
    //height 3-5
    [0, 0, 0],
    [10, 13, 16],
    [20, 26, 32],
    //spray 6-8
    [20,20,20],
    [32, 43, 55],
    [43, 66, 89]
];

const prices = {
    sizePrice: 0,
    lengthPrice: 0,
    clipPrice: 0,
    sprayPrice: 0,
    weedPrice: 0

};

function mowingSizeSelected() {
    //Figures out which mowing selected
    mSelect = 1;
    sizeOfHouse = document.querySelector('input[name="size"]:checked').value;
    
    if (sizeOfHouse == 1) {
        c = 0;
        mowName = "Mowing Size: Small | ";
    } else if (sizeOfHouse == 1.3) {
        c = 1;
        mowName = "Mowing Size: Medium | ";
    } else if (sizeOfHouse == 1.6) {
        c = 2;
        mowName = "Mowing Size: Large | ";
    }
    prices.sizePrice = sizeOfHouse * 50
    //Updates Length
    if (mSelect == 1) {
        var span = document.getElementById("anklePrice");
        span.textContent = "Ankle | +$" + (price[0][c] - price[0][c]).toFixed(2);
        var span = document.getElementById("longPrice");
        span.textContent = "Long | +$" + (price[1][c] - price[0][c]).toFixed(2);
        var span = document.getElementById("overgrownPrice");
        span.textContent = "Overgrown | +$" + (price[2][c] - price[0][c]).toFixed(2);
        //Updates Grass Clippings
        var span = document.getElementById("compostPrice");
        span.textContent = "Compost Heap | $" + price[3][c].toFixed(2);
        var span = document.getElementById("greenBinPrice");
        span.textContent = "Green Bin | $" + price[4][c].toFixed(2);
        var span = document.getElementById("offsitePrice");
        span.textContent = "Offsite Removal | $" + price[5][c].toFixed(2);
        //Lawn Spray
        var span = document.getElementById("lawnSprayHelp");
        span.textContent = "Dying Patches | $" + 20
        var span = document.getElementById("lawnSprayHalf");
        span.textContent = "Half Lawn | $" + price[7][c].toFixed(2);
        var span = document.getElementById("lawnSprayWhole");
        span.textContent = "Whole Lawn | $" + price[8][c].toFixed(2);
    }

    //Adds Mowing Price to Cart & Changes mowing text in cart
    var span = document.getElementById("mowingSize");
    span.textContent = mowName
    var span = document.getElementById("mowingSizePrice");
    span.textContent = "$" + prices.sizePrice
    //Calculates Cart
    calculateCart();
    //shows options
    showOptions();
}

function lengthSelected() {
    //Adds length price to cart "+$XX"
    length = document.querySelector('input[name="grassLength"]:checked').value;

    c = cCalculator();

    if (length == 1) {
        r = 0;
        mowHeight = "Height: Ankle | ";
    } else if (length == 1.25) {
        r = 1;
        mowHeight = "Height: Long | ";
    } else if (length == 1.5) {
        r = 2;
        mowHeight = "Height: Overgrown | ";
    }
    prices.lengthPrice = (price[r][c] - price[0][c]);
    //cart
    var span = document.getElementById("mowingHeight");
    span.textContent = mowHeight;
    var span = document.getElementById("mowingHeightPrice");
    span.textContent = "+$" + prices.lengthPrice
    //Calculates Cart
    calculateCart();
}

function grassClippingsSelected() {
    //Adds clippings price to cart "+$XX"
    grassClippings = document.querySelector('input[name="grassClippings"]:checked').value;
    if (grassClippings == 0) {
        g = 0;
        mowGrass = "Grass: Compost Heap |";
    } else if (grassClippings == 10) {
        g = 1;
        mowGrass = "Grass: Green Bin |";
    } else if (grassClippings == 20) {
        g = 2;
        mowGrass = "Grass: Offsite Removal |";
    }
    prices.clipPrice = grassClippings * sizeOfHouse;

    var span = document.getElementById("mowingGrass");
    span.textContent = mowGrass
    var span = document.getElementById("mowingGrassPrice");
    span.textContent = "$" + prices.clipPrice
    //Calculates Cart
    calculateCart();
}

function spraySelected(){
    lawnSpray = document.querySelector('input[name="lawnSpray"]:checked').value;
    if (lawnSpray == 0) {
        lS=6;
        cartSpray = "Spray: Dying Patches |";
    } else if (lawnSpray == 1) {
        lS=7;
        cartSpray = "Spray: Half Lawn |";
    } else if (lawnSpray == 2) {
        lS=8;
        cartSpray = "Spray: Whole Lawn |";
    }
    
    c=cCalculator();
    prices.sprayPrice = (price[lS][c]);
    var span = document.getElementById("lawnSpray");
    span.textContent = cartSpray
    var span = document.getElementById("lawnSprayPrice");
    span.textContent = "$" + prices.sprayPrice
    //Calculates Cart
    calculateCart();
}

function calculateCart() {
    //gets values from id and adds them together
    totalValue = prices.sizePrice + prices.clipPrice + prices.lengthPrice + prices.sprayPrice + prices.weedPrice
    var span = document.getElementById("cartValue");
    span.textContent = "Total quote: $" + totalValue.toFixed(2);
}

function cCalculator() {
    sizeOfHouse = document.querySelector('input[name="size"]:checked').value;
    if (sizeOfHouse == 1) {
        c = 0;
    } else if (sizeOfHouse == 1.3) {
        c = 1;
    } else if (sizeOfHouse == 1.6) {
        c = 2;
    }
    return c;
}

document.addEventListener('DOMContentLoaded', init);

