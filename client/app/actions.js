const saveItem = (tableName, item) => {
  fetch("/api/" + encodeURIComponent(tableName), {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((itemList) => {
      renderList(itemList); //write
      alert("New item is saved on the server");
    })
    .catch((err) => {
      alert("Unable to save an item");
      console.error(err);
    });
};

const fetchAndLoadItem = (tableName, id) =>
  fetch("/api/" + encodeURIComponent(tableName) + "/" + encodeURIComponent(id))
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((data) => {
      const ul = document.createElement("ul");
      ul.innerHTML = "";
      if (tableName === "artists" || tableName === "playlists") {
        const li1 = document.createElement("li");
        li1.innerHTML = tableName + "Id: " + id;
        const li2 = document.createElement("li");
        li2.innerHTML = "Name: " + data[0].Name;
        ul.appendChild(li1);
        ul.appendChild(li2);
      }
      if (tableName === "songs") {
        const li1 = document.createElement("li");
        li1.innerHTML = tableName + "Id: " + id;
        const li2 = document.createElement("li");
        li2.innerHTML = "Name: " + data[0].Name;
        const li3 = document.createElement("li");
        li3.innerHTML = "Composer: " + data[0].Composer;
        const li4 = document.createElement("li");
        li4.innerHTML =
          "Duration (minutes): " +
          (Number(data[0].Milliseconds) / 60000).toFixed(2);
        const li5 = document.createElement("li");
        li5.innerHTML =
          "Size (Kbytes): " + (Number(data[0].Bytes) / 1000).toFixed(2);
        const li6 = document.createElement("li");
        li6.innerHTML = "Price (pounds): " + Number(data[0].UnitPrice);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        ul.appendChild(li4);
        ul.appendChild(li5);
        ul.appendChild(li6);
      }
      const container = document.getElementById("list");
      container.innerHTML = "";
      container.appendChild(ul);
    })
    .catch((err) => console.error(err));

const deleteItem = (tableName, id) => {
  fetch(
    "/api/" + encodeURIComponent(tableName) + "/" + encodeURIComponent(id),
    {
      method: "DELETE",
    }
  )
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((list) => {
      renderBookList(list); //write
      alert("Item is deleted");
    })
    .catch((err) => {
      alert("Unable to delete the item");
      console.error(err);
    });
};
