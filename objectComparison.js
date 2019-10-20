function objectComparison(obj1, obj2){
	let identical = true;
	for (key in obj1) {
		if(obj2[key] !== obj1[key]) 
			identical = false;
	}
	for (key in obj2) {
		if(obj1[key] !== obj2[key]) 
			identical = false;
	}
	return identical;
}
