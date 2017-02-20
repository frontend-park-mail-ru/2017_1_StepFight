/**
 * Created by Denis on 20.02.2017.
 */
class User {
    constructor(id, login, nickname, rating) {
        this.id = id;
        this.login = login;
        this.nickname = nickname;
        this.rating = rating;
    }

    set setId(id) {
        this.id = id;
    }

    get getId() {
        return this.id;
    }

    set setLogin(login) {
        this.login = login;
    }

    get getLogin() {
        return this.login;
    }

    set setNickname(nickname) {
        this.nickname = nickname;
    }

    get getNickname() {
        return this.nickname;
    }

    set setRating(rating) {
        this.rating = rating;
    }

    get getRating() {
        return this.rating;
    }
}
