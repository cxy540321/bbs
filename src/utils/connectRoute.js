import React from "react";
// 高阶组件，用于阻止重复渲染
export default function connectRoute(WrappedComponent) {
  return class ConnectRoute extends React.Component {
    shouldComponentUpdate(nextProps) {
      return nextProps.location !== this.props.location;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}