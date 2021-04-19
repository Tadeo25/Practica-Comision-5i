import Card from './Card'
import Photos from './Photos'

export default function Main(props) {
    const datos = [
        { tittle: 'manzana', descripcion: "otra descripcion" },
        { tittle: 'naranja', descripcion: "otra descripcion" },
        { tittle: 'pera', descripcion: "otra descripcion" },
    ]

    const cards = datos.map((dato, i) => <Card data={dato} key={i} />)
    return (

        <main id="main">
            <div className="container">


                <div className="row">

                    <div className="col lg-4">
                        <div className="card bg-fondo" style={{ width: "18rem" }}>
                            <img src="/" alt="" />
                            <div className="card-body">
                                <h5>
                                    {props.data.tittle}
                                </h5>
                                <p>
                                    {props.data.descripcion}
                                </p>
                                <a href="/"><button className="btn btn-light">Ver mas</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col lg-4">
                        <div className="card bg-fondo" style={{ width: "18rem" }}>
                            <img src="/" alt="" />
                            <div className="card-body">
                                <h5>
                                    {props.data.tittle}
                                </h5>
                                <p>
                                    {props.data.descripcion}
                                </p>
                                <a href="/"><button className="btn btn-light">Ver mas</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="col lg-4">
                        <div className="card bg-fondo" style={{ width: "18rem" }}>
                            <img src="/" alt="" />
                            <div className="card-body">
                                <h5>
                                    {props.data.tittle}
                                </h5>
                                <p>
                                    {props.data.descripcion}
                                </p>
                                <a href="/"><button className="btn btn-light">Ver mas</button></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="container mt-5">

                <div className="row">
                    {cards}
                </div>

            </div>
            <div className="container mt-5">
                    <Photos />
            </div>
        </main>
    )
}
