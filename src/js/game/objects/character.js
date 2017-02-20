/**
 * Created by Denis on 19.02.2017.
 */
class Character {
    constructor(name, health, hitpower, speed, hitdistance) {
        this.name = name; // Наименование персонажа
        this.health = health; // Максимальное здоровье
        this.hitpower = hitpower; // Максимальная сила удара, зависит от расстояния.
        // У лучников, магов и разбойников делится на расстояние.
        this.speed = speed; // Максимальное кол-во клеток за действие, которое может пройти персонаж
        this.hitdistance = hitdistance; // Максимальное кол-во клеток за действие, на которое может произвести удар персонаж
    }

    set setHealth(health) {
        this.health = health;
    }

    get getHealth() {
        return this.health;
    }

    set setHitPower(hitpower) {
        this.hitpower = hitpower;
    }

    get getHitPower() {
        return this.hitpower;
    }

    set setSpeed(speed) {
        this.speed = speed;
    }

    get getSpeed() {
        return this.speed;
    }

    set setHitDistance(hitdistance) {
        this.hitdistance = hitdistance;
    }

    get getHitDistance() {
        return this.hitdistance;
    }

    getCurrHitPower(currDictance) {
        return this.hitpower / currDictance;
    }
}

class Paladin extends Character {
    constructor() {
        super("Paladin", 200, 20, 1, 1);
    }
}

class Archer extends Character {
    constructor() {
        super("Archer", 150, 10, 2, 2);
    }
}

class Magician extends Character {
    constructor() {
        super("Magician", 100, 15, 1, 2);
    }
}

class Robber extends Character {
    constructor() {
        super("Robber", 100, 15, 2, 1);
    }
}
