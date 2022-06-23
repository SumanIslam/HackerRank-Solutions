function getCount(objects) {
	let count = 0;
	for (let object in objects) {
		let obj = objects[object];
		if (obj.x == obj.y) {
			count++;
		}
	}
	return count;
}
