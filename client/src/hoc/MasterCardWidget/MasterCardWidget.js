import React from 'react'
import { Card, Grid, Feed, Menu, Segment, Header, Button, Image, Icon } from 'semantic-ui-react'

const MasterCardWidget = (WrappedComponent, config) => {

  const HeaderComponent = WrappedComponent[0]
  const BodyComponent = WrappedComponent[1]

  class HOC extends React.Component {

    render() {
      return (
        <Card.Group>
          <Card fluid>
            <Card.Content>
              <Card.Header>
                <Grid>
                  <Grid.Column width={11} as='h5'>
                    <Card.Header >
                      <HeaderComponent {...this.state} {...this.props} />
                      {config.Header}
                    </Card.Header>
                    <Card.Meta>
                      {config.Meta}
                    </Card.Meta>
                    <Card.Description>
                      {config.Description}
                    </Card.Description>
                  </Grid.Column>
                  <Grid.Column width={5} textAlign='right' >
                    <i size='mini' >...</i>{' '}
                    <i size='mini' class="expand icon"></i>
                  </Grid.Column>
                </Grid>
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <BodyComponent {...this.state} {...this.props} />
            </Card.Content>
          </Card>
        </Card.Group>
      );
    }
  }
  return HOC;
};

export default MasterCardWidget;
