export class TdcButton extends HTMLButtonElement {
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
