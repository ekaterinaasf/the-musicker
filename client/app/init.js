fetch("/api/artists")
  .then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  })
  .then((books) => {
    renderList("artists", "ArtistId", books); //write
  })
  .catch((err) => console.error(err));

document.getElementById("table").addEventListener("change", (e) => {
  if (e.target.value === "playlists") {
    fetch("/api/playlists")
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((books) => {
        renderList(e.target.value, "PlaylistId", books); //write
      })
      .catch((err) => console.error(err));
  }
  if (e.target.value === "songs") {
    fetch("/api/songs")
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((books) => {
        renderList(e.target.value, "TrackId", books); //write
      })
      .catch((err) => console.error(err));
  }
  if (e.target.value === "artists") {
    fetch("/api/artists")
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
      .then((books) => {
        renderList(e.target.value, "ArtistId", books); //write
      })
      .catch((err) => console.error(err));
  }
});

document.getElementById("save-button").addEventListener("click", (e) => {
  let tableName = e.target.form.tableName.value;
  console.log("Table name is " + tableName);
  let item = {};
  const name = e.target.form.name.value; //Name
  item.Name = name;
  console.log(name);
  if (tableName === "songs") {
    item.Composer = e.target.form.title.value;
    item.Milliseconds = Number(e.target.form.time.value) * 60000;
    item.Bytes = Number(e.target.form.size.value) * 1000;
    item.UnitPrice = Number(e.target.form.price.value);
  }
  console.log(item);
  saveItem(tableName, item); //write
  e.preventDefault();
});
