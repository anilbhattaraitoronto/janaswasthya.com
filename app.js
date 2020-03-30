import { blogs } from '/modules/data/blogs.js'
import { renderItems } from '/modules/methods/renderItems.js'

mainApp()

function mainApp() {
    renderItems(blogs, 'latest-titles', 'blogs')
}