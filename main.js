const quickSort = function(arr) {

	if (arr.length <= 1) {
		return arr;
	}

	const pointer = arr[0], less = [], more = [];


	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < pointer) {
			less.push(arr[i]);
		} else {
			more.push(arr[i]);
		}
	}



	return quickSort(less).concat(pointer,quickSort(more))
}
const arr = [];
for (var i = 0; i < 100; i++) {
	arr.push(Math.random() * 100);
}
console.log(quickSort(arr));