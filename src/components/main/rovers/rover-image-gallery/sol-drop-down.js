import React, {Component} from "react";

class SolDropDown extends Component {

  render() {
    
    if (this.props.isManifestLoading) {
      return null

    } else {
      let dataArray = this.props.solDataArray;
      return dataArray.map((day, i) => {
        return (
          <option key={i} value={day}>{day}</option>
        )
      });
    }
  }
}
export default SolDropDown