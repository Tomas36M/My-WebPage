import { Component } from 'react';

/**
 * Los fondos WebGL de React Bits lanzan si el navegador no da contexto
 * (equipos sin GPU, WebGL desactivado, headless). Sin esto, un fondo
 * decorativo tumba toda la página.
 */
class SafeWebGL extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    if (import.meta.env.DEV) console.warn('[SafeWebGL] fondo desactivado:', error?.message);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default SafeWebGL;
