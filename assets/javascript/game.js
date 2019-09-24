const renderGems = () => {
    document.getElementById('gems').innerHtML =''
 for (let i = 0; i < 3; i++) {
     const random = Math.floor(Math.random() * 20) +1
   let gemElem = document.createElement('div')
    gemElem.className = 'co s4'
    gemElem.innnerHTML = `
    div class = "card" data->value= "${random} >
    div class = "card-image">
    <img src ="./gems${i + 1}">
    </div>
    </div>
    
    `
  document.getElementById('gems').append(gemElem)

  }
}

renderGems()

console.log(renderGems)


