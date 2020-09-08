import { IsValid } from './request'
export function checkValid() {
  return function (
    target: unknown,
    name: string,
    descriptor: PropertyDescriptor,
  ): void {
    const method = descriptor.value
    descriptor.value = function (...args: unknown[]) {
      // console.error(IsValid)
      if (!IsValid) {
        throw new Error('令牌为空或未经过验证')
        // console.error('令牌为空或未经过验证')
      }
      return method.apply(target, args)
    }
  }
}
