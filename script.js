var warrior = "Ninja";
const screamWarrior = () => {
	warrior2 =
		"Samurai"; /**If  variable declaration is removed, the variable becomes global and works outside of the its container globally */
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
const newWarrior = screamWarrior();
console.log(newWarrior);
newWarrior.shootWarrior();
// console.log(
// 	warrior,
// 	warrior2
// 	/**this will show an error because its nested in a
//     function and scoped locally thats why its not available outside of function */
// );
