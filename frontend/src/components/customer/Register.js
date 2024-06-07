import { Link } from "react-router-dom";
import logo from '../../logo.svg'

function Register (props) {
    return (
        <div className="container mt-4">
            <div style={{justifyContent: 'center'}} className="row">
                <div className="col-md-8 col-12">
                    <div className="card">
                        <h4 className="card-header">Registro de usuarios</h4>
                        <div>
                        <form>
                        <div className="mb-3">
                            <label for="firstname" class="form-label">Nombres</label>
                            <input type="text" className="form-control" id="firstname" />
                        </div>
                        <div className="mb-3">
                            <label for="lastname" className="form-label">Apellidos</label>
                            <input type="text" className="form-control" id="lastname"/>
                        </div>
                        <div className="mb-3">
                            <label for="username" className="form-label">Nombre Usuario</label>
                            <input type="text" className="form-control" id="username"/>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>
                        <div className="mb-3">
                            <div className="mb-3">
                                <label for="pwd" className="form-label">Password</label>
                                <input type="password" className="form-control" id="pwd"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;