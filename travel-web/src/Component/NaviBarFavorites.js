import React, {Component} from 'react';
import {Dropdown} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import store from "./store";
import {connect} from 'react-redux';

class NaviBarFavorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attractionsList: store.getState().favorites
        };
        this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount() {
        store.subscribe(() => {
                this.setState({attractionsList:store.getState().favorites})
            })
    }

    handleRemove(){
        this.props.dispatch({type: 'RM_FAVORITES'});
    }

    render() {
        let displayList = this.state.attractionsList.map(item => {
            return (<Dropdown.Item>{item.name}</Dropdown.Item>)
        });
        return (
            <Dropdown
                text='Favorites'
                icon='shop'
                floating
                labeled
                button
                className='icon'
            >
                <Dropdown.Menu>
                    <Dropdown.Header icon='tags' content='My favorite attractions. '/>
                    <Dropdown.Divider/>
                    {displayList}
                    <Dropdown.Divider/>
                    <Dropdown.Item as={Link} to="/plan">Generate My Plan</Dropdown.Item>
                    <Dropdown.Item onClick={this.handleRemove}>Remove All Favorites</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }

}

export default connect()(NaviBarFavorites);