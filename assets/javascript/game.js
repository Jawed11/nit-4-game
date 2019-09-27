const renderGems = () => {
    document.getElementById('gems').innerHTML =''
 for (let i = 0; i < 3; i++) {
     const random = Math.floor(Math.random() * 20) + 1
   let gemElem = document.createElement('div')
    gemElem.className = 'col s4'
    gemElem.innerHTML = `
    <div class="card" data-value="${random}">
      <div class="card-image">
        <img src="C:\Users\Jawed\Documents\nit-4-game\assets\gems\gem${i + 1}".gif">
      </div>
    </div>
    `
  document.getElementById('gems').append(gemElem)

  }
}
document.addEventListener('click', event => {
  if (even.target.className === 'gem'){
    console.log('you clicked a gem')
  
  }
})




