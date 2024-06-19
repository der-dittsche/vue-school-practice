import type Emoji from "@/types/emoji";

export default interface Entry {
    id: number,
    body: string,
    emoji: Emoji | null,
    createdAt: Date,
    userId: number
}