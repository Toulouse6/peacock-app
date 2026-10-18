import { useEffect } from 'react'
import { unlockMotion } from '../lib/tilt.js'
import { assetUrl } from '../lib/format.js'

export function Splash({ onDone }) {
  /*
   * Five seconds — long enough for the heart to beat three times, which is
   * the point of it beating at all. A tap still skips the rest of the hold,
   * so nobody who has seen it is kept waiting.
   */
  useEffect(() => {
    const doneTimer = window.setTimeout(onDone, 5000)
    return () => window.clearTimeout(doneTimer)
  }, [onDone])

  /*
   * The lockup used to be drawn — a crest in SVG over a wordmark set in
   * Cormorant — which meant waiting for the face to arrive before it could be
   * shown, or watching it redraw itself in Didot. It is the icon's own
   * artwork now, so there is nothing to wait for: an image either is there or
   * is being decoded, and either way it never changes shape.
   */
  return (
    <button
      type="button"
      className="splash"
      aria-label="Open Peacock"
      onClick={() => {
        unlockMotion()
        onDone()
      }}
    >
      <span className="splash-mark" aria-hidden="true">
        <img src={assetUrl('brand/pck-lockup.png')} alt="" decoding="async" />
        {/* The heart inside the eye, in the brand's green, laid exactly over
            the white one beneath it. Two images rather than one coloured
            drawing because the mark is white everywhere else in the app and
            this is the only place it is wanted in colour — and because a
            mask painted with a colour would have to be cut out of the white
            first, which is the same two layers with more steps. */}
        <span
          className="splash-core"
          style={{ '--icon': `url("${assetUrl('brand/pck-lockup-core.png')}")` }}
        />
      </span>
    </button>
  )
}
