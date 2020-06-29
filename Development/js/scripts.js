
let menu = [ "0-pizza",
 "1-pasta" ,
 "2-fries",
 "3-burger"
]

alert("this is the menu: "+menu)

let pick = prompt("ماذا تحب ان تاكل؟");


if(pick= "0") {
    console.log(menu[0] );
}

if(pick= "1") {
    console.log(menu[1] );
}

if(pick= "2") {
    console.log(menu[2] );
}

if(pick= "3") {
    console.log(menu[3] );
}


// التمرين الثاني

alert("ادخل الارقام باللغة الانجليزية")

let number1 = prompt(":ادخل الرقم الاول")

let number2 = prompt(":ادخل الرقم الثاني")

let math = prompt(" :ادخل العملية الحسابية")


switch(math) {
    case "ضرب":
        alert(parseInt(number1)*parseInt(number2))
      break;
    case "جمع":
        alert(parseInt(number1)+parseInt(number2))
      break;
      case "طرح":
        alert(parseInt(number1)-parseInt(number2))
      break;
      case "قسمة":
        alert(parseInt(number1)/parseInt(number2))
      break;
    default:
      alert("العملية غير صحيحة")
  }

//   تمرين الثالث

let age = prompt("كم عمرك ؟")

switch(age) {
    case "5":
        alert("انت في الروضة")
      break;
      case "6":
        alert("انت في الابتدائي")
      break;
      case "7":
        alert("انت في الابتدائي")
      break;
      case "8":
        alert("انت في الابتدائي")
      break;
      case "9":
        alert("انت في الابتدائي")
      break;
      case "10":
        alert("انت في الابتدائي")
      break;
      case "11":
        alert("انت في المتوسطة")
      break;
      case "12":
        alert("انت في المتوسطة")
      break;
      case "13":
        alert("انت في المتوسطة")
      break;
      case "14":
        alert("انت في المتوسطة")
      break;
      case "15":
        alert("انت في المتوسطة")
      break;
      case "16":
        alert("انت في الثانوية")
      break;
      case "17":
        alert("انت في الثانوية")
      break;
      case "18":
        alert("انت في الثانوية")
      break;
      case "19":
        alert("انت في الجامعة")
      break;
      case "20":
        alert("انت في الجامعة")
      break;
      case "21":
        alert("انت في الجامعة")
      break;
      case "22":
        alert("انت في الجامعة")
      break;
    default:
      alert("العملية غير صحيحة")
  }




