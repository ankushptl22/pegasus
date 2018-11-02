import React, { Component } from 'react'
import * as AllComponents from '../../json/NavigationMapping';
import { Container, Segment, Grid } from 'semantic-ui-react'
class MeasureDetailsHeader extends Component {

  render() {
    const { measureDetailsHeaderProps } = this.props
    const data = measureDetailsHeaderProps.map((singleTab, index) => {
      let ChildComp = AllComponents['' + singleTab];
      return <ChildComp key={index} {...this.state}{...this.props} />
    })

    return (
      <Container>
        {data}
      </Container>
    )
  }
}

MeasureDetailsHeader.defaultProps = {
  measureDetailsHeaderProps: [
    "MasterUserProfile",
    "MasterAccordion"
  ]
}

export default MeasureDetailsHeader