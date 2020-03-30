export function renderItems(itemArray, titleContainerId, blogContainerId) {
    //render titles to a container
    let titleContainer = document.getElementById(titleContainerId)
    let blogContainer = document.getElementById(blogContainerId)

    itemArray.forEach(item => {
        let titleBox = `<button class='latest-blog-title' id='${item.id}'>${item.title}</button>`
        titleContainer.innerHTML += titleBox
    })
    //render latest blog to the container
    let blogBox =
        `
    <div class="blog-box">
        <h3 class="blog-title">${itemArray[0].title}</h3>
        <h4 class="blog-author">${itemArray[0].author}</h4>
        <p class="blog-content">${itemArray[0].content}</p>
    </div>`
    blogContainer.innerHTML = blogBox

    //attach event listener to title container 
    titleContainer.addEventListener('click', (event) => {
        if (event.target.className === 'latest-blog-title') {
            let itemId = event.target.id
            let blogItem = itemArray.find(item => item.id === itemId)
            blogContainer.innerHTML = `
            <div class="blog-box">
                <h3 class="blog-title">${blogItem.title}</h3>
                <h4 class="blog-author">${blogItem.author}</h4>
                <p class="blog-content">${blogItem.content}</p>
            </div>`
        }
    })
    //create function to render the blog with id that matches the id of the title clicked

}