import {currencyFormat} from "../js/utils"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faTh, faPlus} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import UploadDropzone from "../Components/UploadDropzone";
import CurrencyInput from "react-currency-input-field";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import {ActionCreators} from "../redux/reducer/AppReducer";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";

function GridView(props) {
    return (<div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
            </div>
            {
                props.cuisine !== undefined ? props.cuisine.map(data => {
                    return (<div key={data.id} className="col-md-3 col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <img src={data.imgUr} alt=""/>
                                <p>{currencyFormat(data.price)}</p>
                                <h5 className="card-title" style={{width: "100%"}}>{data.name}</h5>
                                <p className="card-text">{data.description}</p>
                            </div>
                        </div>
                    </div>)
                }) : ""
            }
        </div>
    </div>)
}

function ListView(props) {
    return (<div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
            </div>
            {
                props.cuisine !== undefined ? props.cuisine.map(data => {
                    return (<div key={data.id} className="col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-body" style={{display: "inline-flex"}}>
                                <img src={data.imgUr} alt="" />
                                <div>
                                    <p>{currencyFormat(data.price)}</p>
                                    <h5 className="card-title" style={{width: "100%"}}>{data.name}</h5>
                                    <p className="card-text">{data.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }) : ""
            }
        </div>
    </div>)
}


export default function Cuisine(props) {
    const defaultBtnStyle = {backgroundColor: "#ebedee", color: "#c0cbd0"};
    const [uploadToggle, setUploadToggle] = useState(false);
    const [cName, setCName] = useState("");
    const [cDescription, setCDescription] = useState("");
    const [cPrice, setCPrice] = useState("");
    const [defaultView, setDefaultView] = useState(true);
    const [showAddNew, setShowAddNew] = useState(false);
    const [files, setFiles] = useState([]);
    const cuisineDispatch  = useDispatch();
    const cuisineData = useSelector((state)=> state.appReducer.cuisine);
    const pathname = useLocation()
    useEffect(() => {
        if(pathname.pathname !== "/app/cuisine") {
            cuisineDispatch(ActionCreators.getCuisine());
        }
    }, [])

    function switchView() {
        setDefaultView(!defaultView);
    }


    function handleSaveChange() {
        if(cName !== "" && cDescription!== "" && cPrice !== "" && files.length > 0) {
            let paras = {name:cName,description:cDescription,price:cPrice,file:files};
            cuisineDispatch(ActionCreators.addCuisine(paras))
        } else {
            alertify.set('notifier','position', 'top-right');
            alertify.error('Please, enter empty fields.');

        }
        // handleCloseAddNew()
    }

    function handleCloseAddNew() {
        setShowAddNew(false);
        setFiles([]);
    }
    function handleShowAddNew() {
        setShowAddNew(true);
    }

    return (
        <>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Cuisine</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid" style={{marginBottom: "10px"}}>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-default" style={defaultView ? defaultBtnStyle : {}}>
                                    <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked={defaultView} onChange={switchView}/> <FontAwesomeIcon
                                    icon={faTh} className="nav-icon "/> Grid View

                                </label>
                                <label className="btn btn-default" style={!defaultView ? defaultBtnStyle : {}}>
                                    <input type="radio" name="options" id="option2" autoComplete="off"
                                           defaultChecked={!defaultView} onChange={switchView}/> <FontAwesomeIcon
                                    icon={faList} className="nav-icon "/> List View
                                </label>
                            </div>
                            <button type="button" style={{marginLeft: "10px"}} className="btn btn-primary"
                                    onClick={handleShowAddNew}><FontAwesomeIcon icon={faPlus}/> Add New
                            </button>
                        </div>
                    </div>
                </div>
                {
                    defaultView ? <GridView cuisine={cuisineData}/> : <ListView cuisine={cuisineData}/>
                }
            </section>
            <Modal show={showAddNew} onHide={handleCloseAddNew}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Cuisine</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" style={{marginTop:"5px"}} className="form-control" placeholder="Cuisine" onChange={(event)=>setCName(event.target.value)}/>
                    <textarea style={{marginTop:"5px"}} className="form-control" placeholder="Description" onChange={(event)=>setCDescription(event.target.value)}></textarea>
                    <CurrencyInput
                        name="input-name"
                        placeholder="Price"
                        style={{width:"100px",marginTop:"5px"}}
                        className="form-control"
                        decimalsLimit={2}
                        prefix="$"
                        onValueChange={(value, name) => setCPrice(value)}
                    />
                    <div style={{display:"inline-flex"}}>
                        <label className="switch">
                            <input type="checkbox" defaultChecked={uploadToggle} onChange={()=>{setUploadToggle(!uploadToggle)}}/><span className="slider round"/>
                        </label>
                        <p style={{marginTop:"4px"}}>Use images from URL.</p>
                    </div>
                    {!uploadToggle ? <UploadDropzone multiple={false} files={files} setFiles={setFiles}/> : <input type="text" className="form-control" placeholder="https://image.example" />}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={handleCloseAddNew}>
                        Close
                    </button>
                    <button className="btn btn-primary" onClick={handleSaveChange}>
                        Save Changes
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )

}
