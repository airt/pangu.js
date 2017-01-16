export function spacing(text: string): string

type SpacingTextCallback = (err?: Error, text?: string) => void

export function spacingText(text: string, callback?: SpacingTextCallback): void
