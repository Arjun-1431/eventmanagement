import { useNavigate } from 'react-router-dom'
import '../component/gallery.css'
export default function Gallery()



  {

    const navigate = useNavigate()
    const handleevent=()=>{
     navigate('/booking')
    }

    return (
        <>
       <div class="main">
  <h1>Discover Events For All The
Things You Love</h1>
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="assets/grandHotel.jpg"/></div>
        <div class="card_content">
          <h1 class="card_title">The GRAND HOTEL</h1>
          <p class="card_text">Early book hotel before Sat, 06 Apr, 2024 8:00 .50% off</p>
         
          <button class="btn card_btn"  onClick={handleevent} >Book Now</button>
         

        

        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="assets/light_theme.jpg"/></div>
        <div class="card_content">
        <h1 class="card_title">LIGHT THEME DECORATION</h1>
          <p class="card_text">Book theme decoration before Sat,06 Apr, 2024 8:00 PM  30% off</p>
          <button class="btn card_btn" onClick={handleevent} >Book Now</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="assets/slide4.jpg"/></div>
        <div class="card_content">
        <h1 class="card_title">ROKSOM HALL</h1>
          <p class="card_text">Book theme decoration before Sat,06 Apr, 2024 8:00 PM  30% off</p>
          <button class="btn card_btn" onClick={handleevent} >Book Now</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="assets/pool.jpg"/></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn" onClick={handleevent} >Book Now</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="assets/cafe.jpg"/></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn" onClick={handleevent} >Book Now</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="assets/Concert.jpg"/></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button class="btn card_btn" onClick={handleevent} >Book Now</button>
        </div>
      </div>
    </li>
  </ul>
</div>

<h3 class="made_by">Made with ♡</h3>

        </>
    )
}