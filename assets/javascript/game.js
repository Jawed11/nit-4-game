const renderGems = () => {
    document.getElementById('gems').innerHtML =''
 for(let i = 0; i < 3; i++) {
     const random = Math.floor(Math.random() * 30) +1
   let gemElem = document.createElement('div')
    gemElem.className = 'co s4'
    gemElem.innnerHTML = `
    div class = "card" data->value= "${random} >
    div class = "card-image">
     <img src ="./gem${i + 1}">.png"
    </div>
    </div>
    
    `
  document.getElementById('gems').append(gemElem)

  }
}


console.log(renderGems)


