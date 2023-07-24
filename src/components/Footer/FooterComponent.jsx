import React from "react";

function FooterComponent() {
  return (
    <div className="footer text-left py-3 " style={{backgroundColor : 'black', position: 'static'}}>
      © 2013 - 2023 Rank Math |{" "}
      <a href="https://rankmath.com/terms-and-conditions">
        Terms of Use
      </a>{" "}
      |{" "}
      <a href="https://rankmath.com/cookie-policy/">
        Cookie Policy
      </a>{" "}
      | <a href="https://rankmath.com/usage-tracking/">Plugin Usage Policy</a> |
      
    </div>
  );
}

export default FooterComponent;
