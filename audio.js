// audio.js

// Function to play the audio
function playAudio() {
  const audioPlayer = document.getElementById('audio-player');
  if (audioPlayer) {
    audioPlayer.play();
  }
}
// Find the play button and add a click event listener
const playButton = document.getElementById('playButton');
if (playButton) {
	if (!isAudioPlaying()) {
	playButton.addEventListener('click', playAudio);}
}

const playButton2 = document.getElementById('playButton2');
if (playButton2) {
	if (!isAudioPlaying()) {
	playButton2.addEventListener('click', playAudio);}
}

// Function to check if the audio is already playing
function isAudioPlaying() {
  const audioPlayer = document.getElementById('audio-player');
  return audioPlayer && !audioPlayer.paused;
}

// Check if the audio is already playing on page load, if not, play it.
window.addEventListener('load', function() {
  if (!isAudioPlaying()) {
    playAudio();
  }
});

// Function to handle the beforeunload event
function handleBeforeUnload() {
  const audioPlayer = document.getElementById('audio-player');
  if (audioPlayer && !audioPlayer.paused) {
    // Pause the audio before leaving the page
    audioPlayer.pause();

    // Save the current audio time to resume playback later
    sessionStorage.setItem('audioTime', audioPlayer.currentTime);
  }
}

// Add the beforeunload event listener to save audio state before leaving the page
window.addEventListener('beforeunload', handleBeforeUnload);

// Function to handle the onload event for the new page
function handleNewPageLoad() {
  const audioPlayer = document.getElementById('audio-player');
  const savedAudioTime = sessionStorage.getItem('audioTime');

  if (audioPlayer && savedAudioTime) {
    // Set the audio time to the saved value and play the audio
    audioPlayer.currentTime = parseFloat(savedAudioTime);
    playAudio();

    // Clear the saved audio time from sessionStorage
    sessionStorage.removeItem('audioTime');
  }
}

// Add the onload event listener to resume audio playback on new page load
window.addEventListener('load', handleNewPageLoad);