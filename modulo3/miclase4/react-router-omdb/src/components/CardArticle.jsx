

export default function CardArticle(props) {

    return (
        <div>
            <div className="col lg-4">
                <div className="card bg-fondo h-100" style={{ width: "18rem" }}>
                    <img src="/" alt="" />
                    <div className="card-body d-flex flex-column justify-content-between">
                        <h5>{props.article.title}</h5>
                        <p>{props.article.description}</p>
                        <img src={props.article.url} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
