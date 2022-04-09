/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch 
 */



// <------- შედარება ---------#### //

const num1 = 0;
const boolean1 = false;
const num2 = 5;
const emptyString = "";
const boolean2 = false;
const text = "I'm Text";
const text2 = "0";

// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]

// >>> კოდი დაწერეთ აქ 

const isFalse = [num1, boolean1, boolean2, emptyString];
const isTrue = [num2, text, text2];

//


// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

console.log("abc" > "ab") // ეს ამოვხსენი
console.log(4 === +"004") //ასე ან console.log(2 === +"002") ასე



// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი

// >>> კოდი დაწერეთ აქ 
const question = prompt("რამდენის ხარ?");
if (question >= 18) {
  console.log('სასმელი შენთვის უკვე შეიძლება')
} else {
  console.log('სასმელი შენთვის ჯერ არ შეიძლება')
}
//


// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ
if (question > 18) {
  console.log((question - 18),' წელი გავიდა რაც 18-ის გახდი');
} else if (question == 18) {
  console.log('შენ ზუსტად 18-ის ხარ');
} else {
  console.log((18 - question),' წელი გაკლია რომ 18-ის გახდე');
}
// მეორე მაგალითი 
// სხვა ვერ მოვიფიქრე
  let x = 10;
  let y = 11;
  if (y > x) {
    console.log('ხო ასეა y მეტია x-ზე');
  } else if (x == y) {
    console.log('ასეა x და y ტოლია');
  } else if (x > y) {
    console.log('კი კი x მეტია y-ზე');
  } else{
    console.log('რაღაც შეცდომაა');
  }
//


// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ
question > 18 ? console.log((question - 18),' წელი გავიდა რაც 18-ის გახდი') : question == 18 ? console.log('შენ ზუსტად 18-ის ხარ') : console.log((18 - question),' წელი გაკლია რომ 18-ის გახდე');
// მეორე მაგალითი
y > x ? console.log('ხო ასეა y მეტია x-ზე') : x == y ? console.log('ასეა x და y ტოლია') : x > y ? console.log('კი კი x მეტია y-ზე') : console.log('რაღაც შეცდომაა');
//



/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
  წითელი=3, ლურჯი=1, მწვანე=2, ლუშავი=0, 
  სხვა ყველა ფერი=undefinde)
*/

let colorId = 3

// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)


// >>> კოდი დაწერეთ აქ
if (colorId == 4) {
  console.log('colorId = white');
} else if (colorId == 3) {
  console.log('colorId = red');
} else if (colorId == 2) {
  console.log('colorId = green');
} else if (colorId == 1) {
  console.log('colorId = blue');
} else{
  console.log(undefined);
}

//



// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ
colorId == 4 ? console.log('colorId = white') : colorId == 3 ? console.log('colorId = red') : colorId == 2 ? console.log('colorId = green') : colorId == 1 ? console.log('colorId = blue') : console.log(undefined);

//


// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით


// >>> კოდი დაწერეთ აქ
switch (colorId) {
  case 4:
  console.log('colorId = white');
  break;
  case 3:
  console.log('colorId = red');
  break;
  case 2:
  console.log('colorId = green');
  break;
  case 1:
  console.log('colorId = blue');
  break;
  default:
  console.log(undefined);
  break;
}

//



//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი

    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ. 
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/
const bot = document.getElementById("bot")
bot.addEventListener("click", myFun())

function myFun() {
  let x = prompt("მე მზად არ ვარ პასუხისათვის")

  // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch
  switch (x) {
    case 'გამარჯობა':
    alert('გამარჯობა');
    break;

    case 'რამდენის ხარ?':
    alert('22ის');
    break;

    case 'რა ფერი მოგწონს?':
    alert('თეთრი');
    break;

    case 'ვინ შეგქმნა?':
    alert('არ გეტყვი :დ');
    break;

    default:
    alert('ამაზე პასუხს ვერ გეტყვი');
    break;
  }

  //

  // რეკურსიული ფუნქცია
  myFun()
}