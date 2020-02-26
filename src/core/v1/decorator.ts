export function checkValid () {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    if (!target.isValid) {
      throw new Error('令牌为空或未经过验证')
    }
  }
}
