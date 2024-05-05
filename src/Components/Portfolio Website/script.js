let thirdsection = document.getElementById('skills');
thirdsection.addEventListener('click', () => {
    location.reload()
});


const progressCircle = document.getElementsByClassName("pie");
let progressValue=document.querySelectorAll('.redial_progress')

// METHOD-1

Array.from(progressValue).forEach((element, i) => {
    let progressEnd= element.textContent;  
    let progressStart = 0;
let progress_1= setInterval(() => {    
    progressStart++;
    progressValue[i].textContent=`${progressStart}%`
    progressCircle[i].style.background= `conic-gradient(#66fcf1 ${progressStart * 3.6}deg, #0b0c10 55deg)`
  
    if(progressStart==progressEnd)
    {
        clearInterval(progress_1);
    }    
}, 10);
})
    

//  METHOD :-2

//  let value=[0, 1, 2, 3]

//  value.forEach((element) => {
//  let progressStart = 0;
//  let progressEnd=progressValue[element].textContent;
//  let progress_1= setInterval(() => {    
//      progressStart++;
//      progressValue[element].textContent=`${progressStart}%`
//     progressCircle[element].style.background= `conic-gradient(#66fcf1 ${progressStart * 3.6}deg, #0b0c10 55deg)`
   
//    if(progressStart==progressEnd)
//      {
//         clearInterval(progress_1);
//     }    
// }, 10);
// })

//   METHOD -3

// const progressCircle = document.getElementsByClassName("pie");
// let progressValue_c = document.querySelector(".progress_cre");
// let progressValue_t = document.querySelector(".progress_tea");
// let progressValue_p = document.querySelector(".progress_pro");
// let progressValue_com = document.querySelector(".progress_com");


// function redial1() {
// let progressStart = 0;
// let progress_1= setInterval(() => {
//     let progressEnd=90;
//     progressStart++;

//     progressValue_c.textContent=`${progressStart}%`
//     progressCircle[0].style.background= `conic-gradient(#66fcf1 ${progressStart * 3.6}deg, #0b0c10 55deg)`

//     if(progressStart==progressEnd)
//     {
//         clearInterval(progress_1);
//     }

    
// }, 10);

// }

// function redial2() {
//     let progressStart = 0;
// let progress_2= setInterval(() => {
//     let progressEnd=80;
//     progressStart++;

//     progressValue_t.textContent=`${progressStart}%`
//     progressCircle[1].style.background= `conic-gradient(#66fcf1 ${progressStart * 3.6}deg, #0b0c10 55deg)`

//     if(progressStart==progressEnd)
//     {
//         clearInterval(progress_2);
        
//     }   
   
// }, 10);

// }

// function redial3() {

//     let progressStart = 0;
// let progress_3= setInterval(() => {

//     let progressEnd=80;
//     progressStart++;

//     progressValue_p.textContent=`${progressStart}%`
//     progressCircle[2].style.background= `conic-gradient(#66fcf1 ${progressStart * 3.6}deg, #0b0c10 55deg)`

//     if(progressStart==progressEnd)
//     {
//         clearInterval(progress_3);
//     }
// }, 10);
// }

// function redial4() {
//     let progressStart = 0;
// let progress_4= setInterval(() => {
//        let progressEnd=60;
//     progressStart++;

//     progressValue_com.textContent=`${progressStart}%`
//     progressCircle[3].style.background= `conic-gradient(#66fcf1 ${progressStart * 3.6}deg, #0b0c10 55deg)`

//     if(progressStart==progressEnd)
//     {
//         clearInterval(progress_4);
//     }
// }, 10);

// }

// redial1();
// redial2();
// redial3();
// redial4();





