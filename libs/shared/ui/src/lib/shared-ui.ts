// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// export type JSXify<T extends Element> = Partial<
//   Omit<T, 'children'> & { children?: any[] }
// >;

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'tdc-button': JSXify<TdcButton>;
//     }
//   }
// }

export class TdcButton extends HTMLElement {
  constructor() {
    super();
    console.log('Hey from the Web component button, a.k.a tdc-button!');
  }

  connectedCallback() {
    this.textContent = this.labelText;
  }

  get labelText() {
    return this.getAttribute('label-text');
  }

  set labelText(value) {
    this.setAttribute('label-text', value);
  }
}

customElements.define('tdc-button', TdcButton);
