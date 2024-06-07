function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between container align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            BookHub
          </a>
          <span className="text-muted">© 2024 Company, Inc</span>
        </div>
        {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-muted" href="www.twitter"><svg className="bi" width="24" height="24"></svg></a></li>
          <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
          <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
        </ul> */}
       </footer>
    )
}

export default Footer