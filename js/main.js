(() => {
	//this is an IIFE -> also an implementation of the module pattern

	//always go and get the elements youre wotkinf with
	const myObject = document.querySelector('.svg-img');

	//functionality goes here-> what we want to have happen
	function toggleSelection() {
		//we want uodate our UI to look like we are making a selection
		//debugger;
		//toggle a css class to the element with JavaScript
		this.classList.toggle("selected");
		console.log(this.id);
	}


	//figure out what triggers will drive the functionality
	myObject.addEventListener('click', toggleSelection);

})()