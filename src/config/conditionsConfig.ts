import {Condition} from "../shared/types/types.ts";

export const conditionsTime:Condition[] = [
    { range: [0, 30], color: '#00FF19' },
    { range: [31, 60], color: '#FF6B00' },
    { range: [61, Infinity], color: '#F00' }
];
// 0-15$ 🟩 16-50$ 🟨 51-99999$ 🟥
export const conditionsCost:Condition[] = [
    { range: [0, 15], color: '#00FF19' },
    { range: [16, 50], color: '#FF6B00' },
    { range: [51, Infinity], color: '#F00' }
];