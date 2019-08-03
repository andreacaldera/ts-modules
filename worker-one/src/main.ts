import { testFromSharedModule } from 'shared-module'
import { retryPromise } from './retry-promise'

console.log('Running main on worker-one...')

const test = 1

const result = testFromSharedModule()
console.log(111, result.fieldOne)
console.log(222, result.fieldTwo)

export const randomPromise = async (): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    if (Math.round(Math.random() * 10) % 7 === 0) {
      console.log('Random pass')
      return resolve(1)
    } else {
      console.log('Retry promise failed at attempt')
      return reject(new Error(`Retry promise error`))
    }
  })
}

retryPromise<number>({ attempts: 20, timeout: 200 })(randomPromise)
  .then(() => {
    console.log('Retry promise success')
  })
  .catch((error: Error) => {
    console.error('Retry promise failure', error)
  })
