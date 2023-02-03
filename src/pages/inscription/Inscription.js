import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import {Helmet} from "react-helmet";
import "../assets/Navbar-Centered.css";
import "../assets/Navbar-vmnt.css";
import "./Inscription.css";
import "../assets/styles.css";

export default class Inscription extends Component {

    componentDidMount(){
        document.body.style.overflowX='hidden';
    }

  render() {
    return (
      <div style={{marginTop:25}}>
        {/* <Helmet> */}
          <script src="../assets/Navbar-vmnt-1.js?h=2b5935b9b56a14cea544bd8efc3445de"></script>
          <script src="../assets/Navbar-vmnt-2.js?h=165eb8a16d2efcb574e69cc37a714873"></script>
          <script src="../assets/Navbar-vmnt-3.js?h=e0e85e2f2a0219df2770f9e0c9f9df62"></script>
          <script src="../assets/Navbar-vmnt.js?h=ccad3b4baddab764f25228229758a2e8"></script>
        {/* </Helmet> */}
        <nav className="navbar navbar-light navbar-expand-md fixed-top shadow navigation-clean">
            <div className="container">
                <div><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button></div>
                <div className="collapse navbar-collapse" id="navcol-1">
                    <div style={{fontSize:22}}><a className="navbar-brand" href="https://www.google.com">Auction</a></div>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><a className="nav-link active" style={{fontFamily:'sans-serif,Source Sans Pro'}} href="https://www.google.com">Home </a></li>
                    </ul><button className="btn btn-primary" type="button">Se connecter</button>
                </div>
            </div>
        </nav>
        <div className="row d-xl-flex justify-content-xl-center align-items-xl-center" style={{height:'calc(100vh - 75px)',marginTop:125,marginBottom:75}}>
            <div className="col-xl-5 d-xl-flex justify-content-xl-center align-items-xl-center" style={{height:450,borderRadius:15,padding:25}}>
                <div style={{width:'75%'}}>
                    <div className="d-xl-flex justify-content-xl-center">
                        <h2>Inscription</h2>
                    </div>
                    <form>
                        <div style={{width:'100%'}}><input className="form-control input-group" type="text" placeholder="Votre nom"/><input className="form-control input-group" type="text" placeholder="Votre prenom"/><select className="form-select input-group">
                                <optgroup label="This is a group">
                                    <option value="12" selected="">Sexe</option>
                                    <option value="13">This is item 2</option>
                                    <option value="14">This is item 3</option>
                                </optgroup>
                            </select>
                            <div className="d-xl-flex align-items-xl-center input-group"><label className="form-label" style={{marginRight:10}}>Date de naissance :</label><input className="form-control" type="date" style={{borderRadius:4}} /></div><input className="form-control input-group" type="tel" placeholder="Telephone"/><input className="form-control input-group" type="email" placeholder="Votre e-mail"/><input className="form-control input-group" type="password" placeholder="Votre mot de passe"/><input className="form-control input-group" type="password" placeholder="Confirmation du mot de passe"/>
                            <div style={{paddingTop:5}}><a href="https://www.google.com" style={{fontSize:13,textDecoration:'underline',color:'var(--bs-blue)'}} >Se connecter ?</a></div>
                        </div>
                        <div className="d-xl-flex justify-content-xl-center input-group" style={{width:'100%'}}><button className="btn btn-primary" type="button">S'inscrire</button></div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
