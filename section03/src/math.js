// math 모듈
// 1. CJS come on js
// 2. ESM 시스템
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// export { add, sub }; 이렇게 마지막에 처리해도 괜찮다
