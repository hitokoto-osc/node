import { IsValid } from './request'
export function checkValid () {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value
    descriptor.value = function (...args: any[]) {
      // console.error(IsValid)
      if (!IsValid) {
        throw new Error('令牌为空或未经过验证')
        // console.error('令牌为空或未经过验证')
      }
      return method.apply(target, args)
    }
  }
}
