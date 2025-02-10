import { atom } from "jotai";

export const userAtom = atom<{ uid: string; email: string } | null>(null);
