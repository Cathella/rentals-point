function Categories() {
  return (
    <div className="py-5 custom-light-green">
      <div className="container">
        <h3 className="text-center">Move to what Comforts you</h3>
        <div className="row">
          <div className="text-center col-lg-4">
            <div className="bg-dark py-5"></div>
            <h4>Apartments</h4>
            <div>
              <a href="#" className="btn btn-outline-info rounded-pill px-4">100+ Properties</a>
            </div>
          </div>
          <div className="text-center col-lg-4">
            <div className="bg-dark py-5"></div>
            <h4>Houses</h4>
            <div>
              <a href="#" className="btn btn-outline-info rounded-pill px-4">900+ Properties</a>
            </div>
          </div>
          <div className="text-center col-lg-4">
            <div className="bg-dark py-5"></div>
            <h4>Commercial</h4>
            <div>
              <a href="#" className="btn btn-outline-info rounded-pill px-4">400+ Properties</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories;