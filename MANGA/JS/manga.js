const mangaElement = document.getElementById("manga");

fetch ('https://api.mangadex.org/manga?limit=10&includes%5B%5D=cover_art')
.then ((response) =>response.json())
.then ((data) => {
    const firstManga = data.data[0];
    let title = firstManga.attributes.title.en;
        console.log(title)
        
    let detail = firstManga.attributes.description.en;
        console.log(detail)

    let mangaId = firstManga.id;
        console.log(mangaId)

    let frontCover = firstManga.relationships[2].attributes.fileName;
        console.log(frontCover)
        
    mangaElement.innerHTML = `<h1>${title}</h1> 
                               <p>${detail}</p>
                              <img src="https://uploads.mangadex.org/covers/${mangaId}/${frontCover}">`
    console.log(mangaElement)
});