import { isEmpty } from 'ramda'

type TestType = {
  fieldOne: string
  fieldTwo: number
}

export const testFromSharedModule = (): TestType => {
  console.log('Using ramda', isEmpty([]))
  return {
    fieldOne: 'field one',
    fieldTwo: 2
  }
}
