export type getNumericId = () => number;
export const getUUID = () => crypto.randomUUID();
export const isValidId = (id: number = 1) => typeof id === "number" && Number.isInteger(id) && id > 0;
export const autoIncrementIdGenerator = (start = 1): getNumericId => {
    let id = isValidId(start) ? start : 1;
    return () => id++;
}
