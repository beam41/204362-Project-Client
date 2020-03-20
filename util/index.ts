function splitToArr(from: string): string[] {
  return from.split(',').map((item) => item.trim());
}

export default { splitToArr };
