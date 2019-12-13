import React, {Component} from 'react';
import {Icon, Step} from 'semantic-ui-react'
import store from "./store"

class Plan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attractionsList: [],
            dataReady: false,
            routeResult: []
        };
    }

    componentDidMount() {
        let placesList = store.getState().favorites;
        this.setState({attractionsList: placesList});
        let queryStr = placesList.map(x => x.id).join(",");
        console.log(queryStr);
        fetch('/api/plan', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"places": queryStr})
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return null;
            }
        }).then(response => {
            if (response) {
                this.setState({routeResult: response, dataReady: true});
            }
        })
    }

    render() {
        if (this.state.dataReady) {
            let displayRoute = this.state.routeResult.route.map(x => (
                <Step>
                    <Icon name='travel'/>
                    <Step.Content>
                        <Step.Title>{x[3]}</Step.Title>
                        <Step.Description>Visit</Step.Description>
                    </Step.Content>
                </Step>
            ));
            return (
                <Step.Group>
                    {displayRoute}
                </Step.Group>
            )
        }
        return <div className="ui active centered inline loader"></div>;

    }
}

export default Plan