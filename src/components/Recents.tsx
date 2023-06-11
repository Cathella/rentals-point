function Recents() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h3 className="text-center">Recently Added Properties</h3>
        <div className="row">
          <div className="col-lg-3">
            <div className="bg-white p-3 border-3 rounded-5">
              <div className="bg-dark py-3"></div>
              <div className="d-flex">
                <h4>UGX. 750,000</h4>
                <span>(per month)</span>
              </div>
              <div>Kiwatule</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bg-white p-3 border-3 rounded-5">
              <div className="bg-dark py-3"></div>
              <div className="d-flex">
                <h4>UGX. 500,000</h4>
                <span>(per month)</span>
              </div>
              <div>Namugongo</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bg-white p-3 border-3 rounded-5">
              <div className="bg-dark py-3"></div>
              <div className="d-flex">
                <h4>UGX. 370,000</h4>
                <span>(per month)</span>
              </div>
              <div>Makerere</div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="bg-white p-3 border-3 rounded-5">
              <div className="bg-dark py-3"></div>
              <div className="d-flex">
                <h4>UGX. 900,000</h4>
                <span>(per month)</span>
              </div>
              <div>Wakiso</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recents;