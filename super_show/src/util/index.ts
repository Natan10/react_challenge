export const convertValue = (value: number): string => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

type PromoType = {
  kind: string
  base: number
  value: number
}

export const convertPromo = (promotion: PromoType) => {
  const newPromo = `Compre ${promotion.base} leve ${promotion.value}`
  return newPromo
}

export const convertTextPromo = (promotion: PromoType) => {
  const textPromo = `Ao comprar ${promotion.base} unidades do produto leve ${
    promotion.value - promotion.base
  } a mais de graça!!!`
  return textPromo
}
