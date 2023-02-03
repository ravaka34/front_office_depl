import { useNavigate } from "react-router-dom";
import { getProfil, getTokenExpirationDate } from "../utils/util";

export function useCheckConnected() {
    const navigate = useNavigate();
    const profil = getProfil();
    if(profil == null || profil === undefined) {
        return navigate("/login") ;
    }
    console.log(getTokenExpirationDate());
    if(getTokenExpirationDate() < new Date()) {
        return navigate("/login") ;
    }
}