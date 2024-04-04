
function checkinputnum(){
   let inputnumber=document.getElementById(`tel`).value;
   if(isNaN(inputnumber) || inputnumber=="" || !/^0/g.test(inputnumber) || !/^09/g.test(inputnumber) || inputnumber.length >= 12){
      document.getElementById(`par`).innerHTML = `wrong input`;
}
else{
   document.getElementById(`par`).innerHTML=`correct input`;
}
}
document.getElementById('tel').addEventListener('input',checkinputnum);


function checkPhoneNumber() {
   const number = document.querySelector('#tel').value;
   
   if (number === "" || isNaN(number) || !/^09/g.test(number) || number.length >= 12) {
      document.getElementById('error_message').innerHTML = "شماره موبایل را صحیح وارد نکردید";
   }
   else {
      console.log("شماره موبایل صحیح وارد شده");
      //استفاده از خروجی یک تابع در ورودی تابع دیگر
      postData(number);
}
}
document.querySelector(`#telbtn`).addEventListener('click', checkPhoneNumber);



async function postData(PhoneNumber){
   console.log(PhoneNumber);
   // const res =await fetch('https://u.darbast.app/temp/log_in_user', 
   // {
   //    mode: "no-cors", // no-cors, *cors, same-origin
   //    method: 'POST',
   //    body : JSON.stringify({mobile:PhoneNumber}),
   //    headers: {
   //       "Content-Type": "application/json",
   //       // 'Content-Type': 'application/x-www-form-urlencoded',
   //     }
   //    }
   // );
   // const response=await res.json();
   // console.log(response);


   fetch('https://u.darbast.app/temp/log_in_user',
   {
      // mode: "no-cors", // no-cors, *cors, same-origin
      method: 'POST',
      // cache: "no-cache",
      body : JSON.stringify({mobile:PhoneNumber}),
      headers: {
         "Content-Type": "application/json",
         // 'Content-Type': 'application/x-www-form-urlencoded',
       }
      }
   ).then(res=>res.json()).then(res=>{
      console.log(res);
   })
}

document.querySelector(`#telbtn`).addEventListener('click', postData);


















// async function postData(){
//    let response=await fetch(`https://u.darbust.app/temp/log-ln-user`)
// }
//console.log(/^09\d{9}$/g.test(`09387265682`));
//تست کردن شماره تلفن وارد شده با این RegExp
//number===""||isNaN(number)||!/^09[1-9]\d{9}$/.test(number)



// function getText() {
//    fetch(`text.txt`).then(
//       function (res) {
//          console.log(res);
//       }
//    )
// }
// document.querySelector(`#telbtn`).addEventListener(`click`, getText);


// function getText2() {
//    fetch(`text.txt`).then(
//       function (res) {
//          return res.text();
//       }).then(
//          function (data) {
//             console.log(data);
//          }

//       )
// }
// document.querySelector(`#telbtn`).addEventListener(`click`, getText2);
