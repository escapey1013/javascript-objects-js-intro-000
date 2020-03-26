var playlist = { billWithers: "Lovely Day" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = "songTitle";
  return playlist;
}

function removeFromPlaylist(playlist, artistName, songTitle) {
  delete playlist[artistName];
  return playlist;
}






















// var playlist = {Singer1: 'song1'};
//
// function updatePlaylist(object, artistName, song) {
//   object[artistName] = song;
//   return object;
// }
//
// function removeFromPlaylist(playlist, artistName) {
//   delete playlist[artistName];
//   return playlist
// }
