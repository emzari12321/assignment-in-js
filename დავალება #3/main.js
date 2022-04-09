// <-------- კალკულატორი -------#### //

/*
    აქ უნდა შევქმნათ კალკულატორი იუზერისთვის,
    თავიდან იუზერს, prompt-ით უნდა ჩააწერინოთ ხუთი რიცხვი(და იფებით უნდა დაჩეკოთ ნამდვილად ჩაწერა თუ არა რიცხვი)
    მაგ ხუთი რიცხვის შემდეგ უნდა ჩააწერინოთ რა არითმეტიკული მოქმედება გააკეთოს ჩვენმა კალკულატორმა,
    (აქ შეუძლია ჩაწეროს მარტო '-','+','*' თუ სხვა რამეს ჩაწერს ახლიდან ამოუგდეთ სანამ არ ჩაწერს ამ სამიდან ერთ-ერთს)
    ამ პრომპტებიდან ხუთი მიღებული რიცხვი უნდა ჩასეტოთ მასივში და ერთ ცვლადში უნდა გქონდეთ რა არითმეტიკული მოქმედება უნდა ჩავატაროთ(რაც იუზერი აარჩევს).
    შემდეგ უნდა შექმნათ ფუნქცია რმელიც მიიღებს 2 პარამეტრს პირვილი იქნება მასივი და მეორე არითმეტიკული მოქმედება, და მაგ ფუნქციამ არითმეტიკული მნიშვნელობის მიხედვით უნდა
    გააკეთოს გამოთვლა თუ '+' არის უნდა ყველა მასივის ელემენტი მიამატოს ერთმანეთს(მაგ. 1 + 2 + 3 + 4 + 5) თუ "*" გაამრავლოს (მაგ. 1 * 2 * 3 * 4 * 5)
*/

////// =>> კოდი დაწერეთ აქ
let numbers = prompt('დაწერე აქ 5 რიცხვი');
let symbol = prompt('დაწერე აქ მხოლოდ - ან + ან *');

let n1 = Number(numbers[0]);
let n2 = Number(numbers[1]);
let n3 = Number(numbers[2]);
let n4 = Number(numbers[3]);
let n5 = Number(numbers[4]);

function fun1() {
    // მიმატებები
    if (symbol == '*') {
        return Number(n1 * n2 * n3 * n4 * n5);
    } else if (symbol == '-') {
        return Number(n1 - n2 - n3 - n4 - n5);
    } else if (symbol == '+') {
        return Number(n1 + n2 + n3 + n4 + n5);
    } else {
        console.log('უნდა შეგეყვანა მოქმედება + ან - ან *');
    }
    // მიმატებები
}
fun1();
//////



// <-------- თანაკვეთა -------#### //

/*
    თქვენი დავალებაა შექმნათ ფუნცქცია რომელიც აბრუნებს ახალ მასივს, მასივი კი შედგება ამ ორი მასივის თანაკვეთისგან (რომელსაც ორივე შეიცავს)
    შექმენით ორი მასივი და გამოიყენეთ იგივე ფუნქცია რომ იპოვოთ ამ ორი მასივის თანანაკვეთა
*/

const Arr1 = [1, 23, 3, 34, 54, 6];
const Arr2 = [23, 3, 123, 34, 43, 4, 41]

////// =>> კოდი დაწერეთ აქ

if (Arr1[1] == Arr2[0] && Arr1[2] == Arr2[1] && Arr1[3] == Arr2[3]) {
    console.log('Arr1 23 3 34, Arr2 23 3 34')
}

//////



// <-------- ასინქრონული ფუნქცია -------#### //`
/**
 * შექმენით ასინქრონული ფუნქცია რომელიც დაითვლის ათამდე, 10 წამის განმავლობაში (1++ == 1წმ)
 */
////// =>> კოდი დაწერეთ აქ
function timer(a) {
    console.log(a, ' წამი');
    a++;
    if (a <= 10) {
        setTimeout(() => timer(a), 1000)
    }
}
timer(1);

//////



// <-------- უდიდესი რიცხვი -------#### //

/**
 * შექმენით ისეთი ფუნქცია რომელიც დაგიბრუნებთ მიწოდებული მასივის უდიდეს რიცხვს
 */


////// =>> კოდი დაწერეთ აქ
const writeNumber = prompt('ჩაწერე რიცხვები');

function returnBigNumber() {
    if (writeNumber.length == 2) {
        if (writeNumber[0] > writeNumber[1]) {
            console.log(`${writeNumber[0]} არის დიდი ${writeNumber[1]} -ზე`) // 6 > 5
        } else if (writeNumber[1] > writeNumber[0]) {
            console.log(`${writeNumber[1]} არის დიდი ${writeNumber[0]} -ზე`) // 5 < 6
        } else if (writeNumber[0] == writeNumber[1]) {
            console.log(`${writeNumber[1]} და ${writeNumber[0]} ტოლია`) // 5 = 5
        }
    } else if (writeNumber.length == 3) {
        if (writeNumber[0] > writeNumber[1] && writeNumber[0] > writeNumber[2]) {
            console.log(`${writeNumber[0]} არის დიდი ${writeNumber[1]}-ზე და ${writeNumber[2]}-ზეც`) // 3 > 2 > 1
        } else if (writeNumber[1] > writeNumber[0] && writeNumber[1] > writeNumber[2]) {
            console.log(`${writeNumber[1]} არის დიდი ${writeNumber[0]}-ზე და ${writeNumber[2]}-ზეც`) // 2 < 3 > 1
        } else if (writeNumber[2] > writeNumber[0] && writeNumber[2] > writeNumber[1]) {
            console.log(`${writeNumber[2]} არის დიდი ${writeNumber[0]}-ზე და ${writeNumber[1]}-ზეც`) // 1 < 2 < 3
        } else if (writeNumber[0] == writeNumber[1] && writeNumber[0] == writeNumber[2] && writeNumber[1] == writeNumber[2]) {
            console.log(`${writeNumber[0]}, ${writeNumber[1]} და ${writeNumber[2]} ტოლია`) // 2 = 2 = 2
        }
    } else if (writeNumber.length == 4) {
        if (writeNumber[0] > writeNumber[1] && writeNumber[0] > writeNumber[2] && writeNumber[0] > writeNumber[3]) {
            console.log(`${writeNumber[0]} არის დიდი ${writeNumber[1]}-ზე, ${writeNumber[2]}-ზე და ${writeNumber[3]}-ზეც`) // 4 > 3 > 2 > 1
        } else if (writeNumber[1] > writeNumber[0] && writeNumber[1] > writeNumber[2] && writeNumber[1] > writeNumber[3]) {
            console.log(`${writeNumber[1]} არის დიდი ${writeNumber[0]}-ზე, ${writeNumber[2]}-ზე და ${writeNumber[3]}-ზეც`) // 2 < 4 > 3 > 1
        } else if (writeNumber[2] > writeNumber[0] && writeNumber[2] > writeNumber[1] && writeNumber[2] > writeNumber[3]) {
            console.log(`${writeNumber[2]} არის დიდი ${writeNumber[1]}-ზე, ${writeNumber[0]}-ზე და ${writeNumber[3]}-ზეც`) // 2 < 3 < 4 > 1
        } else if (writeNumber[3] > writeNumber[0] && writeNumber[3] > writeNumber[1] && writeNumber[3] > writeNumber[2]) {
            console.log(`${writeNumber[3]} არის დიდი ${writeNumber[1]}-ზე, ${writeNumber[2]}-ზე და ${writeNumber[0]}-ზეც`) // 1 < 2 < 3 < 4
        } else if (writeNumber[0] == writeNumber[1] && writeNumber[0] == writeNumber[2] && writeNumber[1] == writeNumber[2] && writeNumber[1] == writeNumber[3] && writeNumber[2] == writeNumber[3] && writeNumber[0] == writeNumber[3]) {
            console.log(`${writeNumber[0]}, ${writeNumber[1]}, ${writeNumber[2]} და ${writeNumber[3]} ტოლია`) // 3 = 3 = 3 = 3
        }
    } else if (writeNumber.length == 5) {
        if (writeNumber[0] > writeNumber[1] && writeNumber[0] > writeNumber[2] && writeNumber[0] > writeNumber[3] && writeNumber[0] > writeNumber[4]) {
            console.log(`${writeNumber[0]} არის დიდი ${writeNumber[1]}-ზე, ${writeNumber[2]}-ზე, ${writeNumber[3]}-ზე, და ${writeNumber[4]}-ზეც`) // 5 > 4 > 3 > 2 > 1
        } else if (writeNumber[1] > writeNumber[0] && writeNumber[1] > writeNumber[2] && writeNumber[1] > writeNumber[3] && writeNumber[1] > writeNumber[4]) {
            console.log(`${writeNumber[1]} არის დიდი ${writeNumber[0]}-ზე, ${writeNumber[2]}-ზე, ${writeNumber[3]}-ზე, და ${writeNumber[4]}-ზეც`) // 1 < 5 > 4 > 3 > 2
        } else if (writeNumber[2] > writeNumber[1] && writeNumber[2] > writeNumber[0] && writeNumber[2] > writeNumber[3] && writeNumber[2] > writeNumber[4]) {
            console.log(`${writeNumber[2]} არის დიდი ${writeNumber[1]}-ზე, ${writeNumber[0]}-ზე, ${writeNumber[3]}-ზე, და ${writeNumber[4]}-ზეც`) // 1 < 2 < 5 > 4 > 3
        } else if (writeNumber[3] > writeNumber[1] && writeNumber[3] > writeNumber[2] && writeNumber[3] > writeNumber[0] && writeNumber[3] > writeNumber[4]) {
            console.log(`${writeNumber[3]} არის დიდი ${writeNumber[1]}-ზე, ${writeNumber[2]}-ზე, ${writeNumber[0]}-ზე, და ${writeNumber[4]}-ზეც`) // 1 < 2 < 3 < 5 > 4
        } else if (writeNumber[4] > writeNumber[1] && writeNumber[4] > writeNumber[2] && writeNumber[4] > writeNumber[3] && writeNumber[4] > writeNumber[0]) {
            console.log(`${writeNumber[4]} არის დიდი ${writeNumber[1]}-ზე, ${writeNumber[2]}-ზე, ${writeNumber[3]}-ზე, და ${writeNumber[0]}-ზეც`) // 1 < 2 < 3 < 4 < 5
        } else if (writeNumber[0] == writeNumber[1] && writeNumber[0] == writeNumber[2] && writeNumber[1] == writeNumber[2] && writeNumber[1] == writeNumber[3] && writeNumber[2] == writeNumber[3] && writeNumber[0] == writeNumber[3] && writeNumber[0] == writeNumber[4] && writeNumber[1] == writeNumber[4] && writeNumber[2] == writeNumber[4] && writeNumber[3] == writeNumber[4]) {
            console.log(`${writeNumber[0]}, ${writeNumber[1]}, ${writeNumber[2]}, ${writeNumber[3]} და ${writeNumber[4]} ტოლია`) // 3 = 3 = 3 = 3 = 3
        }
    }
}
returnBigNumber()
//////



// <-------- პროცენტის გამოთვლა -------#### //

/**
 *  ჩვენ ვაკეთებთ პროგრამას ბანკისთვის სადაც ადამიანს ვთავაზობთ შეიყვანოს თანხა და დროის ოდენობა (თვეში). 
 *  პროცენტი თვეების მიხედვით: 1-6 თვემდე 10%, 6-12 თვემდე 14%, 1წელზე ზემოთ 20%
 *  გამოთვალეთ სულ რამდენი იქნება გადასახდელი პროცენტთან ერთად.
 */

////// =>> კოდი დაწერეთ აქ
let money = prompt('შეიყვანეთ თქვენთვის სასურველი თანხა'); // 1000
let date = prompt('შეიყვანეთ დრო თვე'); // 10 
let Money = Number(money)
let percent = 0;
if (date >= 1 && date <= 6) {
    percent = 10;
    let pasuxi = (money / 100) * percent
    console.log(`პროცენტი თვეების მიხედვით არის, ${percent}%`)
    console.log(`გადასახდელი პროცენტთან ერთად არის ${pasuxi}`)
} else if (date >= 7 && date <= 12) {
    percent = 14;
    let pasuxi = (money / 100) * percent
    console.log(`პროცენტი თვეების მიხედვით არის, ${percent}%`)
    console.log(`გადასახდელი პროცენტთან ერთად არის ${pasuxi}`)
} else if (date >= 13) {
    percent = 20;
    let pasuxi = (money / 100) * percent
    let surulPasuxi = pasuxi + Money;
    console.log(`პროცენტი თვეების მიხედვით არის, ${percent}%`)
    console.log(`გადასახდელი პროცენტთან ერთად არის ${surulPasuxi}`)
}


//////