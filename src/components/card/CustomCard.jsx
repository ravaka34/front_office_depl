import moment from "moment";
import { Link } from "react-router-dom";
import "../card/css/card.css";

export const CustomCard = ({ data, style }) => {
  const renderIsFinished = () => {
    if (data.isFinished === 1) {
      // console.log("isfinished" + data.isFinished);
      return <div className="alert alert-warning">Enchere termine</div>;
    } else {
      return <div className="alert alert-success">Enchere en cours</div>;
    }
  };

    return (
        <div id="mycards" class="card-content d-flex">
            <div className="card">
                <div class="card-image">
                    <img src = {data?.productPictureList[0]?.picture} alt="No image" style={{ ...style, width: "100%" }} />
                </div>
                <div class="card-info mt-2" >
                    <h4><b>Lot: <Link className="stretched-link" to={ "/fiche" } state={{id: data?.id}} > {data?.id} </Link></b></h4>
                    <p>Nom du produit: {data?.productName}</p>
                    <p>Prix initial: {data?.amountMin} Ar</p>
                    <p>Fin de l'enchère: {moment(data?.endDate).format("DD MMMM YYYY hh:mm a")}</p>
                    <p>
                        {/* <a href="#" className="btn btn-primary stretched-link">Go somewhere</a> */}
                    </p>
                    <p>{ renderIsFinished() }</p>
                </div>
            </div>
        </div>
    )
}
