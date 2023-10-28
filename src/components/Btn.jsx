import './Btn.css'
import btn_img from '../images/icon-arrow.svg'


const Btn = ({click}) => {
  return (
    <div>
      <button className='btn' onClick={click}><img src={btn_img} alt='button'/></button>
    </div>
  )
}

export default Btn