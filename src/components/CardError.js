export default function CardError(props){

    const render = () => {
        if(props.error == null || props.error === "" ){
            return <></>
        }else{
            return (
                <div className="alert alert-danger alert-dismissible">
                  {/* <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button> */}
                  <h5>Error!</h5>
                  {props.error}
                </div>
            )
        }
    }

    return (
        <>
            {render()}
        </>
    )


}