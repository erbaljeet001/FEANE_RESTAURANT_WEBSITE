import "./BookTable.css"

const BookTable = () => {
  return (
    <>
      
        
      <div className="container-fluid  booktbl ">
        <div className='container   '>
             <div className='row x1'></div>
          <div className='row  '>
            <div className='col-sm-6 side1'>
              <div className=" mt-5 "> 
                <h2 className="mb-4" style={{fontFamily:'cursive'}}>Book A Table</h2>
                 <input className="form-control mb-4 fs-5" type="text" placeholder="Your Name"/>
                 <input className="form-control mb-4 fs-5" type="number" placeholder="Phone Number"/>
                <input className="form-control mb-4 fs-5 border-none" type="email" placeholder="Your Email" />
                
                <select className="form-select fs-5" aria-label="Default select example">
                <option>How many persons?</option>
                <option value={1}>2</option>
                <option value={2}>3</option>
                <option value={3}>4</option>
                <option value={3}>5</option>
                 </select>

               
                 <input className="form-control mb-4 mt-4  fs-5 " type="date"/>
                </div>
              <button className='btn btn-warning rounded-5 w-50  fs-4 text-light'>Book Now</button>
            </div>
            <div className="col-sm-6   map ">
                <iframe className="rounded-3"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837846.7963330774!2d84.48750471848537!3d25.884464248199976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3fed1bbae325!2sBihar!5e0!3m2!1sen!2sin!4v1784291413244!5m2!1sen!2sin"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Google Map"
                ></iframe>
              </div>
            
             </div>
             <div className='row x1'></div>
             </div>
      </div>
    </>
  )
}

export default BookTable