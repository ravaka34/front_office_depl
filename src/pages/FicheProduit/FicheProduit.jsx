import moment from "moment";
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fleur1 from '../../images/fleur1.jpg';
import fleur2 from '../../images/fleur2.jpg';
import { getProfil } from "../../utils/util";
import { useCheckConnected } from "../../hooks/UseCheckConnected";
import { postData } from "../../utils/fetch";
import CardError from "../../components/CardError";

export const FicheProduit = ()=> {
    // const { id } = useParams();
    useCheckConnected();

    const [response, setResponse] = useState();

    const location = useLocation();
    const id = location.state.id;

    const [amount, setAmount] = useState(0.0);

    const [auctionState, setAuctionState] = useState();
    const [betList, setBetList] = useState();

    useEffect(()=>{
        fetch("http://localhost:9000/auction-state/"+id)
        .then((state)=>state.json())
        .then((auctionStates )=> auctionStates.data)
        .then((result)=>{
            setAuctionState(result);
             setBetList(auctionState.auctionBetList);   
            }
        )



        console.log(auctionState);
    }, []);

    const profil = getProfil();

    const prepareData = () => {
        console.log(auctionState);
        const data = {
            client: {
                id : profil.client.id
            },
            auctionId : auctionState.id,
            amount: amount
        }
        return data;
    }

    const handleSubmit = async (e)=> {
        e.preventDefault();
        console.log(prepareData());
        const url = "http://localhost:9000/auction/"+auctionState.id+"/bet?clientId="+profil.client.id+"&token="+profil.token;
        console.log(url);
        const state = await postData(url, prepareData());
        window.alert("Wait for the response");
        if (state.data) {
          console.log(state.data);
          const bet = {
            client : {
                firstName : profil.client.firstName,
                lastName : profil.client.lastName
            },
            dateBet : state.data.dateBet,
            amount : amount
          }
          const newBetList = [
            bet,
            ...betList
          ]
          setBetList(newBetList);
        } else {
          setResponse(state.error.message);
        }
    }

    const handleChange = (e)=> {
        setAmount(e.target.value);
    }

    const renderIsFinished = () => {
        if(auctionState?.isFinished === 1){
            // console.log("isfinished" + data.isFinished);
            return (
                <div className="alert alert-warning">
                    Enchere termine
                </div>    
            )
        }else{
            return (
                <div className="alert alert-success">
                    Enchere en cours
                </div>
            )
        }
    }

    return (
            <div className="site-section">
                <div className="container">
                    <div className="row col-md-12">
                        <div className="left-content col-md-6" >
                        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={fleur1} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={fleur2} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
                        <div className="right-content col-md-6" >
                            <h3><strong>Lot {auctionState?.id}:</strong>  {auctionState?.productName}</h3>
                            <div>
                                <h4><strong>Description produit:</strong> {auctionState?.productDescription}</h4>
                            </div>
                            <div>
                                <p>Debut enchere: <strong>{moment(auctionState?.depositoryDate).format("DD MMMM YYYY hh:mm a")}</strong></p>
                                <p>Fin enchere: <strong>{moment(auctionState?.endDate).format("DD MMMM YYYY hh:mm a")}</strong></p>
                                <p>Prix initial: <strong>{auctionState?.amountMin} Ar</strong></p>
                                <p>Derniere enchere: <strong>{auctionState?.auctionBetList[auctionState?.auctionBetList.length -1]?.amount} Ar le {moment(auctionState?.auctionBetList[auctionState?.auctionBetList.length -1]?.dateBet).format("DD MMMM YYYY")}</strong></p>
                                <hr />
                                <form onSubmit={handleSubmit}>
                                    <p>Encherir: <input type="number" step="any" onChange={handleChange} /></p>
                                    <CardError error={response} />
                                    <input type="submit" value="Encherir" />
                                </form>
                                < br/>
                                <p>{ renderIsFinished() }</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Date bet</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {betList?.map((auctionStatee, index)=>
                                <tr key={index}>
                                    <td>{auctionStatee?.client.firstName}</td>
                                    <td>{auctionStatee?.client.lastName}</td>
                                    <td>{auctionStatee?.dateBet}</td>
                                    <td>{auctionStatee?.amount}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
    )
}