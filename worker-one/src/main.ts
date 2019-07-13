import { testFromSharedModule } from 'shared-module'

console.log('Running main on worker-one...')

const result = testFromSharedModule()
console.log(111, result.fieldOne)
console.log(222, result.fieldTwo)
