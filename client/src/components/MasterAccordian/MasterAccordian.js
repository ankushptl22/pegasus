import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';

class MasterAccordian extends Component {

  constructor() {
    super();
    this.getData = this.getData.bind(this);
  }

  getData() {
    console.log('clicked on getData method')
  }

  setData() {
    console.log('clicked on setData method')
  }

  render() {
    return (
      <div className="MasterAccordian">
        <div className="MasterAccordian1">
          <h1>This is MasterAccordian</h1>
          <Card>
            <Image src='/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
            </a>
            </Card.Content>
          </Card>
          <button onClick={this.getData}></button>
        </div>;
    </div>)
  }
}

export default MasterAccordian;
// function mapStateToProps(state) {
//   const { alert } = state;
//   return {
//     alert
//   };
// }

// const connectedApp = connect(mapStateToProps)(MasterAccordian);
// export { connectedApp as MasterAccordian }; 