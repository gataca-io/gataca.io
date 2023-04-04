// Return the time of reading a markdown content text
export function readingMarkdownTime(markDown: any) {
  const WORDS_PER_MINUTE = 225
  let result: any = {}
  // To see words that match: https://regex101.com/r/q2Kqjg/6
  const regex = /\w+/g
  result.wordCount = (markDown || "")?.match(regex).length
  result.readingTime = Math.ceil(result.wordCount / WORDS_PER_MINUTE)

  return result?.readingTime
}
