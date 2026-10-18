import { earnAmount } from '../lib/format.js'
import { TokenMark } from './TokenMark.jsx'

export function EarnBadge({ item }) {
  const points = earnAmount(item)

  return (
    <span className="earn-badge" title={`Gain ${points} pck at this party`}>
      {/* The currency and the figure, and nothing else. The plate is green
          and only ever carries a gain, so the sign was saying in a glyph
          what the colour and the context already say. */}
      <TokenMark />
      {points}
    </span>
  )
}
