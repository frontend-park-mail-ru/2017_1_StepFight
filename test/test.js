/**
 * Created by Denis on 10.03.2017.
 */
import chai from 'chai';
import UserService from '../src/js/support/service/userService';

mocha.setup('bdd');
let expect = chai.expect;
let should = chai.should();


let user = {
    login: `testuser${Math.random() * (Number.MAX_SAFE_INTEGER)}`,
    password: 'testpass1'
};


describe('User Service', function () {
    describe('Sign Up User', function () {
        it('success signup', function (done) {
            new UserService().signup(user).then(response => {
                response.result.should.equal('success');
                done();
            });
        });
        it('error signup', function (done) {
            new UserService().signup(user).catch(err=>{
                err.result.should.equal('error');
                done();
            });
        });

    });
    describe('Log In User', function () {
        it('success login', function (done) {
            new UserService().login(user).then(response => {
                expect(response.login).to.be.not.empty;
                done();
            });
        });
        it('error login', function (done) {
            user.login='-1';
            new UserService().login(user).catch(err=>{
                done();
            });
        });
    });
});
mocha.checkLeaks();
mocha.run();
