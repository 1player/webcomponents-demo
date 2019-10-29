import { html, define, children } from "hybrids";

export const WordCounter = {
  chars: {
    connect: host => {
      let input = host.querySelector("input");
      if (!input) {
        return;
      }

      let cb = () => {
        host.chars = input.value.length;
      };

      host.chars = input.value.length;
      input.addEventListener("input", cb);
      return () => {
        input.removeEventListener("input", cb);
      };
    }
  },
  render: ({ chars }) => html`
    <div>
      <slot></slot>
      <span>${chars} characters</span>
    </div>
  `
};

define("word-counter", WordCounter);
