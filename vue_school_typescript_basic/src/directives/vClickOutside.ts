import {Directive} from "vue";

export const vClickOutside: Directive = {
    mounted(el, binding) {
        el.__ClickOutsideHandler___ = (event: MouseEvent) => {
            if(!(el === event.target || el.contains(event.target))) {
                binding.value(event)
            }
        }
        document.body.addEventListener("click", el.__ClickOutsideHandler___)
    },
    unmounted(el) {
        document.body.removeEventListener("click", el.__ClickOutsideHandler___)
    }
}