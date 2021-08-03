const dateFormat = (dateText) => {
  if(dateText){
    let date = new Date(dateText.replace(/-/g, '/'))
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    return y + '.' + String(m).padStart(2, '0') + '.' + String(d).padStart(2, '0')
  }
  else{
    return ''
  }
}

const priceFormat = (priceNum) => {
  const formatter = new Intl.NumberFormat('ja-JP')
  return '¥' + formatter.format(priceNum)
}

const isSingleBytes = (text) => {
  for (var i = 0; i < text.length; i++) {
    let char = text[i]
    if(!char.match(/^[A-Za-z0-9\s]*$/)){
      return false
    }
  }
  return true
}

export default ({}, inject) => {
  inject('dateFormat', dateFormat)
  inject('priceFormat', priceFormat)
  inject('isSingleBytes', isSingleBytes)
}
