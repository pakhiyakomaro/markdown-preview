import React from "react";
import TextBox from "./TextBox";

function PreviewBox({ conversionheading, parsedText, updateSourceText, text }) {
  return (
    <React.Fragment>
      <h2 className="text-center m-4" id="title">
        {conversionheading}
      </h2>
      <div className="row ">
        <div className="col-6 ">
          <h2 className="text-center p-2" id="text-area-label">
            Enter your text:
          </h2>
          <TextBox text={text} updateSourceText={updateSourceText} />
        </div>
        <div className="col-6" id="preview">
          <h2 className="text-center p-2" id="text-area-label">
            See the result:
          </h2>
          <div className="preview rounded">
            <div dangerouslySetInnerHTML={{ __html: parsedText }} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PreviewBox;
