async function getGif(input){
  const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
  const img = document.querySelector('#glphy');
  const random = getRandomeInt(res.data.data.length - 1);
  const gifLink = `${res.data.data[random].images.original.url}`;
  return gifLink;
}


function getRandomeInt(max){
  return Math.floor(Math.random() * max);
}


const form = document.querySelector('#searchform');
form.addEventListener('submit', async function(e){
  e.preventDefault();
  //img
  try{
    let userInput = document.querySelector('#search').value;
        gif = document.createElement('img');
        gif.src = await getGif(userInput);
    let gifDiv = document.createElement('div');
    gifDiv.setAttribute('class', 'gifDiv');

    //result
    gifDiv.appendChild(gif);
    result.appendChild(gifDiv);
    form.reset();
  } catch(e){
    alert(`There was an issue searching for ${userInput}. Please try again :)`)
  }

})

const remove = document.querySelector('#remove');
remove.addEventListener('click', function(e){
  e.preventDefault();
  const removeAll = document.querySelectorAll('.gifDiv');
  for(let item of removeAll){
    item.remove();
  }

})
