import { CartData } from '../store/cart/types'

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

export const totalValue = (product: CartData, quantity: number) => {
  if (product.offer && product.promotion) {
    if (quantity >= product.promotion.base) {
      const count = checkPromo(quantity, product.promotion.value)
      return convertValue((quantity - count) * product.offer)
    }
  } else if (product.promotion) {
    const count = checkPromo(quantity, product.promotion.value)
    return convertValue((quantity - count) * product.price)
  } else if (product.offer) {
    return convertValue(quantity * product.offer)
  }
  return convertValue(product.price * quantity)
}

export const sumValue = (product: CartData, quantity: number) => {
  if (product.offer && product.promotion) {
    if (quantity >= product.promotion.base) {
      const count = checkPromo(quantity, product.promotion.value)
      return (quantity - count) * product.offer
    }
  } else if (product.promotion) {
    const count = checkPromo(quantity, product.promotion.value)
    return (quantity - count) * product.price
  } else if (product.offer) {
    return quantity * product.offer
  }
  return product.price * quantity
}

const checkPromo = (quantity: number, value: number) => {
  let count = 0
  let aux = quantity
  while (aux >= value) {
    aux -= value
    count += 1
  }
  return count
}
