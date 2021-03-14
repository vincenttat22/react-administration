import {currencyFormat} from "../js/utils"

function GridView(props) {
    return (<div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
            </div>
            {
                props.cuisine != undefined ? props.cuisine.map(data => {
                    return (<div key={data.id} className="col-md-3 col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <img src={data.imgUr}/>
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

function ListView() {

}

export default function Cuisine(props) {

    // const { match: { path } } = props;
    // console.log(path)
    // return (
    //     <Route path={path} component={App} />
    //
    // );
    return (
        <div className="content-wrapper">
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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-secondary active">
                                    <input type="radio" name="options" id="option1" autoComplete="off" defaultChecked/> Active
                                </label>
                                <label className="btn btn-secondary">
                                    <input type="radio" name="options" id="option2" autoComplete="off"/> Radio
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <GridView cuisine={props.cuisine}/>
            </section>
        </div>
    )

}
