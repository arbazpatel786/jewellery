import './SideBar.css'

const Slidebar=()=>{
    return (
<>

<section id="home">
  <div id="carouselExampleControls" class="carousel" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./images/bg/bg-1.jpg" class="d-block w-100" alt="img-1" />
        <div class="carousel-caption text-center">
          <h1>up to 45% off</h1>
          <p>This unique jewelry is handcrafted on the beautiful island of Nantucket using fine silver and semi
            precious stones.</p>
          <a href="#" class="main-btn">Shop now</a>
        </div> 
      </div>
      <div class="carousel-item">
        <img src="./images/bg/bg-2.jpg" class="d-block w-100" alt="img-2" />
        <div class="carousel-caption text-center">
          <h1>up to 45% off</h1>
          <p>This unique jewelry is handcrafted on the beautiful island of Nantucket using fine silver and semi
            precious stones.</p>
          <a href="#" class="main-btn">Shop now</a>
        </div> 
      </div>
      <div class="carousel-item">
        <img src="./images/bg/bg-3.jpg" class="d-block w-100" alt="img-3" />
        <div class="carousel-caption text-center">
          <h1>up to 45% off</h1>
          <p>This unique jewelry is handcrafted on the beautiful island of Nantucket using fine silver and semi
            precious stones.</p>
          <a href="#" class="main-btn">Shop now</a>
        </div> 
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</section> 


</>

    )
}
export default Slidebar;