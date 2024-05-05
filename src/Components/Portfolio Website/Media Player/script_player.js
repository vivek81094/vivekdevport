console.log("Welcome to Spotify")



let songIndex = 0;
let audioElement = new Audio('songs/Zihaal e Miskin.mp3')
let masterPlay = document.getElementById('masterplay')
let gif = document.getElementById('gif')
let progressbar = document.getElementById('progressbar')
let masterSongName = document.getElementById('MasterSongName')
let songItem = Array.from(document.getElementsByClassName('songItem'));
let pauseBtn = document.getElementById("pause-btn")
let stopBtn = document.getElementById("stop-btn")

let songs = [
    { songName: "Zihaal e Miskin", filePath: "songs/Zihaal e Miskin.mp3", coverPath: "cover/0.png",  timepath: "04:04"},
    { songName: "Gone Girl", filePath: "songs/Gone Girl.mp3", coverPath: "cover/1.png", timepath: "03:14" },
    { songName: "Heeriye", filePath: "songs/Heeriye.mp3", coverPath: "cover/2.png", timepath: "03:19" },
    { songName: "Kahani Suno", filePath: "songs/Kahani Suno.mp3", coverPath: "cover/3.png", timepath: "02:53" },
    { songName: "Kesariya", filePath: "songs/Kesariya.mp3", coverPath: "cover/4.png", timepath: "04:28" },
    { songName: "Aur Kya Chahiye", filePath: "songs/Aur Kya Chahiye.mp3", coverPath: "cover/5.png", timepath: "04:26" },
    { songName: "Chaleya", filePath: "songs/Chaleya.mp3", coverPath: "cover/6.png", timepath: "03:08" },
    { songName: "Shiv Tandav Song", filePath: "songs/Shiv Tandav Song.mp3", coverPath: "cover/7.jpg", timepath: "06:30" },

]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("timming")[0].innerText = songs[i].timepath;
})



masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        // console.log("hiiiii") 
        audioElement.play();
        gif.style.opacity = 1;
        document.getElementById(songIndex).classList.add('fa-pause-circle')
    document.getElementById(songIndex).classList.remove('fa-play-circle')

        // document.getElementById('0').classList.remove('fa-play-circle')
        // document.getElementById('0').classList.add('fa-pause-circle')

        // masterPlay.style.backgroundColor=""

    }
    
})


pauseBtn.addEventListener('click', () => {
    if (audioElement.play) {
        // console.log("hiiiii") 
        audioElement.pause();
        gif.style.opacity = 0;
        makeAllplays();
    }
})

stopBtn.addEventListener('click', () => {
    if (audioElement.play || audioElement.paused) {
        // console.log("hiiiii") 
        audioElement.pause()
        progressbar.value = 0;
        audioElement.currentTime = 0;
        gif.style.opacity = 0;
        makeAllplays();

    }
})



audioElement.addEventListener('timeupdate', () => {
    // console.log("timeupdate")
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressbar.value = progress;
})

progressbar.addEventListener('change', () => {
    audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;

   
})



//if other song have pause button icon then change pause button icon to play button icon 
const makeAllplays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}
// target song, change play button icon to pause, select the song and play the targeted song 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        

        // let value=e.target.id;
        
        
      if(audioElement.paused && e.target.classList.contains('fa-play-circle'))
      
      { makeAllplays();
        songIndex = parseInt(e.target.id)
        // audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.src = songs[songIndex].filePath; 
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        // console.log(e.target.id)
        // console.log(e.target.classList.contains('fa-play-circle'))
        // console.log(e.target.classList.contains('fa-pause-circle'))
        
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterSongName.innerText = songs[songIndex].songName

    }

else if( e.target.classList.contains('fa-pause-circle'))
{
//stop current song and play another if click on another
audioElement.pause();
// console.log("helllo if else command")
e.target.classList.remove('fa-pause-circle')
e.target.classList.add('fa-play-circle')
gif.style.opacity = 0;
audioElement.currentTime = 0;
masterSongName.innerText = ""

}

    else {
        makeAllplays();
        songIndex = parseInt(e.target.id)
        // audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.src = songs[songIndex].filePath;
    //stop current song and play another if click on another
    audioElement.play();
    // console.log("helllo else command")
    // console.log(e.target.classList.contains('fa-play-circle'))
    // console.log(e.target.classList.contains('fa-pause-circle'))
    e.target.classList.remove('fa-play-circle')
    e.target.classList.add('fa-pause-circle')
    gif.style.opacity = 0;
    audioElement.currentTime = 0;
    masterSongName.innerText = ""
}

    })
    
})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 7;
    }
    else {
        songIndex -= 1;
    }
    // audioElement.src=`songs/${songIndex}.mp3`;

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName;
    makeAllplays();
    
    document.getElementById(songIndex).classList.add('fa-pause-circle')
    document.getElementById(songIndex).classList.remove('fa-play-circle')

   
})

document.getElementById('next').addEventListener('click', () => {

    nextsong();
    // if (songIndex >= 7) {
    //     songIndex = 0;
    //     // console.log("tell me songIndex")
    // }
    // else {
    //     songIndex += 1;
    // }
    // // audioElement.src=`songs/${songIndex}.mp3`;
    // audioElement.src = songs[songIndex].filePath;

    // audioElement.currentTime = 0;
    // audioElement.play();
    // gif.style.opacity = 1;
    // masterSongName.innerText = songs[songIndex].songName
    // makeAllplays();
    // document.getElementById(songIndex).classList.add('fa-pause-circle')
    // document.getElementById(songIndex).classList.remove('fa-play-circle')
    
    // changesSongsBtn();
})


const nextsong = ()=>{ 
    
    if (songIndex >= 7) {
        songIndex = 0;
        // console.log("tell me songIndex")
    }
    else {
        songIndex += 1;
    }
    // audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.src = songs[songIndex].filePath;

    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex].songName
    makeAllplays();
    document.getElementById(songIndex).classList.add('fa-pause-circle')
    document.getElementById(songIndex).classList.remove('fa-play-circle')    
}

audioElement.addEventListener('ended', ()=>{
    
    console.log("playnextsong")
    nextsong();
})