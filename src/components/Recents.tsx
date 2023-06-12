function Recents() {
  return (
    <div className="custom-light-green py-5">
      <div className="container">
        <h3 className="text-center pb-5">Recently Added Properties</h3>
        <div className="row">
          <div className="col-lg-3">
            <div className="bg-white p-3 border-3 rounded-5">
              <div className="bg-dark py-3"></div>
              <div className="d-flex">
                <h4>UGX. 750,000</h4>
                <span className="times">(per month)</span>
              </div>
              <div className="location">Kiwatule</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bg-white p-3 border-3 rounded-5">
              <div className="bg-dark py-3"></div>
              <div className="d-flex">
                <h4>UGX. 500,000</h4>
                <span className="times">(per month)</span>
              </div>
              <div className="location">Namugongo</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bg-white p-3 border-3 rounded-5">
              <div className="bg-dark py-3"></div>
              <div className="d-flex">
                <h4>UGX. 370,000</h4>
                <span className="times">(per month)</span>
              </div>
              <div className="location">Makerere</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bg-white p-3 border-3 rounded-5">
              <div className="bg-dark py-3"></div>
              <div className="d-flex">
                <h4>UGX. 900,000</h4>
                <span className="times">(per month)</span>
              </div>
              <div className="location">Wakiso</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recents;