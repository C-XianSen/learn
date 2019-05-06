export function checkStrong(sValue) {
  let modes = 0

  if (sValue.length < 6) return '无'
  if (/\d/.test(sValue)) modes++
  if (/[a-z]/.test(sValue)) modes++
  if (/[A-Z]/.test(sValue)) modes++
  if (/\W/.test(sValue) && sValue.length > 12) modes++

  switch (modes) {
      case 1:
          return '低'
          break;
      case 2:
          return '中'
          break;
      case 3:
          return '高'
      case 4:
          return '超高'
          break;
  }
}