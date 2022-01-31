// MUSIC PROJECT APP


const  play  =() =>{
    // this fucntion gets the first'a' tag and changes the href 
    // so that once it is clicked it goes to the html file containing its content
    let playing=document.getElementsByTagName('A')[1]
    playing.href='song-one.html'
}

const playsong=()=>{
    // this function is an onclick function of the the play and pause 
    // whereby if the play is clicked the image changes to pause and then the audio plays 
    // and if it is clicked again the image changes to play and the audio pauses

    let audio = document.getElementById('myaudio')
    let image = document.getElementById('pauseimage').className
    if(image=='fas fa-play'){
        document.getElementById('pauseimage').className='fas fa-pause'
        audio.play()
        document.querySelector('.one').style.animationPlayState='running'
        document.querySelector('.two').style.animationPlayState='running'
        document.querySelector('.three').style.animationPlayState='running'
        // check line 119 for this function
        var setty =setInterval(increase,1000)

        sett()
    }
    else{
        clearInterval(setty)
        document.getElementById('pauseimage').className='fas fa-play'
        audio.pause()
        document.querySelector('.one').style.animationPlayState='paused'
        document.querySelector('.two').style.animationPlayState='paused'
        document.querySelector('.three').style.animationPlayState='paused'
        let curtime=document.getElementById('myaudio').currentTime
        curtime-=1
        
    }
}

const songtwo = ()=>{
     // this fucntion gets the second 'a' tag and changes the href 
    // so that once it is clicked it goes to the html file containing its content
    let playing=document.getElementsByTagName('A')[2]
    playing.href='song-two.html'
}

const songthree = ()=>{
     // this fucntion gets the third'a' tag and changes the href 
    // so that once it is clicked it goes to the html file containing its content
    let playing=document.getElementsByTagName('A')[3]
    playing.href='song-three.html'
}
const songfour = ()=>{
     // this fucntion gets the fourth'a' tag and changes the href 
    // so that once it is clicked it goes to the html file containing its content
    let playing=document.getElementsByTagName('A')[4]
    playing.href='song-four.html'
}
const songfive = ()=>{
     // this fucntion gets the fifth'a' tag and changes the href 
    // so that once it is clicked it goes to the html file containing its content
    let playing=document.getElementsByTagName('A')[5]
    playing.href='song-five.html'
}
const songsix = ()=>{
     // this fucntion gets the sixth'a' tag and changes the href 
    // so that once it is clicked it goes to the html file containing its content
    let playing=document.getElementsByTagName('A')[6]
    playing.href='song-six.html'
}
const songseven = ()=>{
     // this fucntion gets the seventh'a' tag and changes the href 
    // so that once it is clicked it goes to the html file containing its content
    let playing=document.getElementsByTagName('A')[7]
    playing.href='song-seven.html'
}
const love = () =>{
    //  this function changes the color of the heart button 
    //  whereby when it is clicked the color changes to red and if it is cliced again the color changes to normal
    let heart = document.querySelector('.love')
   
    if(heart.style.color=='rgb(70, 65, 65)'){
        heart.style.color='rgb(207, 8, 8)'
    }
    else{
        heart.style.color='rgb(70, 65, 65)'
    }
    
}
const replay = () =>{
     //  this function changes the color of the replay button 
    //  whereby when it is clicked the color changes to green and if it is cliced again the color changes to normal
    let heart = document.querySelector('.replay')
    if(heart.style.color=='rgb(70, 65, 65)'){
        heart.style.color='green'

    }
    else{
        heart.style.color='rgb(70, 65, 65)'
    }
   
}
const shuffle = () =>{
     //  this function changes the color of the shuffle button 
    //  whereby when it is clicked the color changes to green and if it is cliced again the color changes to normal
    let heart = document.querySelector('.shuffle')
    if(heart.style.color=='rgb(70, 65, 65)'){
        heart.style.color='green'
    }
    else{
        heart.style.color='rgb(70, 65, 65)'
    }
    
}
var i = 0

// check line 25 where this function is called
const increase = ()=>{
// this function is tho make the input 'range' move in accordance to the duration of the music file
let ranger=document.getElementById('ranger')

let duration = document.getElementById('myaudio').duration
let currenttime= document.getElementById('myaudio').currentTime
ranger.max=duration
//if the audios current time is = to the duration which means it has played to the end 
// this condition makes the music animation pauses
if(currenttime==duration){
    document.querySelector('.one').style.animationPlayState='paused'
    document.querySelector('.two').style.animationPlayState='paused'
    document.querySelector('.three').style.animationPlayState='paused'
}
//this condition makes the input[type='range'] value to be increasing in accordance to the increament 
// of the the audios current time
if(i<duration){
ranger.value=currenttime
} 

}
//this function here checks the <datalist>  <option> value to see 
//if that is what is in the input[type='search'].innerHTML
// e.g if the option picked.value is='Latest Trend' once it is selected the input[type='search'].innerHTML
//would be = 'Latest Trend' so once this happens once you click the submit button the href changes to 'song-one.html'
//which contains the 'latest trend' song datas
const find = ()=>{
    let search=document.getElementById('search')
    let searchval = search.value
    let options=document.getElementsByTagName('option')
    let Atag = document.getElementById('sub')

  switch (searchval){
      case options[0].value:
      Atag.href='song-one.html'
      break;
      case options[1].value:
      Atag.href='song-two.html'
      break;
      case options[2].value:
      Atag.href='song-three.html'
      break;
      case options[3].value:
      Atag.href='song-four.html'
      break
      case options[4].value:
      Atag.href='song-five.html'
      break;
      case options[5].value:
      Atag.href='song-six.html'
      break;
      case options[6].value:
      Atag.href='song-seven.html'
  }
  search.value=' '
}


//this function activates a different mode whereby a background video is activated 
//to make the page looks cool
function chillMode(){
//getting the background video id
let vids = document.getElementById('myVideo')
//if it is not visible before the onclick event
if(vids.style.visibility =='hidden'){
//onclick events makes the following code take place
    vids.style.visibility='visible'
    vids.playbackRate=0.3
    document.getElementsByTagName('i')[0].style.color='rgb(124, 135, 136)'
    document.getElementsByTagName('i')[4].style.color='rgb(124, 135, 136)'
    document.getElementsByTagName('i')[5].style.color='rgb(124, 135, 136)'
    document.getElementsByTagName('i')[6].style.color='rgb(124, 135, 136)'
    document.querySelector('.one').style.backgroundColor='rgb(124, 135, 136)'
    document.querySelector('.two').style.backgroundColor='rgb(124, 135, 136)'
    document.querySelector('.three').style.backgroundColor='rgb(124, 135, 136)'
    document.querySelector('.controls').style.backgroundColor='rgb(124, 135, 136)'
    document.querySelector('.artist').style.color='rgb(124, 135, 136)'
    document.querySelector('.name').style.color='rgb(124, 135, 136)'
    document.querySelector('.chill-mode').style.color='rgb(124, 135, 136)'
    document.querySelector('.chill-mode').innerHTML='  <span><i class="fas fa-headphones"></i>     Normal      <i class="fas fa-headphones"></i></span>'
    document.getElementById('songimage').style.border='5px solid rgb(124, 135, 136)'
    document.getElementById('songimage').style.borderTop=0
    console.log('it changed')
}
else {
    //and if it is visible after onclick event the onclick event  makes the following code take place
    vids.style.visibility='hidden'
    document.getElementsByTagName('i')[0].style.color='black'
    document.getElementsByTagName('i')[4].style.color='black'
    document.getElementsByTagName('i')[5].style.color='black'
    document.getElementsByTagName('i')[6].style.color='black'
    document.querySelector('.one').style.backgroundColor='black'
    document.querySelector('.two').style.backgroundColor='black'
    document.querySelector('.three').style.backgroundColor='black'
    document.querySelector('.controls').style.backgroundColor='white'
    document.querySelector('.artist').style.color='black'
    document.querySelector('.name').style.color='black'
    document.querySelector('.chill-mode').style.color='black'
    document.querySelector('.chill-mode').innerHTML='  <span><i class="fas fa-headphones"></i>     chill mode      <i class="fas fa-headphones"></i></span>'
    document.getElementById('songimage').style.border='none'
    document.getElementById('songimage').style.borderTop=0
    console.log('i hate bugs')  
}
}



// this is an automatic scroll function that makes the lyrics div scroll as the song plays
let o = 0
function scrollToBottom () {
    let div = document.getElementById('mainlyrics');
    let audio = document.getElementById('myaudio')
    div.style.marginTop =`${o-=40}%`
    if(audio.duration<200){
        div.style.marginTop =`${o-=50}%`
    }
    console.log(div.style.marginTop)
 }

function sett(){
   let setty= setInterval(scrollToBottom,4200)
}

const changeLyricsColor=()=>{
    let location = window.location.href
    let LyricsColor = document.getElementById('lyrics')
    switch(location){
        case 'https://damax-codz.github.io/Music-Player-App/song-one.html':
        LyricsColor.style.backgroundColor='rgb(185, 96, 226)'
        break;
        case 'https://damax-codz.github.io/Music-Player-App/song-two.html':
        LyricsColor.style.backgroundColor='rgb(204, 74, 23)'
        break;
        case 'https://damax-codz.github.io/Music-Player-App/song-three.html':
            LyricsColor.style.backgroundColor='rgb(148, 146, 144)'
        break;
        case 'https://damax-codz.github.io/Music-Player-App/song-four.html':
            LyricsColor.style.backgroundColor='rgb(61, 90, 187)'
        break;
        case 'https://damax-codz.github.io/Music-Player-App/song-five.html':
            LyricsColor.style.backgroundColor='rgb(49, 146, 78)'
        break;
        case 'https://damax-codz.github.io/Music-Player-App/song-six.html':
            LyricsColor.style.backgroundColor='rgb(174, 192, 179)'
        break;
        case 'https://damax-codz.github.io/Music-Player-App/song-seven.html':
            LyricsColor.style.backgroundColor='rgb(109, 108, 108)'
        break;
    }
    console.log(window.location.href)
}
