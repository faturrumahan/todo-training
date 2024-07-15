import React, { ComponentType } from "react";

const WithStyles = <P extends object>(
  WrappedComponent: ComponentType<P>
): React.FC<P> => {
  return (props: P) => {
    const style = "px-5 py-2 bg-blue-600 text-white rounded";
    return <WrappedComponent className={style} {...props} />;
  };
};

export default WithStyles;
