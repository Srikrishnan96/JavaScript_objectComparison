function compareArrayItems(arr1, arr2, typeStrict) {
	var arr2Length = arr2.length;
	if(arr1.length === arr2Length) {
		let obj = {};
        arr1.forEach(function(val) { obj[val]=val });
        if(typeStrict !== false) {
            for(let i=0; i<arr2Length; i++) {
                if(arr2[i] !== obj[arr2[i]]){ return false; }
            }
            return true;
        } else {
            for(let i=0; i<arr2Length; i++) {
                if(arr2[i] != obj[arr2[i]]){ return false; }
            }
            return true;
        }
	}
	return false;
}