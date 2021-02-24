import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then((response) => {
  const todo = response.data
  const { id, title, finished } = todo

  console.log(`the todo with id: ${id}
  has a title of: ${title}.
  Is it finished? ${finished}`)
})
