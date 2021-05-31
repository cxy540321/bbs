import React, { Component } from "react";
// �߽������importComponent����import()����ĺ��������ڴ����Ƭ
export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null  // ��̬���ص����
      };
    }

    componentDidMount() {
      importComponent().then((mod) => {
        this.setState({
          // ͬʱ����ES6��CommonJS��ģ��
          component: mod.default ? mod.default : mod
        });
      });
    }
// ��Ⱦ��̬���ص����
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}