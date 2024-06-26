import {DefaultConfigOptions} from "@formkit/vue";
import { createProPlugin, inputs } from '@formkit/pro'
import {createAutoAnimatePlugin} from "@formkit/addons";
import createToolTipPlugin from "~/formkit-plugins/tooltip-plugin";
import "@/formkit-plugins/tooltip-plugin/styles.css";
import "@formkit/pro/genesis"
import {generateClasses} from "@formkit/themes";

const config: DefaultConfigOptions = {
    theme: "genesis",
    plugins: [createProPlugin('fk-552fbad71d8', inputs), createAutoAnimatePlugin(), createToolTipPlugin()],
    config: {
        classes: generateClasses({
            text: {
                label: "myClasses"
            }
        })
    },
    messages: {
        en: {
            validation: {
                username_is_unique({args, name, node}) {
                    return `${node.value} is already taken`
                }
            }
        },
        de: {
            validation: {
                username_is_unique({args, name, node}) {
                    return `${node.value} is bereits in Benutzung`
                }
            }
        }
    },
    rules: {
        username_is_unique(node) {
            const usernames = ["sdietrich", "idietrich", "sdietrich1987", "idietrich1976"]
            return !usernames.includes(node.value as string)
        }
    }
}

export default config;