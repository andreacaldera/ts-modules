const promiseWait = async (timeout: number) =>
  new Promise(resolve => {
    setTimeout(resolve, timeout)
  })

type RetryPromiseConfig = {
  attempts?: number
  timeout?: number
}

export const retryPromise = <T>(config?: RetryPromiseConfig) => async (
  f: () => Promise<T>
): Promise<T> => {
  const { attempts = 10, timeout = 1000 } = config || {}
  return new Promise<T>(async (resolve, reject) => {
    await f()
      .then(resolve)
      .catch(async (error: Error) => {
        if (attempts === 0) {
          return reject(error)
        }
        promiseWait(timeout)
        return retryPromise({ attempts: attempts - 1, timeout })(f)
      })
  })
}
