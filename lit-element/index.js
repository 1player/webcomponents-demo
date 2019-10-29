import { LitElement, html } from "lit-element";

// Extend the LitElement base class
class WordCounter extends LitElement {
  static get properties() {
    return {
      chars: { type: Number }
    };
  }
  constructor() {
    super();
    this.chars = 0;
    this.$input = null;
  }

  onSlotChange() {
    let slot = this.shadowRoot.querySelector("slot");
    let input = slot.assignedElements()[0];
    input.addEventListener("input", this.onInputChange.bind(this));
    this.$input = input;
    this.onInputChange();
  }

  onInputChange() {
    this.chars = this.$input.value.length;
  }

  render() {
    return html`
      <div>
        <slot @slotchange="${this.onSlotChange}"></slot>
        <span>${this.chars} characters</span>
      </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define("word-counter", WordCounter);
