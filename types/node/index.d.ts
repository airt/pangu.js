export { spacing, spacingText } from '../shared/core'

type SpacingFileCallback = (err?: Error, text?: string) => void

export function spacingFile(path: string, callback?: SpacingFileCallback): void

export function spacingFileSync(path: string): string
