describe("pow", function() {
    // Пример как завести тест
    // it("возводит 2 в степень 3", function() {
    //   assert.equal(pow(2, 3), 8);        
    // });

    describe("возводит x в степень 3", function() {
        function makeTest(x) {
            let expected = x * x * x;
    
            it(`${x} в степени 3 будет ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }
    
        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

        it("для отрицательных n возвращает NaN", function() {
            assert.isNaN(pow(2, -1));
        });

        it("для дробных n возвращает NaN", function() {
            assert.isNaN(pow(2, 1.25));
        });
    });
    
    describe("возводит x в степень 2", function() {
        function makeTestTwo(x) {
            let expected = x * x;

            it(`${x} в степени 2 будет ${expected}`, function() {
                assert.equal(pow(x, 2), expected)
            });            
        }

        for (let x = 1; x <= 5; x++) {
            makeTestTwo(x);
        }
    });    
});