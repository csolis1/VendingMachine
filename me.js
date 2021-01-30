var me = {
	fname: "Celines",
	lname: "Solis",
	age: 28,
	getFullName: function() {
		return this.fname + ' ' + this.lname;
	},
	setFullName : function(first,last) {
		this.fname = first;
		this.lname = last;
	}
	
};

	
console.log("Hi my name is " + me.getFullName() + "and I am " + me.age + "years old.");

me.setFullName("John", "Doe");

me.age = 60;

console.log("HI, my name is " + me.getFullName() + "and I am" + me.age + "years old.");
