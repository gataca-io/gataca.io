export function sortByDate(itemsArr: any[]) {
  itemsArr?.sort((a: any, b: any) => {
    return getTime(b?.attributes?.date) - getTime(a?.attributes?.date)
  })

  return itemsArr
}

export function getTime(date?: string) {
  return date != null ? new Date(date)?.getTime() : 0
}

export function sortByProperty(itemsArr: any[], property: string) {
  itemsArr?.sort((a, b) => {
    return a[property] - b[property]
  })

  return itemsArr
}
