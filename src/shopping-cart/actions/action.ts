//"user client"

import { getCookie, hasCookie, setCookie } from "cookies-next"




export const getCookieCart = (): { [id: string]: number } => {

    if (hasCookie('cart')) {
        const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}')
        return cookieCart
    }

    return {}
}


export const addProductToCart = (id: string) => {

    const cookieCart = getCookieCart()
    if (cookieCart[id]) {
        cookieCart[id] = cookieCart[id] + 1
    } else {
        cookieCart[id] = 1
    }

    setCookie('cart', JSON.stringify(cookieCart))
}

export const removeProductFromCart = (id: string) => {

    const cookieCart = getCookieCart()
    cookieCart[id] = 0
    setCookie('cart', JSON.stringify(cookieCart))
}


export const removeSingleItemFromCart = (id: string) => {

    const cookieCart = getCookieCart()
    if(!cookieCart[id]) return

    const ItemsInCart = cookieCart[id] - 1
    if(ItemsInCart <= 0){
        delete cookieCart[id]
    } else {
        cookieCart[id] = ItemsInCart
    }

    setCookie('cart', JSON.stringify(cookieCart))
}



