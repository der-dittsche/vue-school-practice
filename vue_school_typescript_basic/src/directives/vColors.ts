import {Directive} from "vue";

export const vColor: Directive = {
    mounted (el, binding) {
        const customColors = binding.value
        if(binding.modifiers.underline) {
            el.style.textDecoration = 'underline'
        }
        if(binding.modifiers.italic) {
            el.style.fontStyle = 'italic'
        }
        const speeds: Record<string, number> = {
            slow: 2000,
            normal: 1000,
            fast: 500,
            craze: 100
        }
        const speedName: string = binding.arg!
        const speed: number = speeds[speedName] || speeds.normal
        let i = 0;
        el.__Colorinterval__ = setInterval(() => {
            console.log(customColors[i])
            el.style.color = customColors[i];
            i++;
            if (i === customColors.length) {
                i = 0;
            }
        }, speed);
    },
    unmounted(el) {
        clearInterval(el.__Colorinterval__)
    }
}