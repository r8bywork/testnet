// colorUtils.ts
import { Condition } from '../types/types.ts'; // Импорт типов из вашей фичи

export const calculateColorClass = (number: number | undefined, conditions: Condition[] | undefined): string => {
    let colorClass = '';

    if (number !== undefined && conditions) {
        for (const condition of conditions) {
            const [min, max] = condition.range;
            if (number >= min && number <= max) {
                colorClass = condition.color;
                break;
            }
        }
    }

    return colorClass;
}
