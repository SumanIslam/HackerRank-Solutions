class Polygon {
	constructor(sides) {
		this.sides = sides;
	}

	perimeter() {
		let sum = 0;
		for (let side in this.sides) {
			sum += this.sides[side];
		}

		return sum;
	}
}
