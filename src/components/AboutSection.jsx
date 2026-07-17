import './AboutSection.css'

const AboutSection = () => {
  return (
    <>
      <div className="container-fluid  aboutSec">
        <div className='container  innerCont '>
             <div className='row x1'></div>
          <div className='row y'>
              <div className='col-sm-6  leftImg'> </div>
            <div className='col-sm-6 textright'  > 
              
              <h1>We are Feane</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum adipisci minima praesentium asperiores assumenda ullam rerum nobis. Corporis esse consectetur iusto eaque, officiis dolor error tempora obcaecati, saepe explicabo reiciendis, neque illum. Tempore doloremque veritatis unde molestiae obcaecati nostrum nemo deleniti expedita incidunt accusantium quas, nisi adipisci pariatur aspernatur facilis.</p>
              <button className='btn btn-warning rounded-5 w-25 text-light'>Read More</button>
            </div>
            
             </div>
             <div className='row x1'></div>
             </div>
      </div>
    </>
  )
}

export default AboutSection