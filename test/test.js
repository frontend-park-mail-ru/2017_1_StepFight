/**
 * Created by Denis on 10.03.2017.
 */
let assert = require('assert');
import UserService from '../src/js/support/service/userService';

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

describe('userService', function () {
    describe('signUpUser', function () {
        it('goodReq', function () {
            let body = {
                "login": "testUser1",
                "password": "testpass1"
            };
            new UserService().signup(body).then(response => {
                it('should return 200 OK', function () {
                    assert.equal(response, '{"status": "200 OK"}');
                });
            }, response => {

            });
        });
    });
});