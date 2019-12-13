import React, {Component, Fragment} from 'react';
import {Button, Icon} from 'semantic-ui-react'

class Locations extends React.Component {

    constructor(props) {
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            dataReady: false,
            attractionsList: []
        };
    }

    componentDidMount() {
        const cityName = this.props.match.params.position;
        fetch('/api/locations/' + cityName, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return null;
            }
        }).then(response => {
            if (response) {
                this.setState({attractionsList: response, dataReady: true});
            }
        })
    }

    addAttraction(attractionID, attractionName){
        let jsonList = localStorage.getItem("cart");
        let parsedList = jsonList? JSON.parse(jsonList):[];
        if (parsedList.some(item=>item.id===attractionID)){
            alert(attractionName+" already in the list. ");
            return;
        }
        parsedList.push({id:attractionID, name:attractionName});
        localStorage.setItem("cart", JSON.stringify(parsedList));
        alert(attractionName + " added to list. ");
    }

    renderTrails = () => {
        let attsList = this.state.attractionsList;
        const trail = attsList.map(t => {
            return (
                <div className="card" style={{width: 50 + 'rem'}}>
                    <img className="card-img-top"
                         src={t.imgSqSmall ? (t.imgSqSmall) : ("https://source.unsplash.com/featured/?travel")}/>
                    <div className="card-body">
                        <h1 className="card-title">{t.name}</h1>
                        <h2 className="card-text">{t.time} </h2>
                        <h4 className="card-text">{t.description} </h4>
                        <h4 className="card-text">{t.address} </h4>
                        <h4 className="card-text">{t.rating} </h4>
                        <Button animated onClick={()=>this.addAttraction(t.id, t.name)}>
                            <Button.Content visible>Add</Button.Content>
                            <Button.Content hidden>
                                <Icon name='add'/>
                            </Button.Content>
                        </Button>
                    </div>
                </div>
            )
        })
        return (
            <div className="row">
                {trail}
            </div>
        )
    }

    render() {
        if (this.state.dataReady) {
            return (

                <div align={"center"}>
                    {this.renderTrails()}
                </div>

            )
        }
        else {
            return <div className="ui active centered inline loader"></div>;
        }
    }

    // render() {
    //     return (
    //         <div>
    //             {data.map((dataDetail, index) => {
    //                 return <li align={'center'}>
    //                     <h2>{dataDetail['Attraction name']}</h2>
    //                     <h3>{dataDetail['Time range']}</h3>
    //                     <p>{dataDetail.Description}</p>
    //                     <h4>{dataDetail.Locality}</h4>
    //                     <h4>{dataDetail.Price}</h4>
    //                     <br/>
    //                 </li>
    //             })}
    //         </div>
    //
    //     )
    // }
}

export default Locations;

