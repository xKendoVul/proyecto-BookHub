import ExampleBook from "./ExampleBook";

function GeneralBooks() {
    return (
        <section className="container mt-4">
            {/* latest product section */}
            <h3 className='mb-4'><span className='text-success'>Catalogo de Libros</span></h3>
                <div className='row mb-4'>
                    <ExampleBook title = 'Book 1'/>
                    <ExampleBook title = 'Book 2'/>
                    <ExampleBook title = 'Book 3'/>
                    <ExampleBook title = 'Book 4'/>
                </div>
            {/* end latest product section */}

            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
                </li>
            </ul>
            </nav>

        </section>
    )
}

export default GeneralBooks;