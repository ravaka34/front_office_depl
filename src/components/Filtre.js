import { useRef } from "react";
import { postData } from "../utils/fetch";

export default function Filtre(props) {
  const minDate = useRef();
  const maxDate = useRef();
  const minAmount = useRef();
  const maxAmount = useRef();
  const motCle = useRef();
  const status = useRef();

  const handleClick = async (e) => {
    const data = {
        motCle : motCle.current.value,
        minDate : minDate.current.value,
        maxDate : maxDate.current.value,
        minAmount : minAmount.current.value,
        maxAmount : maxAmount.current.value,
        status : status.current.value,
        category : props.category
    }
    console.log(data);
    const filters = await postData("https://api-production-6a5a.up.railway.app/auction-state/search", data);
    props.setData(filters.data);
  }

  return (
    <>
      <div class="col-md-12">
        <h2 class="h2 mb-3 text-black">Filtrer</h2>
      </div>
      <div className="col-md-12">
          <div className="p-3 p-lg-5 border">
            <div className="form-group row">
              <div className="col-md-4">
                <label for="c_fname" className="text-black">
                  Du
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="c_fname"
                  name="c_fname"
                  ref={minDate}
                />
              </div>
              <div className="col-md-4">
                <label for="c_fname" className="text-black">
                  Prix minimum
                </label>
                <input
                  type="number"
                  step="any"
                  className="form-control"
                  id="c_fname"
                  name="c_fname"
                  ref={minAmount}
                />
              </div>
              <div className="col-md-4">
                <label for="c_fname" className="text-black">
                  Mot cle
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_fname"
                  name="c_fname"
                  ref={motCle}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-4">
                <label for="c_fname" className="text-black">
                  Au
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="c_fname"
                  name="c_fname"
                  ref={maxDate}
                />
              </div>
              <div className="col-md-4">
                <label for="c_fname" className="text-black">
                  Prix maximum
                </label>
                <input
                  type="number"
                  step="any"
                  className="form-control"
                  id="c_fname"
                  name="c_fname"
                  ref={maxAmount}
                />
              </div>
              <div className="col-md-4">
                <label for="c_fname" className="text-black">
                  Status
                </label>
                <select
                  name="c_fname"
                  id="c_fname"
                  className="form-control"
                  ref={status}
                >
                  <option value="">Tous</option>
                  <option value="0">En cours</option>
                  <option value="1">Terminé</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-lg-12">
                <button
                  type="submit"
                  onClick={handleClick}
                  className="btn btn-primary btn-lg btn-block"
                >
                Filtrer
                </button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
