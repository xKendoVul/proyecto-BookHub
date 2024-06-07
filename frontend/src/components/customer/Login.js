import { Link } from "react-router-dom";
import logo from '../../logo.svg'

function Login (props) {
    return (
        <div className="container mt-4">
            <div style={{justifyContent: 'center'}} className="row">
                <div className="col-md-8 col-12">
                    <div className="card">
                        <h4 className="card-header">Registro de usuarios</h4>
                        <div>
                            <form>
                            <div  className="mb-3">
                                <label style={{with: "200px"}} for="username" className="form-label">Nombre Usuario</label>
                                <input type="text" className="form-control" id="username"/>
                            </div>
                            <div className="mb-3">
                                <div className="mb-3">
                                    <label for="pwd" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="pwd"/>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Acceder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;