import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie' # 🍪

export getUser = ->
  return null unless process.env.JWT_PUBLIC_KEY?
  return null unless token = Cookies.get 'token'
  jwt.verify token, process.env.JWT_PUBLIC_KEY, algorithm: 'ES512'

export signOut = ->
  Cookies.remove 'token'
