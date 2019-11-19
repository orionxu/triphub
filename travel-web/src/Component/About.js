import React from 'react'
import {
    Button,
    Container,
    Divider,
    Dropdown,
    Grid,
    Header, Icon,
    Image,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react'
import background from '../Assets/images/11.jpeg';
import aboutBcg from '../Assets/images/aboutBcg.jpeg'
// style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}
const style = {
    h1: {
        marginTop: '3em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        padding: '2em 0em',
        color:'#6495ed'
    },
    last: {
        padding: '2em 3em',
        marginBottom: '50px',
    },
    right: {
        padding: '2em 3em',
        marginBottom: '10px',
    },
    color:{
        color:'#6495ed'
    }

}

const FixedMenuLayout = () => (
    <div style={{backgroundImage: `url(${background})`,backgroundSize: 'cover'}}>

        <Header as='h1' content='About TripHub' style={style.h3} textAlign='center'/>
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img
                            src={aboutBcg}
                            className="img-fluid img-thumbnail"
                            alt="about company"
                            style={{ background: "var(--darkGrey)" }}
                        />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <p style={{ fontSize: '1.33em' }}>
                            Trip planner is designed to make plan for travelers. Instead of just listing famous tourist
                            attractions like many other travel websites, trip planner could design an optimized travel
                            route with detailed time schedule. The personal preferences of customers are asked in
                            advance in order to make the plan more personalized.
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            Travellers want to have a complete trip plan for their vocation. They hope to
                            acquire as much information as possible with a simple search. They want the
                            travelling details of each location like ticket price, transportation etc. Thus, in our
                            website we would provide a detailed tripping plan to fulfill customers’ needs.
                            Also, It’s better to add daily events to the calendar to remind customers
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <Grid container columns={2} stackable>
            <Grid.Column style={style.right}>
                <Header as='h2' attached='top' style={style.color} block>
                    Our Mission
                </Header>
                <Segment attached color={'teal'}>
                    <p style={{ fontSize: '1.3em' }}>
                        Help travellers find Best tour routes.
                    </p>
                </Segment>
            </Grid.Column>
            <Grid.Column style={style.right}>
                <Header as='h2' attached='top' style={style.color}  block>
                    Our essence
                </Header>
                <Segment attached color={'teal'}>
                    <p style={{ fontSize: '1.3em' }}>
                        Provides the most popular routes for users.
                    </p>
                </Segment>
            </Grid.Column>
            <Grid.Column style={style.last}>
                <Header as='h2' attached='top' style={style.color} block>
                    Our Hope
                </Header>
                <Segment attached color={'teal'}>
                    <p style={{ fontSize: '1.3em' }}>
                        Everybody could have a good vocation.
                    </p>
                </Segment>
            </Grid.Column>
            <Grid.Column style={style.last}>
                <Header as='h2' attached='top' style={style.color} block>
                    Our Promise
                </Header>
                <Segment attached color={'teal'}>
                    <p style={{ fontSize: '1.3em' }}>
                        Try our best to provide suitable routes for each user.
                    </p>
                </Segment>
            </Grid.Column>
        </Grid>

        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Header as='h2' style={style.color}>
                        Contact Us
                    </Header>
                    <form className="mt-5">
                        {/* first */}
                        <div className="form-group">
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="john smith"
                            />
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="email@email.com"
                            />
                        </div>
                        {/* subject */}
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="important!!!!"
                            />
                        </div>
                        {/* message */}
                        <div className="form">
              <textarea
                  name="message"
                  className="form-control"
                  rows="10"
                  placeholder="hello there buddy"
              />
                            <Button style={{color: '#20B2AA', marginTop: '30px'}}> Submit
                                <Icon name='right arrow' />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>



            {/*<Image src={'../img/3.jpg'} style={{ marginTop: '2em' }}/>*/}

            {/*<Image src={'/images/wireframe/media-paragraph.png'} style={{ marginTop: '2em' }} />*/}
            {/*<Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />*/}
            {/*<Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />*/}
            {/*<Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />*/}
            {/*<Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />*/}
            {/*<Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />*/}
            {/*<Image src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />*/}


        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Members</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Plans</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                                <List.Item as='a'>Solutions</List.Item>
                                <List.Item as='a'>FAQ</List.Item>
                                <List.Item as='a'>Favorite Color</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Footer Header
                            </Header>
                            <p>
                                We are GROUP 21 -- TRIPHUB
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </div>
)

export default FixedMenuLayout