import React, {Component, Fragment} from 'react';
import data from '../../data.json';


class Locations extends React.Component {
    renderTrails = () => {
            const trail=data.map(t => {
                return(
                    <div className="card" style={{width: 50 + 'rem'}}>
                        <img className="card-img-top" src={t.imgSqSmall ? ( t.imgSqSmall) : ("https://source.unsplash.com/featured/?travel")} />
                        <div className="card-body">
                            <h1 className="card-title">{t['Attraction name']}</h1>
                            <h2 className="card-text">{t['Time range']} </h2>
                            <h4 className="card-text">{t.Description} </h4>
                            <h4 className="card-text">{t.Locality} </h4>
                            <h4 className="card-text">{t.Price} </h4>

                        </div>
                    </div>
                )
            })
            return(
                <div className = "row">
                    {trail}
                </div>
            )
    }
    render(){
        return (

                <div align={"center"}>
                    {this.renderTrails()}
                </div>

        )
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

