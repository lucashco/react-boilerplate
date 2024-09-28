import {AuthCredentials} from '@/features'

import {storage} from '../storage'

const AUTH_KEY = '@Auth'

async function set(ac: AuthCredentials) {
  await storage.setItem(AUTH_KEY, ac)
}

async function get() {
  return storage.getItem<AuthCredentials>(AUTH_KEY)
}

async function remove() {
  return storage.removeItem(AUTH_KEY)
}

export const authCredentialsStorage = {
  set,
  get,
  remove,
}
