import { useParams } from 'react-router-dom'

function Book() {
const {id} = useParams()
  return (
    <div>
      <h1>Book Detail</h1>
      id:{id}
    </div>
  )
}

export default Book
