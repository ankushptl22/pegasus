import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MasterFooter extends Component {
  render() {
    return <div>

      MasterFooter
      <Link to="/footer" className="btn btn-link">@copyright 2018 Pegasus</Link>
      </div>;
  }
}

export default MasterFooter;
