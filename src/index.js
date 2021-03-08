// ./src/index.js
// import posts from "./posts/post"
// import album from "./album/album"
const update = () => {
  const hash = window.location.hash || "#posts"
  const mainElement = document.querySelector(".main")
  mainElement.innerHTML = ""
  if(hash === "#posts") {
    // mainElement.appendChild(posts())
    import(/* webpackChunkName: 'post' */'./posts/post').then(({default: posts}) => {
      mainElement.appendChild(posts())
    })
  } else if (hash === "#album") {
    // mainElement.appendChild(album())
    import(/* webpackChunkName: 'album' */'./album/album').then(({default: album}) => {
      mainElement.appendChild(album())
    })
  }
}
window.addEventListener('hashchange', update)
update()