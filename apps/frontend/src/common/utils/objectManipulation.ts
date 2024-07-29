/*
Al agregar <T> antes de la declaración de la función,
defines que el método deepFreeze tienen su propio parámetro 
de tipo genérico T. Congela de forma profunda un objeto
*/
export const deepFreeze = <T>(hashTable: T): Readonly<T> => {
  // Congela el objeto de primer nivel.
  Object.freeze(hashTable);
  // Congela las propiedades del objeto que son también objetos.
  for (const key in hashTable) {
    const value = hashTable[key];

    if (typeof value === "object" && value !== null && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  }

  return hashTable;
};
