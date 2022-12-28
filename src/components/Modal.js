const Modal = (prop) => (
    <div 
        className="modal fade" 
        id={`popup${prop.rocket.id}`} 
        tabindex="-1" 
        aria-labelledby="exampleModalLabel" 
        aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{prop.rocket.name}</h5>
          <button 
            type="button" 
            className="close" 
            data-dismiss="modal" 
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
            <div 
                id={`carousel${prop.rocket.id}Controls`} 
                className="carousel slide" 
                data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={prop.rocket.flickr_images[0]} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={prop.rocket.flickr_images[1]} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button 
                    className="carousel-control-prev" 
                    type="button" 
                    data-target={`#carousel${prop.rocket.id}Controls`}
                    data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </button>
                <button 
                    className="carousel-control-next" 
                    type="button" 
                    data-target={`#carousel${prop.rocket.id}Controls`} 
                    data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </button>
            </div>

            <div className="row rocket-info">
                <div className="col-sm-3">
                    <h4>Height</h4>
                    <p>{prop.rocket.height.meters} meters</p>
                </div>
                <div className="col-sm-3">
                    <h4>Diameter</h4>
                    <p>{prop.rocket.diameter.meters} meters</p>
                </div>
                <div className="col-sm-3">
                    <h4>Mass</h4>
                    <p>{prop.rocket.mass.kg} kg</p>
                </div>
                <div className="col-sm-3">
                    <h4>First flight</h4>
                    <p>{prop.rocket.first_flight}</p>
                </div>

            </div>
        </div>
      </div>
    </div>
  </div>
); 

export default Modal;