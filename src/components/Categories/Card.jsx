import moment from "moment";
import { Link } from "react-router-dom";
import "../card/css/card.css";

export const Card = ({ data, style }) => {
  console.log(data);

  return (
    <div id="mycards" class="card-content d-flex">
      <div className="card">
        <div class="card-image">
            <img
              src={data?.picture}
              alt="No image"
            />
        </div>
        <div class="card-info mt-2" >
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
    </div>
  );
};
