import localforage from 'localforage'
import { PromiseType, isPromiseType } from '../CustomTypes'


const specialKeys: string[] = [
  'nextPromiseId',
]

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
      const item = await localforage.getItem(key)
      if (item && isPromiseType(item)) {
        promises.push(item)
      }
    }
  }

  return promises
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