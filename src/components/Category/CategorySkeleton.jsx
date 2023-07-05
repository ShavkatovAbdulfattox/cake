    import React from "react";
    import ContentLoader from "react-content-loader";

    const CategoryLoader = (props) => (
    <ContentLoader
        speed={2}
        width={400}
        height={150}
        viewBox="0 0 400 150"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="25" y="15" rx="5" ry="5" width="220" height="24" />
        <rect x="25" y="53" rx="5" ry="5" width="220" height="24" />
        <rect x="25" y="87" rx="5" ry="5" width="220" height="24" />
        <rect x="25" y="123" rx="5" ry="5" width="220" height="24" />
        <rect x="16" y="16" rx="0" ry="0" width="1" height="0" />
    </ContentLoader>
    );

    export default CategoryLoader;
