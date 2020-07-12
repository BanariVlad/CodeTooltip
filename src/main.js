import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.directive("code-tooltip", {
  bind(el, binding) {
    let pre = document.createElement("pre");
    let tagColor = "#FF6766"
    let attributeColor = "#FECA6A"
    let equalsColor = "#C2E782"
    // let textColor = "#FFFFFF"
    let closingColor = "#88D6E7"
    pre.innerHTML = binding.value.replace(/(<.+?)(?=\s|>)|[<>]|="(.*?)"|(\w+(?==")|\w+-\w+(?=="))|\//g, value => {
      // if (/>(.*?)<\//.test(value)) { // Color for text
      //   return `<span style="color: ${closingColor};">${value.slice(0, 1)}</span><span style="color: ${textColor};">${value.slice(1, value.length - 2)}</span><span style="color: ${closingColor};"><</span><span style="color: ${closingColor};">/</span>`
      // }

      if (/(?<=<)(.+?)(?=\b)/.test(value)) { // Color for tags
        if (value[1] === "/") {
          return `<span style="color: ${closingColor};"><</span><span style="color: ${closingColor};">/</span><span style="color: ${tagColor};">${value.slice(2, value.length)}</span>`
        }
        return `<span style="color: ${closingColor};"><</span><span style="color: ${tagColor};">${value.slice(1, value.length)}</span>`
      }

      if (!/\w+/.test(value) || value === "/") { // Color for < / >
        return `<span style="color: ${closingColor};">${value}</span>`
      }

      if (/="(.*?)"/.test(value)) { // Color for ="..."
        return `<span style="color: ${equalsColor};">${value}</span>`
      }

      if (/\w+/.test(value)) { // Color for attribute
        return `<span style="color: ${attributeColor};">${value}</span>`
      }
    });
    el.appendChild(pre);
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
