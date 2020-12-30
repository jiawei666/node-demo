var should = chai.should();
describe('simple test', function () {
    it('should equal 0 when n === 0', function () {
        window.fibonacci(10).should.equal(55);
    });
});