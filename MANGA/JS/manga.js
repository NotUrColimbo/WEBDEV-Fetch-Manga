const mangaElement = document.getElementById("manga");
const dataManga = document.querySelector("[data-manga]")
const dataMangaContainer = document.querySelector("[data-manga-container]") 
const searchInput = document.querySelector("[data-search]")

let manga = []

searchInput.addEventListener("input", (x) => {
    const value = x.target.value.toLowerCase()
    manga.forEach(manga => {
        const isVisible = 
        manga.title.toLowerCase().includes(value) || 
        manga.detail.toLowerCase().includes(value)
    manga.element.classList.toggle("hide", !isVisible)
    })
    console.log(manga) 
})

fetch ('https://api.mangadex.org/manga?limit=10&includes%5B%5D=cover_art')
    .then ((response) =>response.json())
    .then ((data) => {
        for (let i = 0; i <= 10; i++){
            const firstManga = data.data[i];
            let title = firstManga.attributes.title.en;
            let detail = firstManga.attributes.description.en;
            let mangaId = firstManga.id;
            let frontCover = firstManga.relationships[2].attributes.fileName;
        
            
            mangaElement.innerHTML += `<div class="manga-card">
                                    <h1 class="Title">${title}</h1> 
                                    <p class="Detail">${detail}</p>
                                    <img class="manga-image" src="https://uploads.mangadex.org/covers/${mangaId}/${frontCover}">
                                    </div>`;
            console.log(firstManga)   
        }
        manga = data.map(manga => {
            const card = dataManga.content.cloneNode(true).children[0]
            console.log(manga)  
        
            const Title = card.querySelector("[data-Title]")
            const Detail = card.querySelector("[data-Detail]")
            Title.textContent = manga.title
            Title.textContent = manga.detail

            dataMangaContainer.append(card)

            return {title: manga.title, detail: manga.detail, element: card}
        });
    }) 