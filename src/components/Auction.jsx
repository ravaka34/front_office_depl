import './../../css/auction.css';

export const Auction = ({data,style})=>{ 
    console.log(data.category);
    return(
        <div className="card mx-5 p-4">        
            <ul style={{listStyleType:"circle"}}>
                <li>Category: {data?.category?.name}</li>
                <li>Nom du produit: {data?.productName}</li>
                <li>Description: {data?.productDescription}</li>
                <li>Fin de l'enchere: {data?.endDate}</li>
                <li>Debut Enchere: {data?.depositoryDate}</li>
                <li>Duree: {data?.duration}</li>
                <li>Prix initial: {data?.amountMin}</li>
                <li>Comission: {data?.comission}</li>
            </ul>
        </div>
    )
}