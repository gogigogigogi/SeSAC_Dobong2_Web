// tuple : 배열의 개수와 데이터타입 순서를 정하는 타입
var drink;
drink = ['cola', '콜라'];
var drink2 = ['cola', '콜라', 12];
console.log(drink2[0]);
drink2[0] = '사이다';
console.log(drink2);
// readonly 옵션: 타입과 순서를 완벽히 고정
// 추후 수정 불가능
var drink3 = ['콜라', '사이다'];
// drink[0] = "사이다"; // error!!
var Auth;
(function (Auth) {
    Auth[Auth["admin"] = 0] = "admin";
    Auth[Auth["user"] = 1] = "user";
    Auth[Auth["guest"] = 2] = "guest";
})(Auth || (Auth = {}));
var Cafe;
(function (Cafe) {
    Cafe["americano"] = "\uC544\uBA54\uB9AC\uCE74\uB178";
    Cafe["latte"] = "\uCE74\uD398\uB77C\uB5BC";
})(Cafe || (Cafe = {}));
console.log(Auth);
console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);
console.log(Cafe.americano);
console.log(Cafe.latte);
var Cake;
(function (Cake) {
    Cake[Cake["choco"] = 0] = "choco";
    Cake[Cake["vanilla"] = 1] = "vanilla";
    Cake[Cake["strawberry"] = 2] = "strawberry";
    Cake["kiwi"] = "kiwi";
})(Cake || (Cake = {}));
console.log(Cake.choco);
console.log(Cake.vanilla);
console.log(Cake.strawberry);
console.log(Cake.kiwi);
var student1 = { name: 'allie', isPassed: true };
console.log(student1);
