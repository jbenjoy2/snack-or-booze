const unroll = require('./unroll');

describe('#unroll', function() {
	it('is a function', function() {
		expect(typeof unroll).toEqual('function');
	});

	it('should work with any size square array', function() {
		const square = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15, 16 ] ];
		const smallerSquare = [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ] ];

		expect(unroll(square)).toEqual([ 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10 ]);
		expect(unroll(square).length).toEqual(square.length ** 2);
		expect(unroll(smallerSquare)).toEqual([ 'a', 'b', 'c', 'f', 'i', 'h', 'g', 'd', 'e' ]);
		expect(unroll(smallerSquare).length).toEqual(smallerSquare.length ** 2);
	});
	it('should work with a 1x1 array', function() {
		const tiny = [ [ 1 ] ];
		expect(unroll(tiny)).toEqual([ 1 ]);
	});

	it('should not work with a non-square array', function() {
		const rectangle = [
			[ 1, 2, 3, 4 ],
			[ 5, 6, 7, 8 ],
			[ 9, 10, 11, 12 ],
			[ 13, 14, 15, 16 ],
			[ 17, 18, 19, 20 ]
		];

		expect(unroll(rectangle)).not.toEqual([
			1,
			2,
			3,
			4,
			8,
			12,
			16,
			20,
			19,
			18,
			17,
			13,
			9,
			5,
			6,
			7,
			11,
			15,
			14,
			10
		]);
	});
});
