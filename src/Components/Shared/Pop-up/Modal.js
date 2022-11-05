// import React from 'react'
// import { useNavigate, } from 'react-router-dom'


// const Modal = ({ open,onClose }) => {
//   let navigate = useNavigate();
//     if(!open) return null
    
//   return (    
//     <div onClick={onClose} className='overlay'>
//       <div onClick={(e) => {e.stopPropagation();}} className='modalContainer'>        
//         <div className='modalRight'>
//             <p onClick={onClose} className='closeBtn'>X</p>
//             <div className='content'>
//               <h1>Güzel Seçim!</h1>
//               <br />

//               <p>Martin Eden, 1909'da Amerikalı yazar Jack London tarafından yazılan ve yazar olmanın mücadelesini veren genç işçi Martin Eden'i konu edinen romandır. Kitabın yazarı olan London'ın aksine protagonist Eden, sosyalizmi "köle ahlakı" olarak niteleyerek reddetmekte ve onun yerine Nietzsche'nin bireyciliğine inanmaktadır</p>
//             </div>
//             <div className='btnContainer'>
//             <button onClick={() => {navigate('/Book1')}} className='btnPrimary'>Kitabı İncele</button>
//             <button className='btnOutline' onClick={onClose}>Kapat</button>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Modal
