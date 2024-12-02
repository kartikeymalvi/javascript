var todayDate =new Date();
  console.log(todayDate);

  var tDay =todayDate.getDate();
   console.log(tDay);

   let day;


   switch (tDay){
    case 0:
    day=" sunday"
    break;
    case 1:
    day=" Monday"
    break;
     case 2:
    day=" Tuesday"
    break;
     case 3:
    day=" sunday"
    break;
     case 4:
    day=" sunday"
    break;
     case 5:
    day=" sunday"
    break;
     case 6:
    day=" sunday"
    break;
   }
    console.log(`today is :${day}`);