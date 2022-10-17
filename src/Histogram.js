import React from "react";
import * as hdr from "hdr-histogram-js";

class Histogram extends React.Component {
  handleClick = () => {
    const histogram = hdr.build({
      bitBucketSize: 32, // may be 8, 16, 32 or 64
      autoResize: true, // default value is true
      lowestDiscernibleValue: 1, // default value is also 1
      highestTrackableValue: 2, // can increase up to Number.MAX_SAFE_INTEGER
      numberOfSignificantValueDigits: 3 // Number between 1 and 5 (inclusive)
    });
    console.log("fungsi", histogram);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>HDR</button>
      </div>
    );
  }
}

export default Histogram;
