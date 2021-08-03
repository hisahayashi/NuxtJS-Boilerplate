export default function (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
      // , offset: { x: 0, y: 10 }
    }
  }

  let position = { x: 0, y: 0 }
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(position)
    }, 500)
  })
}
