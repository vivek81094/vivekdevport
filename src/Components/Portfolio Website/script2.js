let  list=document.getElementById('list-1'),
node=document.getElementById('list-2').lastElementChild


// list.appendChild(node, list.children[0])

list.insertBefore(node, list.firstElementChild)


let thirdsection = document.getElementById('skills');
thirdsection.addEventListener('click', () => {
    location.reload()
});

const progressCircle = document.getElementsByClassName("pie");
let progressValue=document.querySelectorAll('.redial_progress')
let value=[0, 1, 2, 3]

value.forEach((element) => {
let progressStart = 0;
let progressEnd=progressValue[element].textContent;
let progress_1= setInterval(() => {    
    progressStart++;
    progressValue[element].textContent=`${progressStart}%`
    progressCircle[element].style.background= `conic-gradient(#66fcf1 ${progressStart * 3.6}deg, #0b0c10 55deg)`
  
    if(progressStart==progressEnd)
    {
        clearInterval(progress_1);
    }    
}, 10);
})






