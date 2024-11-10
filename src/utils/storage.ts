import localforage from 'localforage'
import { PromiseType, isPromiseType } from '../CustomTypes'


const specialKeys: string[] = [
  'nextPromiseId',
]

const tryInitiateNextPromiseId = async () => {
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
}
const getNextPromiseId = async () => {
  return await localforage.getItem(specialKeys[0]) as number
}
const incrementNextPromiseId = async () => {
  localforage.setItem(specialKeys[0], await getNextPromiseId() + 1)
}


export const getAllPromises = async () => {
  const promises: PromiseType[] = []
  const keys: string[] = await localforage.keys()

  for (let key of keys) {
    if (key in specialKeys) continue
    else {
      const item = await getPromise(key)
      if (item && isPromiseType(item)) {
        promises.push(item)
      }
    }
  }

  return promises
}

export const getPromise = async (id: number | string) => {
  return await localforage.getItem(typeof id === 'number' ? id.toString() : id)
}

export const addNewPromise = async (newPromise: PromiseType) => {
  let nextPromiseId: number = await getNextPromiseId()

  newPromise = {
    ...newPromise,
    id: nextPromiseId
  }
  await localforage.setItem(nextPromiseId.toString(), newPromise)
  await incrementNextPromiseId()
}

export const updatePromise = async (id: number, newData: PromiseType) => {
  await localforage.setItem(id.toString(), newData)
}

export const removePromise = async (id: number) => {
  await localforage.removeItem(id.toString())
}