const renderList = (tableName, tableId, books) => {
  const list = books
    .map((book) => {
      const loadButton = document.createElement("button");
      loadButton.innerHTML = "Select";
      loadButton.onclick = () => fetchAndLoadItem(tableName, book[tableId]); //write GET ID

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "X";
      deleteButton.onclick = () => deleteItem(tableName, book[tableId]); //write

      const li = document.createElement("li");
      li.innerHTML = book[tableId] + " " + book.Name;
      li.appendChild(loadButton);
      li.appendChild(deleteButton);

      return li;
    })
    .reduce((all, next) => {
      all.appendChild(next);
      return all;
    });

  const container = document.getElementById("list");
  container.innerHTML = "";
  container.appendChild(list);
};
