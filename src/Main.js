import dish1 from './assets/dish1.jpg'
import dish2 from './assets/dish2.jpg'
import dish3 from './assets/dish3.jpg'
import './Main.css';

function Main(){
    return(
        <>
        <h1>
            Restaurant Recommendations and Tempting Dishes
            </h1>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={dish1} class="d-block w-100" alt="Bruschetta"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Bruschetta</h5>
        <p>An Italian antipasto consisting of grilled bread rubbed with garlic and topped with olive oil and salt.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={dish2} class="d-block w-100" alt="Pasta"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Pesto Rosso Pasta</h5>
        <p>An intensely flavourful pesto rosso pasta made with sun-dried tomatoes, fresh basil and pine nuts.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={dish3} class="d-block w-100" alt="Greek salad"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Greek Salad</h5>
        <p>A Popular salad made with pieces of tomatoes, cucumbers, onion, feta cheese and dressed with salt .</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )

}
export default Main;