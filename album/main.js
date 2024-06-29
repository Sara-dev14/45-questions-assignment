function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Artist One', 'Album One');
var album2 = make_album('Artist Two', 'Album Two');
var album3 = make_album('Artist Three', 'Album Three', 10);
console.log(album1);
console.log(album2);
console.log(album3);
