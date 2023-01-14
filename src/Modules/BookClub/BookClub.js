import './BookClub.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function BookClub() {
  const [bookClub, setBookClub] = useState({})
  const { id } = useParams();

  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`)
    .then((res) => {
      setBookClub(res.data)
      console.log(res)
    })

  }, [id])

  return (
    <div className='bookClub_container'>
      <div>
        <ul>
          <li>
            <h1 className='bookClubTitle'>{bookClub.title} </h1>
              <img className='bookClubImg' src={bookClub.images} alt='bookClub-img'/>
                <div className='bookClubFooter'>
                  <h2 className='bookClubAuthor'>Author</h2>
                  <a className='bookClubLink' href={`/bookClub/${parseInt(id) +1}`}>Next bookClub ({parseInt(id)+1})</a>
                
                </div>
                <div className='bookClubDescription'>
                <code>{JSON.stringify(bookClub.description)}</code>
                </div>
          </li>
        </ul>
      </div>
     
      <br />
      <br />
      <br />
    </div>
    
    
  )
}

export default BookClub
