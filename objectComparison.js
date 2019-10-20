function objectComparison(obj1, obj2){
	let differentObjects = false;
	for (key in obj1) {
		if(obj2[key] !== obj1[key]) {
			differentObjects = true;
		}
	}

	for (key in obj2) {
		if(obj1[key] !== obj2[key]) {
			differentObjects = true;
		}
	}

	if(differentObjects){
		return 'Objects are different';
	}
	return 'Objects are identical';
}