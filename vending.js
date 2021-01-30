let snacks = {
		Snickers : 1.00,
		Gushers : 0.50,
 		Gum : 0.25,
 		PotatoChips : 1.50,
 		Soda : 2.00,
		Water : 1.00
	};

function screen() {
	return snacks;
}
let total = 0

function submitPay(money) {
	if (typeof(money) == "string") {
		console.log("Incorrect value has been entered");
	} else {
		return total += money
	}
}

// console.log("You've entered $ " + submitPay(5)); to see amount entered on screen


function selection(item) {
	if(!snacks[item]) {
		console.log("No item available") // this will happen if item is not available
	} else {
		console.log("Item cost is $" + snacks[item]) //this will happen if it is available
	}
}

selection("Snickers")


function cashBack(change) {
	if(total>snacks[change]){
	return total -= snacks[change];
	} else if(total<snacks[change]) {
	return 'ERROR INSUFFICIENT FUNDS';
	} else {
	return '0.00';
	}
};

	cashBack('Snickers');
	selection('Gushers');
	cashBack ('Gushers');
	selection('Water');
console.log('Your change is $ ' + cashBack('Water'));

	var bag = ['Water', 'Snickers', 'Gushers'];
	for(var i=bag.length-1; i>=0; i--) {
		console.log(bag[i] + 'was eaten.');
}













