# Projects related to DOM

## project link
[click](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,index.html)


# solution code

## Project 1 color selector

```javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
  // event listner
  button.addEventListener('click', function(e){
      console.log(e)
      console.log(e.target)
      if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id
      }
      if(e.target.id === 'purple'){
        body.style.backgroundColor =  e.target.id;
      }
  })
})

```

## project 2 bmi

```javascript
const form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height`
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid weight`
  }
  else{
    const bmi =  (weight/((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`
  }

})

```


## project 3 digital clock

```javascript
const clock = document.getElementById('clock')

// update time on certain interval
setInterval(()=>{
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerText = date.toLocaleTimeString()
},1000)
```