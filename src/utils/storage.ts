import localforage from 'localforage'
import { PromiseType, isPromiseType } from '../CustomTypes'


const specialKeys: string[] = [
  'nextPromiseId',
]

export const tryInitiateNextPromiseId = async () => {
  const nextPromiseId = await localforage.getItem(specialKeys[0])
  if (nextPromiseId) return

  const promises: PromiseType[] = await getAllPromises()
  let maxPromiseId = -1
  promises.forEach((promise) => {
    if (promise.id > maxPromiseId) {
      maxPromiseId = promise.id
    }
  })
  await localforage.setItem(specialKeys[0], maxPromiseId + 1)

  console.log(nextPromiseId)
}
const getNextPromiseId = async () => {
  return await localforage.getItem(specialKeys[0])
}
const incrementNextPromiseId = async () => {
  localforage.setItem(specialKeys[0], await getNextPromiseId() as number + 1)
}


export const getAllPromises = async () => {
  const promises: PromiseType[] = []
  const keys: string[] = await localforage.keys()
  console.log(keys)

  for (let key of keys) {
    if (specialKeys.includes(key)) continue
    else {
      const item = await getPromise(key)
      if (item && isPromiseType(item)) {
        promises.push(item)
      }
    }
  }

  return promises
}

export const getPromise = async (id: string) => {
  const promise: PromiseType | null = await localforage.getItem(id)
  return promise
}

export const addNewPromise = async (newPromise: PromiseType) => {
  let nextPromiseId: number = await getNextPromiseId() as number

  newPromise = {
    ...newPromise,
    id: nextPromiseId
  }
  await localforage.setItem(nextPromiseId.toString(), newPromise)
  await incrementNextPromiseId()
}

export const updatePromise = async (id: string, newData: PromiseType) => {
  await localforage.setItem(id, newData)
}

export const removePromise = async (id: string) => {
  await localforage.removeItem(id)
}