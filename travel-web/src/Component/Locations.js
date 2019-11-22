import React, {Component} from 'react';
import data from '../data.json';

class Locations extends Component {
    render() {
        return (
            <div>
                {data.map((dataDetail, index) => {
                    return <li align={'left'}>
                        <h2>{dataDetail['Attraction name']}</h2>
                        <h3>{dataDetail['Time range']}</h3>
                        <p>{dataDetail.Description}</p>
                        <h4>{dataDetail.Locality}</h4>
                        <h4>{dataDetail.Price}</h4>
                        <br/>
                    </li>
                })}
            </div>
        )
    }
}

export default Locations;