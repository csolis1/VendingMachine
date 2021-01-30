var calc = {

	add: function(num1, num2) {	
		return num1 + num2;
	},
	subtract: function(num1, num2) {
		return num1 - num2;
	},
	multiply: function(num1, num2) {
		return num1 * num2;	
	},
	divide: function(num1, num2) {
		return num1 / num2;
	},
	largestNum : function(arr) {
	
		var largest = arr[0]
		for(i=0; i<arr.length; i++) {
			if(arr[i]>largest) {
				largest=arr[i];
			}
		}
		
		return largest;
	}


};

var numbers = [3,4,-3,2,5,3,2];
	
console.log(calc.largestNum(numbers));
