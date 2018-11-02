import React, { Component } from 'react'
import {Pagination} from 'semantic-ui-react'
import axios from "axios";

export default class PaginationComponent extends Component {
  
  constructor(props) {
    super(props)
    this.state = props.PaginationProperty
    if (props.PaginationProperty.url) {
      axios({
        method: 'post',
        url: props.PaginationProperty.url,
        headers: { 'Content-Type': 'application/json' },
        data: props.PaginationProperty.params
    })
        .then(response => {
            this.setState({
              totalPages: response.data.result[0].totalPages
            });
        })
        .catch(error => console.log(error));
    }
  }
  handlePaginationChange = (e, { activePage }) => {
    this.props.onPagination(activePage)
    this.setState({ activePage })
  }
  render() {
    const {
      activePage,
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
      totalPages,
    } = this.state
    
    return (
          <Pagination
            activePage= { activePage}
            boundaryRange={boundaryRange}
            onPageChange={this.handlePaginationChange}
            size='mini'
            siblingRange={siblingRange}
            totalPages={totalPages}
            // Heads up! All items are powered by shorthands, if you want to hide one of them, just pass `null` as value
            ellipsisItem={showEllipsis ? undefined : null}
            firstItem={showFirstAndLastNav ? undefined : null}
            lastItem={showFirstAndLastNav ? undefined : null}
            prevItem={showPreviousAndNextNav ? undefined : null}
            nextItem={showPreviousAndNextNav ? undefined : null}
          />
    )
  }
}
