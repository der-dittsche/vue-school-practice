import type {InjectionKey} from "vue";
import type User from "@/types/User";

export const userInjektionKey = Symbol() as InjectionKey<User>;