import React, {Component} from 'react';
import {Dropdown} from 'semantic-ui-react'

class NaviBarFavorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attractionsList: []
        };
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            let jsonList = localStorage.getItem("cart");
            if (jsonList) {
                this.setState({attractionsList: JSON.parse(jsonList)});
            }
            window.addEventListener('storage', this.localStorageUpdated)
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('storage', this.localStorageUpdated)
        }
    }

    localStorageUpdated() {
        let jsonList = localStorage.getItem("cart");
        if (jsonList) {
            this.setState({attractionsList: JSON.parse(jsonList)});
        }
    }

    removeAll(){
        localStorage.removeItem("cart");
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
                    <Dropdown.Item onClick={this.removeAll}>Remove All Favorites</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }

}

export default NaviBarFavorites;