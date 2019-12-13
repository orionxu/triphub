import React, {Component} from 'react'
import {Image, Label} from 'semantic-ui-react'
import Typography from '@material-ui/core/Typography';
import '../Style/Profile.css';
import Card from "semantic-ui-react/dist/commonjs/views/Card"
import store from "./store"
import history from "./history"

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: store.getState().currentUser.username,
            user_tags: store.getState().user_tags,
            loading: true
        };
    }

    componentDidMount() {
        if (!store.getState().waitForAuth) {
            this.setState({loading: false});
            if (!store.getState().authenticated){
                history.push("/login");
            }
        } else {
            store.subscribe(() => {
                this.setState({loading: false, username: store.getState().currentUser.username,user_tags: store.getState().user_tags})
            })
        }
    }


    render() {
        if (this.state.loading)
            return <div className="ui active centered inline loader"></div>;
        const display_tags = [];
        for (const [key, value] of this.state.user_tags.entries()){
            display_tags.push(
                <Label as='a' tag color="teal">
                    {value}
                </Label>
            )
        }
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
                    {display_tags}<br/>
                </div>
                <br/>
            </Card>
        )
    }
}

export default Profile