const Card = (prop) => (
    <div className="col-sm-6">
              <div className="card" key={prop.rocket.id} >
                <img 
                  src={prop.rocket.flickr_images[1]} 
                  class="card-img-top" 
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{prop.rocket.name}</h5>
                  <p className="card-text">
                    {prop.rocket.description}
                  </p>
                  <a 
                    href="#" 
                    className="btn btn-primary" 
                    data-toggle="modal" 
                    data-target={`#popup${prop.rocket.id}`} > View more 
                  </a>
                </div>
              </div>
            </div>
);

export default Card;