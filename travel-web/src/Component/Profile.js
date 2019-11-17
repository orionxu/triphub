import React, { Component } from 'react'
import { Image, Icon, Label } from 'semantic-ui-react'
import Typography from '@material-ui/core/Typography';
import '../Style/Profile.css';
import Card from "semantic-ui-react/dist/commonjs/views/Card"

class Profile extends Component {
    render() {
        return (
           <Card centered={true} fluid style={{width: 600}}>
                <br/>
                <Typography
                    variant="h2"
                    gutterBottom
                    style={{ fontFamily: "Spicy Rice", color: "dark"}}
                >
                    Account Profile
                </Typography>
                <br/>
                    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' circular centered={true}/>
                    <br/>
                   <Card.Content>
                       <Card.Header>UserName is: </Card.Header>
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