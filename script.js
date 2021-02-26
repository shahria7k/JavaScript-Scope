var warrior = "Ninja"; //this one is globally scoped and can be accessed for anywhere inside the script;

const screamWarrior = () => {
	var warrior2 = "Samurai"; //this still a local scope;
	/***
	 * this only accessible from inside the function
	 * this is called local scope
	 * If  variable declaration is removed, the variable becomes global and works outside of the its container globally
	 */
	return {
		shootWarrior: () => {
			return console.log(warrior, warrior2);
			/**
			 * created a closure that has access to its parents variables & the global
			 * it gives access to this local variable in the global scope when iis called.
			 *
			 */
		},
	};
};
if (true) {
	var warrior2 = "dog"; // this block scope// only available inside  this block of code
	warrior2 = "cat"; //this is still a global scope because block statements like this doesn't create any new scope so it remains global;
}

const newWarrior = screamWarrior();
console.log(newWarrior);
newWarrior.shootWarrior();
console.log(
	warrior,
	warrior2
	/**this will show an error because its nested in a
    function and scoped locally thats why its not available outside of function */
);
