function generateCard(src, title) {
    let result = document.createElement("div")
    result.innerHTML = `<img src="${src}" alt="${title}" class="card-img">
                        <div class="card-header">
                          <h2>${title}</h2>
                        </div>`
    result.classList = "card"
    return result
}

function generateError() {
    let result = document.createElement("div")
    result.innerHTML = `
                        <div class="card-header">
                          <h2>⚠Произошла ошибочка⚠</h2>
                        </div>
                        <p>Больше информации в консоли</p>`
    result.classList = "card"
    return result
}

function getGallery() {
    return document.getElementById("gallery-content")
}


function getLoader() {
    return "<div id=\"loader\" class=\"lds-roller\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>"
}

function loadContent(){
    let albumId = Math.floor(Math.random() * 10);
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            .then((response) => {
                document.getElementById("loader").remove()
                return response.json();
            })
            .then((data) => {

                let gallery = getGallery();

                for (let i = 0; i < Math.floor(Math.random() * (data.length)); i++) {
                    let card = data[i];
                    gallery.appendChild(generateCard(card.thumbnailUrl, card.title));
                }

            })
            .catch((error) => {
                console.error(error)
                let gallery = getGallery();
                gallery.appendChild(generateError());
            });

}

function refreshContent() {
    let gallery = getGallery();
    gallery.innerHTML = getLoader();
    loadContent()
}

function startUp() {
    let gallery = getGallery();
    gallery.innerHTML = getLoader();

    refreshContent()
    document.getElementById("refresh").addEventListener("click", refreshContent)
}

document.addEventListener("DOMContentLoaded", startUp)
