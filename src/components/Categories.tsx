import Category from "./Category";

function Categories() {
  return (
    <div className="py-5 custom-light-green">
      <div className="container">
        <h3 className="text-center pb-5">Move to what Comforts you</h3>
        <div className="row">
          <Category />
          <Category />
          <Category />
          {/* <div className="text-center col-lg-4">
            <div className="houses-img mb-3"></div>
            <h4 className="mb-3">Houses</h4>
            <div>
              <a href="#" className="categories-button px-3">900+ Properties</a>
            </div>
          </div> */}
          {/* <div className="text-center col-lg-4">
            <div className="commercial-img mb-3"></div>
            <h4 className="mb-3">Commercial</h4>
            <div>
              <a href="#" className="categories-button px-3">400+ Properties</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Categories;