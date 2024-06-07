import images from "../assets/images"

function Comment() {
    return (
        <section className="card container mt-3">
            <div className="row mt-5">
                <div className="col-4">
                    <img src= {images.demo}/>
                </div>
                <div className="col-8">
                    <h3>Comentario</h3>
                    <form>
                    <div className="row">
                        <label  for="Comment" class="form-label">Escriba su comentario</label>
                        <textarea style={{width: "200px", height:"200px"}}/>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Publicar</button>
                    </form>
                </div>    
            </div>
        </section>
    )
}

export default Comment