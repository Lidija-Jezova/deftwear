export const irGarais = (gads) => {

  if (((gads % 4 === 0) && (gads % 100 !== 0)) || (gads % 400 === 0)) {
    return 'garais'
  } else {
    return 'isais'
  }

}

