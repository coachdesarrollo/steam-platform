/*
Devolvemos un indice valido para evitar desbordamiento de acceso al arreglo
asignando el indice minimo o maximo si llegase haber algun tipo de desbordamiento
*/
export const getOrDefault = <T>(list: Array<T>, index: number): T =>
  list[index >= 0 ? (index < list.length ? index : list.length - 1) : 0];
