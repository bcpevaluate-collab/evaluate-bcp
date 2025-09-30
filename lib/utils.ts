// lib/utils.ts
export const formatPEN = (n:number)=> new Intl.NumberFormat('es-PE',{style:'currency',currency:'PEN'}).format(n);