import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={257}
    height={567}
    viewBox="0 0 257 567"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, padding: '0 12px' }}
    {...props}
  >
    <circle cx="50%" cy="125" r="122" /> 
    <rect cx="50%" y="283" rx="0" ry="0" width="257" height="26" /> 
    <rect cx="50%" y="306" rx="0" ry="0" width="257" height="26" /> 
    <rect x="46" y="345" rx="0" ry="0" width="160" height="38" /> 
    <rect cx="50%" y="419" rx="0" ry="0" width="100%" height="62" /> 
    <rect cx="50%" y="500" rx="0" ry="0" width="100%" height="66" />
  </ContentLoader>
);

export default MyLoader;
