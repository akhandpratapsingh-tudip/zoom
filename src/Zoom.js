import ZoomMtgEmbedded from "@zoomus/websdk/embedded";
import React from "react";

const client = ZoomMtgEmbedded.createClient();

function Zoom() {
  React.useEffect(() => {
    let meetingSDKElement = document.getElementById("meetingSDKElement");

    client
      .init({
        debug: true,
        zoomAppRoot: meetingSDKElement,
        assetPath: "zoom.us",
        language: "en-US",
      })
      .then((e) => {
        console.log("init success", e);
      })
      .catch((e) => {
        console.log("init error", e);
      });

    // WebSDK Embedded join
    client
      .join({
        apiKey: "dZzvA1MoTBCQ7Cq916tFRA",
        signature:
          "ZFp6dkExTW9UQkNRN0NxOTE2dEZSQS45NDUzNDMxMDAyNC4xNjQxMzY5OTM2NTM1LjEuS3pTRzRhUXFxUnU3WHdHLytZemtRNlJvYzlCeGYrVWhwZEJSU2crOUZxYz0=",
        meetingNumber: 94534310024,
        userName: "Nilesh",
        password: "YjBycnAvenFvR2tsbStLLy9qRzBnQT09",
        userEmail: "nilesh.vishwakarma@tudip.com",
      })
      .then((e) => {
        console.log("join success", e);
      })
      .catch((e) => {
        console.log("join error", e);
      });
  }, []);

  return <div id="meetingSDKElement"></div>;
}

export default Zoom;
