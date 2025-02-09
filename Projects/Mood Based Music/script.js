const moodSongs = {
  Happy: '🎶 "Happy" by Pharrell Williams',
  Sad: '🎶 "Someone Like You" by Adele',
  Energetic: '🎶 "Eye of the Tiger" by Survivor',
  Relaxed: '🎶 "Weightless" by Marconi Union',
};

const Library = {
  Happy: "./Music4.mp3",
  Sad:"./Music2.mp3",
  Energetic:"./Music1.mp3",
  Relaxed:"./Music3.mp3",
};


document.getElementById("music-generate").addEventListener('click',PlaySong);

function PlaySong(){
    const Mood = document.getElementById('mood').value;
    let Music;

    if(Mood && moodSongs[Mood]){
        Music=`Based on your mood , we suggest: ${moodSongs[Mood]}
        <audio controls autoplay>
        <source src= "${Library[Mood]}" type="audio/mpeg">
        Music Not supported!
        </audio>
        `;
        
    }else{
        Music=`Sorry ! Could Not Find Any Music !`
    }

    document.getElementById('music').innerHTML = Music;

}