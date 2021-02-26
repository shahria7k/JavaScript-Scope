var warrior = "Ninja";
const screamWarrior = () => {
	warrior2 =
		"Samurai"; /**If  variable declaration is removed, the variable becomes global and works outside of the its container globally */
	console.log(warrior, warrior2);
	console.log("function is working");
};
screamWarrior();
console.log("function is working");
console.log(
	warrior,
	warrior2 /**this will show an error because its nested in a function and scoped locally thats why its not available outside of function */
);
