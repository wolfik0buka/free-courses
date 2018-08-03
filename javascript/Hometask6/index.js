/*1. Игра в выживание птичек. Цель игры: выяснить, какая птичка съест больше всего своих сородичей.
*
*Алгоритм решения:
*1. Создайте класс Bird.
*2. Добавьте птичке свойства name, points, wasEaten.
*3. Создайте 10 птичек с именами Bird 1, Bird 2, ..... Bird 3.
*4. Запустите цикл: до тех пор, пока не останется только одна живая птичка. Цикл должен выбирать случайным образом
*одну из живых птиц и скармливать ей любую другую (та, которая съедена, становится wasEaten=true, а та, которую
*покормили , — point++)
*
* */

class Bird {
    constructor(name, points){
        this.wasEaten = false;
        this.name = name;
        this.points = points;
    }
    diy() {
        this.wasEaten = true;
    }
    eat(){
        this.points++
    }

}
/*Выводит число от 0 до max*/
function getRandom(max) {
    return (Math.floor(Math.random()*max));

}

const birds = [];
const dieBirds = [];

for (let i =1; i<11; i++){
    birds.push(new Bird("Bird "+ i, 0));
}

while (birds.length > 1) {
    /*Выбираем случайного атакующего*/
    let birdNumber = getRandom(birds.length);
    let birdAttacker = birds[birdNumber];
    /*Убираем аттакающего из списка птиц, так он не может атаковать сам себя*/
    birds.splice(birdNumber, 1);
    /*Выбираем того на кого нападают*/
    birdNumber = getRandom(birds.length);
    /*нападаем съедаем*/
    birdAttacker.eat();
    birds[birdNumber].diy();
    console.log('Птица ' + birdAttacker.name + ' съедает птицу ' + birds[birdNumber].name);

    /*Добавляем птицу в убитых*/
    dieBirds.push(birds[birdNumber]);
    /*Убираем из живых*/
    birds.splice(birdNumber, 1);
    /*Возврящаем аттакующего*/
    birds.push(birdAttacker);
}
console.log("Осталась");
console.log(birds);
console.log("Убиты");
console.log(dieBirds);


/*Ниже мной добавлена более интересная версия. НОВЫЕ ПРАВИЛА! Теперь птица не съедает другую птицу сразу, а лишь
* наносит ей урон, уменьшая points, птица умирает, когда количество points опустится до 0
* Для запуска расскоментируйте и удалите то, что выше*/

/*
*
class Bird {
    constructor(name, points){
        this.wasEaten = false;
        this.name = name;
        this.points = points;
    }
    diy() {
        this.wasEaten = true;
    }
    eat(){
        this.points++
    }
    hit(){
        this.points--;
        if (this.points < 1) this.diy()
    }

}

function getRandom(max) {
    return (Math.floor(Math.random()*max));

}

const birds = [];
const dieBirds = [];

for (let i =1; i<11; i++){
    let power = getRandom(4)+1;
    birds.push(new Bird("Bird "+ i, power));
}

while (birds.length > 1) {

    let birdNumber = getRandom(birds.length);
    let birdAttacker = birds[birdNumber];

    birds.splice(birdNumber, 1);

    birdNumber = getRandom(birds.length);

    birdAttacker.eat();
    birds[birdNumber].hit();
    console.log('Птица ' + birdAttacker.name +":"+birdAttacker.points  + ' атакует птицу ' + birds[birdNumber].name +":"+birds[birdNumber].points );

    if (birds[birdNumber].points < 1){

        dieBirds.push(birds[birdNumber]);

        birds.splice(birdNumber, 1);
    }

    birds.push(birdAttacker);}
console.log("Осталась");
console.log(birds);
console.log("Убиты");
console.log(dieBirds);
*/