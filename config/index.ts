import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {

  title: 'Stellar Recruiting Agent',
  description: 'This PoC helps sales propose attractive candidates during the client meeting. The tool is a multisourced agent, considering different knowledge sources before delivering suggestions',
  copyright: 'Meliora',
  privacy_policy: 'To Be Defined',
  default_language: 'en',

}

export const isShowPrompt = false

export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
