import React, {Component} from 'react'
import {Image, Icon, Label} from 'semantic-ui-react'
import Typography from '@material-ui/core/Typography';
import '../Style/Profile.css';
import Card from "semantic-ui-react/dist/commonjs/views/Card"
import store from "./store"

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: store.getState().currentUser.username,
            loading: true
        };
    }

    componentDidMount() {

        if (!store.getState().waitForAuth) {
            this.setState({loading: false});
        } else {
            store.subscribe(() => {
                this.setState({loading: false, username: store.getState().currentUser.username})
            })
        }
    }


    render() {
        if (this.state.loading)
            return <div className="ui active centered inline loader"></div>;
        return (
            <Card centered={true} fluid style={{width: 600}}>
                <br/>
                <Typography
                    variant="h2"
                    gutterBottom
                    style={{fontFamily: "Spicy Rice", color: "dark"}}
                >
                    Account Profile
                </Typography>
                <br/>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' circular
                       centered={true}/>
                <br/>
                <Card.Content>
                    <Card.Header>UserName is: {this.state.username}</Card.Header>
                    <Card.Meta>
                        <span className='date'>Joined in Date</span>
                    </Card.Meta>
                    <Card.Description>
                        User's preference tag
                    </Card.Description>
                </Card.Content>
                <div>
                    <Label as='a' tag>
                        Big Name
                    </Label>
                    <Label as='a' color='red' tag>
                        Europe
                    </Label>
                    <Label as='a' color='teal' tag>
                        Good for scenes
                    </Label><br/>
                </div>
                <br/>
            </Card>
        )
    }
}

export default Profile