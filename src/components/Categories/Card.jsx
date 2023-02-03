import moment from "moment";
import { Link } from "react-router-dom";
import "../card/css/card.css";

export const Card = ({ data, style }) => {
  console.log(data);

  return (
    <div className="card">
      <img
        src={data?.picture}
        alt="No image"
        style={{ ...style, width: "100%" }}
      />
      <div className="container">
        <h4>
          <b>
            <Link
              className="stretched-link"
              to={"/liste-enchere"}
              state={{ id: data?.id }}
            >
              {" "}
              {data?.name}{" "}
            </Link>
          </b>
        </h4>
      </div>
    </div>
  );
};
