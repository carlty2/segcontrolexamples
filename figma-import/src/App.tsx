import { useState, useRef, useLayoutEffect, useEffect, useCallback } from 'react'

// ─── Icon ─────────────────────────────────────────────────────────────────────

function AccessIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="3" r="1.5" fill="currentColor" />
      <path
        d="M5 6.5h6M8 6.5v5M6 9.5l-1.5 2.5M10 9.5l1.5 2.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────

type Emphasis   = 'bold' | 'subtle'
type Size       = 'lg' | 'md'
type Variant    = 'icon + text' | 'icon only'
type Width      = 'fill' | 'fixed' | 'short'
type AnimType   = 'slide' | 'fade' | 'scale-fill' | 'scale-fill-xy' | 'scale-fill-v2'

const PAD = 4
const GAP = 6

// ─── Segmented Control ────────────────────────────────────────────────────────

type SegControlProps = {
  size: Size
  emphasis: Emphasis
  variant: Variant
  width: Width
  count?: number
  animation: AnimType
  duration?: number
  iconScale?: boolean
  hoverOverlay?: boolean
  iconHoverScale?: boolean
  bgCurve?: string
  bgDelay?: number
  bgDelayOut?: number
  durationOut?: number
  outKf?: string
  selectionDuration?: number
}

function SegControl({ size, emphasis, variant, width, count = 5, animation, duration = 150, iconScale = false, hoverOverlay = false, iconHoverScale = false, bgCurve, bgDelay, bgDelayOut, durationOut, outKf, selectionDuration }: SegControlProps) {
  const isBold     = emphasis === 'bold'
  const isLg       = size === 'lg'
  const showLabel  = variant === 'icon + text'
  const isSlide       = animation === 'slide'
  const isFade        = animation === 'fade'
  const isScaleFill   = animation === 'scale-fill'
  const isScaleFillXY = animation === 'scale-fill-xy'
  const isScaleFillV2 = animation === 'scale-fill-v2'
  const isScaleFillAny = isScaleFill || isScaleFillXY || isScaleFillV2

  const [selectedIdx,     setSelectedIdx]     = useState(0)
  const [prevSelectedIdx, setPrevSelectedIdx] = useState<number | null>(null)
  const [hoveredIdx,      setHoveredIdx]      = useState<number | null>(null)
  const [pressedIdx,      setPressedIdx]      = useState<number | null>(null)
  const [scalingIdx,      setScalingIdx]      = useState<number | null>(null)

  // Measure segment width (slide only)
  const containerRef = useRef<HTMLDivElement>(null)
  const [segW, setSegW] = useState(0)

  const measureSeg = useCallback(() => {
    if (!containerRef.current) return
    const innerW = containerRef.current.clientWidth - PAD * 2
    setSegW((innerW - GAP * (count - 1)) / count)
  }, [count])

  useLayoutEffect(() => { measureSeg() }, [measureSeg])
  useEffect(() => {
    const ro = new ResizeObserver(measureSeg)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [measureSeg])

  // Colors
  const selBase   = isBold ? '#3366ff'              : 'rgba(51,102,255,0.2)'
  const selHover  = isBold ? '#2E5BE6'              : '#C3D3FF'
  const selActive = isBold ? '#2B53D5'              : '#B7CCFF'

  const slidingBg = (() => {
    if (pressedIdx === selectedIdx) return selActive
    if (hoveredIdx === selectedIdx) return selHover
    return selBase
  })()

  const unselOverlay = (i: number) => {
    if (i === selectedIdx) return 'transparent'
    if (pressedIdx === i)  return '#DFE2E5'
    if (hoveredIdx === i)  return '#ECEEF0'
    return 'transparent'
  }

  const textColor = (i: number) => {
    if (i === selectedIdx) return isBold ? '#ffffff' : '#393f46'
    return isBold ? '#222222' : '#393f46'
  }

  // Fade: unified bg — covers both selected and unselected states so
  // the colour always transitions from whatever is currently showing
  const fadeBg = (i: number) => {
    if (i === selectedIdx) {
      if (pressedIdx === i) return selActive
      if (hoveredIdx === i) return selHover
      return selBase
    }
    if (pressedIdx === i) return '#DFE2E5'
    if (hoveredIdx === i) return '#ECEEF0'
    return 'transparent'
  }

  const trackH = isLg ? 56 : 44
  const border  = isBold ? '#818b98' : '#dae0e7'
  const cWidth: string | number = width === 'fill' ? '100%' : width === 'short' ? 300 : 500
  const px = isLg ? 20 : 12
  const py = isLg ? 14 : 8
  const tx = selectedIdx * (segW + GAP)

  const handleClick = (i: number) => {
    if (i === selectedIdx) return
    if (isScaleFillV2 || isScaleFillXY || isScaleFill || isFade) setPrevSelectedIdx(selectedIdx)
    setSelectedIdx(i)
    if (isFade) setHoveredIdx(i)
    if (iconScale) setScalingIdx(i)
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', backgroundColor: '#fff', borderRadius: 9999,
               border: `1px solid ${border}`, height: trackH, width: cWidth, flexShrink: 0, overflow: 'hidden' }}
    >
      {/* Sliding pill */}
      {isSlide && segW > 0 && (
        <div
          style={{
            position: 'absolute', top: PAD, bottom: PAD, left: PAD, width: segW,
            borderRadius: 9999, backgroundColor: slidingBg,
            transform: `translateX(${tx}px)`,
            transition: `transform ${duration}ms ease-in-out, background-color 80ms ease`,
            pointerEvents: 'none', zIndex: 0,
          }}
        >
          {!isBold && (
            <div style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)',
                          width: showLabel ? 32 : 12, height: 3, borderRadius: 2, backgroundColor: '#3366ff' }} />
          )}
        </div>
      )}

      {/* Buttons row */}
      <div style={{ display: 'flex', gap: GAP, padding: PAD, height: '100%', position: 'relative', zIndex: 1 }}>
        {Array.from({ length: count }).map((_, i) => {
          const isSel = i === selectedIdx
          return (
            <button
              key={i}
              type="button"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => { setHoveredIdx(null); setPressedIdx(null) }}
              onMouseDown={() => setPressedIdx(i)}
              onMouseUp={() => setPressedIdx(null)}
              onClick={() => handleClick(i)}
              style={{
                flex: '1 0 0', minWidth: 0, position: 'relative', borderRadius: 9999,
                border: 'none', background: 'transparent', cursor: 'pointer', padding: 0,
                color: textColor(i),
                transition: isFade && isBold ? `color ${prevSelectedIdx !== null ? (selectionDuration ?? duration) : duration}ms ease`
                  : isScaleFillXY && isBold ? `color ${duration}ms ease-out ${bgDelay ?? 80}ms`
                  : isScaleFill && isBold ? `color ${duration}ms ease-in-out ${bgDelay ?? 0}ms`
                  : isScaleFillV2 && isBold ? `color ${prevSelectedIdx === i ? (durationOut ?? duration) : duration}ms ease-in-out ${prevSelectedIdx === i ? (bgDelayOut ?? bgDelay ?? 80) : (bgDelay ?? 80)}ms`
                  : undefined,
              }}
            >
              {/* Fade: single unified bg — all state transitions on one div so
                  colour always eases from whatever is currently showing */}
              {isFade && (
                <div
                  style={{ position: 'absolute', inset: 0, borderRadius: 9999,
                           backgroundColor: fadeBg(i),
                           transition: !isSel && pressedIdx === i ? 'none'
                             : `background-color ${prevSelectedIdx !== null ? (selectionDuration ?? duration) : duration}ms ease`,
                           pointerEvents: 'none' }}
                  onTransitionEnd={() => { if (prevSelectedIdx === i) setPrevSelectedIdx(null) }}
                >
                  {!isBold && isSel && (
                    <div style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)',
                                  width: showLabel ? 32 : 12, height: 3, borderRadius: 2, backgroundColor: '#3366ff' }} />
                  )}
                </div>
              )}

              {/* Animation 2 / 3 hover overlay — sits UNDER the selected bg (rendered first),
                  stays visible while selected, fades out with outgoing selected bg.
                  Subtle: selected fill is translucent, so the grey would show through —
                  fade the underlay out over 50ms after the fill completes.
                  Also used for Animation 4 example 6 (hoverOverlay flag). */}
              {(isScaleFill || isScaleFillXY || (isScaleFillV2 && hoverOverlay)) && (
                <div style={{ position: 'absolute', inset: 0, borderRadius: 9999,
                              backgroundColor: pressedIdx === i ? '#DFE2E5' : '#ECEEF0',
                              opacity: !isBold && isSel
                                ? 0
                                : (isSel || hoveredIdx === i || pressedIdx === i ? 1 : 0),
                              transition: !isBold && isSel
                                ? `background-color 80ms ease, opacity 50ms ease-in-out ${isScaleFillXY ? (bgDelay ?? 80) + duration : (bgDelay ?? 0) + duration}ms`
                                : prevSelectedIdx === i
                                  ? `background-color 80ms ease, opacity 50ms ease-in-out`
                                  : `background-color 80ms ease, opacity 80ms ease`,
                              pointerEvents: 'none' }} />
              )}

              {/* Scale-fill: per-segment bg that expands/contracts from center */}
              {isScaleFillAny && (
                <div
                  style={{ position: 'absolute', inset: 0, borderRadius: 9999,
                           backgroundColor: isSel ? slidingBg : selBase,
                           transform: `scaleX(${isSel ? 1 : 0.40}) scaleY(${(isScaleFillXY || isScaleFillV2) ? (isSel ? 1 : 0.40) : 1})`,
                           opacity: isSel ? 1 : 0,
                           transformOrigin: 'center',
                           transition: isScaleFillV2
                             ? `transform ${duration}ms cubic-bezier(0.34,1.56,0.64,1) ${bgDelay ?? 80}ms, opacity ${duration}ms ease-in ${bgDelay ?? 80}ms, background-color 80ms ease`
                             : isScaleFillXY
                               ? `transform ${duration}ms ease-out ${bgDelay ?? 80}ms, opacity ${duration}ms ease-out ${bgDelay ?? 80}ms, background-color 80ms ease`
                               : `transform ${duration}ms ${bgCurve ?? 'ease-out'}${bgDelay ? ` ${bgDelay}ms` : ''}, opacity ${duration}ms ${bgCurve ?? 'ease-out'}${bgDelay ? ` ${bgDelay}ms` : ''}, background-color 80ms ease`,
                           animation: isScaleFillV2 && prevSelectedIdx === i
                             ? `${outKf ?? 'scaleFillOut'} ${durationOut ?? duration}ms ease-out ${bgDelayOut ?? bgDelay ?? 80}ms forwards`
                             : isScaleFillXY && prevSelectedIdx === i
                               ? `scaleFillXYOut ${duration}ms ease-in ${bgDelayOut ?? bgDelay ?? 80}ms forwards`
                               : undefined,
                           pointerEvents: 'none' }}
                  onAnimationEnd={() => { if ((isScaleFillV2 || isScaleFillXY) && prevSelectedIdx === i) setPrevSelectedIdx(null) }}
                  onTransitionEnd={(e) => { if (isScaleFill && prevSelectedIdx === i && e.propertyName === 'opacity') setPrevSelectedIdx(null) }}
                >
                  {!isBold && (isSel || ((isScaleFill || isScaleFillXY || isScaleFillV2) && prevSelectedIdx === i)) && (
                    <div style={{ position: 'absolute', bottom: 4, left: '50%', transform: 'translateX(-50%)',
                                  width: showLabel ? 32 : 12, height: 3, borderRadius: 2, backgroundColor: '#3366ff' }} />
                  )}
                </div>
              )}

              {/* Hover/active overlay — slide and Animation 4 (scale-fill-v2), except hoverOverlay instances */}
              {(isSlide || (isScaleFillV2 && !hoverOverlay)) && !isSel && (
                <div style={{ position: 'absolute', inset: 0, borderRadius: 9999,
                              backgroundColor: unselOverlay(i),
                              transition: 'background-color 80ms ease',
                              pointerEvents: 'none' }} />
              )}

              {/* Content */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                            gap: isLg ? 8 : 6, paddingLeft: px, paddingRight: px,
                            paddingTop: py,
                            paddingBottom: py,
                            height: '100%', position: 'relative', zIndex: 1 }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                           transformOrigin: 'center',
                           transform: (iconHoverScale || isScaleFillAny)
                             ? pressedIdx === i ? 'scale(1)' : hoveredIdx === i ? 'scale(1.15)' : 'scale(1)'
                             : undefined,
                           transition: (iconHoverScale || isScaleFillAny) ? 'transform 80ms ease' : undefined,
                           animation: iconScale && scalingIdx === i
                             ? isScaleFillV2
                               ? 'iconPulse 250ms ease-in 80ms'
                               : 'iconPulse 300ms ease-in-out 50ms both'
                             : 'none' }}
                  onAnimationEnd={() => { if (iconScale && scalingIdx === i) setScalingIdx(null) }}
                >
                  <AccessIcon />
                </div>
                {showLabel && (
                  <span style={{ fontSize: 14, lineHeight: '20px', fontFamily: "'Roboto', sans-serif",
                                 fontWeight: 500, fontVariationSettings: '"wdth" 100', whiteSpace: 'nowrap' }}>
                    Label
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Spec table ───────────────────────────────────────────────────────────────

type SpecRow   = { property: string; from: string; to: string; trigger: string; duration: string }
type SpecGroup = { heading: string; rows: SpecRow[] }

function AnimSpec({ groups }: { groups: SpecGroup[] }) {
  const mono: React.CSSProperties = { fontFamily: "'Roboto Mono', monospace", fontSize: 11 }
  const label: React.CSSProperties = { ...mono, color: '#9ba6b2', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }
  const cell: React.CSSProperties  = { ...mono, color: '#3d4854', paddingTop: 5, paddingBottom: 5, paddingRight: 24, verticalAlign: 'top', lineHeight: '18px' }

  const getDelay = (duration: string): string | null => {
    if (duration.includes('no delay')) return null
    const m = duration.match(/(\d+ms)\s+delay/)
    return m ? m[1] : null
  }

  const stripDelay = (duration: string): string =>
    duration.replace(/,\s*\d+ms\s+delay/, '').trim()

  return (
    <div style={{ backgroundColor: '#f5f7fa', borderRadius: '0 0 12px 12px', padding: '20px 24px',
                  display: 'flex', flexDirection: 'column', gap: 20 }}>
      {groups.map((g, gi) => (
        <div key={gi}>
          <div style={{ ...label, marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid #e3e7ec' }}>
            {g.heading}
          </div>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                {(['Property', 'From', 'To', 'Trigger', 'Duration'] as const).map(h => (
                  <th key={h} style={{ ...label, textAlign: 'left', paddingBottom: 6, paddingRight: 24, fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {g.rows.map((r, ri) => {
                const delay = getDelay(r.duration)
                return (
                  <tr key={ri} style={{ borderTop: '1px solid #eaecf0' }}>
                    <td style={{ ...cell, color: '#1a2533', fontWeight: 500 }}>{r.property}</td>
                    <td style={cell}>{r.from}</td>
                    <td style={cell}>{r.to}</td>
                    <td style={cell}>{r.trigger}</td>
                    <td style={cell}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap' }}>
                        {delay ? stripDelay(r.duration) : r.duration}
                        {delay && (
                          <span style={{ ...mono, fontSize: 9, color: '#8a7cad', fontWeight: 600,
                                         backgroundColor: '#f0edf8', borderRadius: 3, padding: '1px 5px',
                                         letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
                            ⏱ {delay} delay
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

// ─── Spec data ────────────────────────────────────────────────────────────────

const SHARED_HOVER_BOLD: SpecRow[] = [
  { property: 'Unselected bg', from: 'transparent', to: '#ECEEF0', trigger: 'Hover',  duration: '80ms ease' },
  { property: 'Unselected bg', from: '#ECEEF0',     to: '#DFE2E5', trigger: 'Press',  duration: '80ms ease' },
  { property: 'Selected bg',   from: '#3366FF',     to: '#2E5BE6', trigger: 'Hover',  duration: '80ms ease' },
  { property: 'Selected bg',   from: '#2E5BE6',     to: '#2B53D5', trigger: 'Press',  duration: '80ms ease' },
]
const SHARED_HOVER_SUBTLE: SpecRow[] = [
  { property: 'Unselected bg', from: 'transparent',           to: '#ECEEF0', trigger: 'Hover', duration: '80ms ease' },
  { property: 'Unselected bg', from: '#ECEEF0',               to: '#DFE2E5', trigger: 'Press', duration: '80ms ease' },
  { property: 'Selected bg',   from: 'rgba(51,102,255,0.2)', to: '#C3D3FF', trigger: 'Hover', duration: '80ms ease' },
  { property: 'Selected bg',   from: '#C3D3FF',               to: '#B7CCFF', trigger: 'Press', duration: '80ms ease' },
]

const DUR_SLIDE = '200ms ease-in-out (ex. 1–3) / 250ms (ex. 4–5)'

const SLIDE_SPEC: SpecGroup[] = [
  { heading: 'Bold variants — hover / active', rows: SHARED_HOVER_BOLD },
  {
    heading: 'Bold variants — selection change',
    rows: [
      { property: 'Pill translateX',             from: 'prev segment offset', to: 'new segment offset', trigger: 'Click unselected',              duration: DUR_SLIDE },
      { property: 'Outgoing icon + label color', from: '#FFFFFF',             to: '#222222',             trigger: 'Click unselected',              duration: 'Immediate' },
      { property: 'Incoming icon + label color', from: '#222222',             to: '#FFFFFF',             trigger: 'Click unselected',              duration: 'Immediate' },
      { property: 'Clicked segment icon scale',  from: '1×',                 to: '1.2× → 1×',           trigger: 'Click unselected, 50ms delay',  duration: '300ms ease-in-out (ex. 4–5 only)' },
    ],
  },
  { heading: 'Subtle variants — hover / active', rows: SHARED_HOVER_SUBTLE },
  {
    heading: 'Subtle variants — selection change',
    rows: [
      { property: 'Pill translateX',            from: 'prev segment offset', to: 'new segment offset', trigger: 'Click unselected',              duration: DUR_SLIDE },
      { property: 'Indicator bar',              from: '—',                   to: '—',                   trigger: 'Rides inside pill',             duration: 'No separate transition' },
      { property: 'Icon + label color',         from: '#393f46',             to: '#393f46',             trigger: '—',                            duration: 'No change' },
      { property: 'Clicked segment icon scale', from: '1×',                 to: '1.2× → 1×',           trigger: 'Click unselected, 50ms delay',  duration: '300ms ease-in-out (ex. 4–5 only)' },
    ],
  },
]

const FADE_HOVER_BOLD: SpecRow[] = [
  { property: 'Unselected bg', from: 'transparent', to: '#ECEEF0', trigger: 'Hover',  duration: 'Immediate (data-no-animation zeroes all transitions)' },
  { property: 'Unselected bg', from: '#ECEEF0',     to: '#DFE2E5', trigger: 'Press',  duration: 'Immediate' },
  { property: 'Selected bg',   from: '#3366FF',     to: '#2E5BE6', trigger: 'Hover',  duration: 'Immediate' },
  { property: 'Selected bg',   from: '#2E5BE6',     to: '#2B53D5', trigger: 'Press',  duration: 'Immediate' },
]
const FADE_HOVER_SUBTLE: SpecRow[] = [
  { property: 'Unselected bg', from: 'transparent',           to: '#ECEEF0', trigger: 'Hover', duration: 'Immediate (data-no-animation zeroes all transitions)' },
  { property: 'Unselected bg', from: '#ECEEF0',               to: '#DFE2E5', trigger: 'Press', duration: 'Immediate' },
  { property: 'Selected bg',   from: 'rgba(51,102,255,0.2)', to: '#C3D3FF', trigger: 'Hover', duration: 'Immediate' },
  { property: 'Selected bg',   from: '#C3D3FF',               to: '#B7CCFF', trigger: 'Press', duration: 'Immediate' },
]

const FADE_SPEC: SpecGroup[] = [
  { heading: 'Bold variants — hover / active', rows: FADE_HOVER_BOLD },
  {
    heading: 'Bold variants — selection change',
    rows: [
      { property: 'Outgoing selected bg',        from: '#2E5BE6 (hover) or #3366FF', to: 'transparent', trigger: 'Click unselected',       duration: 'Immediate' },
      { property: 'Outgoing icon + label color', from: '#FFFFFF',                    to: '#222222',     trigger: 'Click unselected',       duration: 'Immediate' },
      { property: 'Incoming selected bg',        from: '#DFE2E5 (pressed) or #ECEEF0 (hover)', to: '#2E5BE6', trigger: 'Click (cursor present)', duration: 'Immediate' },
      { property: 'Incoming icon + label color', from: '#222222',                    to: '#FFFFFF',     trigger: 'Click (cursor present)', duration: 'Immediate' },
    ],
  },
  { heading: 'Subtle variants — hover / active', rows: FADE_HOVER_SUBTLE },
  {
    heading: 'Subtle variants — selection change',
    rows: [
      { property: 'Outgoing selected bg',   from: '#C3D3FF (hover) or rgba(51,102,255,0.2)', to: 'transparent',           trigger: 'Click unselected',       duration: 'Immediate' },
      { property: 'Outgoing indicator bar', from: 'visible',                                  to: 'hidden (with bg)',       trigger: 'Click unselected',       duration: 'Immediate' },
      { property: 'Incoming selected bg',   from: '#DFE2E5 (pressed) or #ECEEF0 (hover)',    to: '#C3D3FF',                trigger: 'Click (cursor present)', duration: 'Immediate' },
      { property: 'Incoming indicator bar', from: 'hidden',                                   to: 'visible (with bg)',      trigger: 'Click (cursor present)', duration: 'Immediate' },
      { property: 'Icon + label color',     from: '#393f46',                                  to: '#393f46',                trigger: '—',                      duration: 'No change' },
    ],
  },
]

const SCALE_FILL_SPEC: SpecGroup[] = [
  { heading: 'Bold variants — hover / active', rows: [
    { property: 'Unselected bg',  from: 'transparent', to: '#ECEEF0', trigger: 'Hover',  duration: '80ms ease (opacity — hover overlay)' },
    { property: 'Unselected bg',  from: '#ECEEF0',     to: '#DFE2E5', trigger: 'Press',  duration: '80ms ease (background-color)' },
    { property: 'Selected bg',    from: '#3366FF',     to: '#2E5BE6', trigger: 'Hover',  duration: '80ms ease' },
    { property: 'Selected bg',    from: '#2E5BE6',     to: '#2B53D5', trigger: 'Press',  duration: '80ms ease' },
    { property: 'Icon scale',     from: '1×',          to: '1.15×',   trigger: 'Hover',  duration: '80ms ease' },
    { property: 'Icon scale',     from: '1.15×',       to: '1×',      trigger: 'Press',  duration: '80ms ease' },
  ]},
  {
    heading: 'Bold variants — selection change',
    rows: [
      { property: 'Hover overlay',               from: 'visible',  to: 'stays visible under selected bg', trigger: 'Click unselected',    duration: 'No change — fades out only on deselect' },
      { property: 'Incoming bg scaleX',          from: '0.40',     to: '1',       trigger: 'Click unselected',    duration: '120ms ease-out, 150ms delay, transform-origin: center' },
      { property: 'Incoming bg opacity',         from: '0',        to: '1',       trigger: 'Click unselected',    duration: '120ms ease-out, 150ms delay' },
      { property: 'Incoming icon + label color', from: '#222222',  to: '#FFFFFF', trigger: 'Click unselected',    duration: '120ms ease-in-out, 150ms delay' },
      { property: 'Outgoing bg scaleX',          from: '1',        to: '0.40',    trigger: 'Click other segment', duration: '120ms ease-out, 150ms delay, transform-origin: center' },
      { property: 'Outgoing bg opacity',         from: '1',        to: '0',       trigger: 'Click other segment', duration: '120ms ease-out, 150ms delay' },
      { property: 'Outgoing hover overlay',      from: '1',        to: '0',       trigger: 'Click other segment', duration: '50ms ease-in-out — simultaneous with trigger' },
      { property: 'Outgoing icon + label color', from: '#FFFFFF',  to: '#222222', trigger: 'Click other segment', duration: '120ms ease-in-out, 150ms delay' },
    ],
  },
  { heading: 'Subtle variants — hover / active', rows: [
    { property: 'Unselected bg',  from: 'transparent',           to: '#ECEEF0', trigger: 'Hover',  duration: '80ms ease (opacity — hover overlay)' },
    { property: 'Unselected bg',  from: '#ECEEF0',               to: '#DFE2E5', trigger: 'Press',  duration: '80ms ease (background-color)' },
    { property: 'Selected bg',    from: 'rgba(51,102,255,0.2)', to: '#C3D3FF', trigger: 'Hover',  duration: '80ms ease' },
    { property: 'Selected bg',    from: '#C3D3FF',               to: '#B7CCFF', trigger: 'Press',  duration: '80ms ease' },
    { property: 'Icon scale',     from: '1×',                    to: '1.15×',   trigger: 'Hover',  duration: '80ms ease' },
    { property: 'Icon scale',     from: '1.15×',                 to: '1×',      trigger: 'Press',  duration: '80ms ease' },
  ]},
  {
    heading: 'Subtle variants — selection change',
    rows: [
      { property: 'Hover overlay (under fill)',  from: 'visible',  to: 'transparent', trigger: 'After fill lands',    duration: '50ms ease-in-out, 270ms delay (150ms trigger + 120ms fill)' },
      { property: 'Incoming bg scaleX',          from: '0.40',     to: '1',           trigger: 'Click unselected',    duration: '120ms ease-out, 150ms delay, transform-origin: center' },
      { property: 'Incoming bg opacity',         from: '0',        to: '1',           trigger: 'Click unselected',    duration: '120ms ease-out, 150ms delay' },
      { property: 'Indicator bar',               from: '—',        to: '—',           trigger: 'Fills with bg',       duration: 'No separate transition — rides inside bg' },
      { property: 'Outgoing bg scaleX',          from: '1',        to: '0.40',        trigger: 'Click other segment', duration: '120ms ease-out, 150ms delay, transform-origin: center' },
      { property: 'Outgoing bg opacity',         from: '1',        to: '0',           trigger: 'Click other segment', duration: '120ms ease-out, 150ms delay' },
      { property: 'Outgoing indicator bar',      from: 'visible',  to: 'hidden',      trigger: 'Click other segment', duration: 'Rides outgoing bg — 120ms ease-out, 150ms delay' },
      { property: 'Outgoing hover overlay',      from: '1',        to: '0',           trigger: 'Click other segment', duration: '50ms ease-in-out — simultaneous with trigger' },
      { property: 'Icon + label color',          from: '#393f46',  to: '#393f46',     trigger: '—',                   duration: 'No change' },
    ],
  },
]

const SCALE_FILL_XY_SPEC: SpecGroup[] = [
  { heading: 'Bold variants — hover / active', rows: [
    { property: 'Unselected bg',  from: 'transparent', to: '#ECEEF0', trigger: 'Hover',  duration: '80ms ease (opacity — hover overlay)' },
    { property: 'Unselected bg',  from: '#ECEEF0',     to: '#DFE2E5', trigger: 'Press',  duration: '80ms ease (background-color)' },
    { property: 'Selected bg',    from: '#3366FF',     to: '#2E5BE6', trigger: 'Hover',  duration: '80ms ease' },
    { property: 'Selected bg',    from: '#2E5BE6',     to: '#2B53D5', trigger: 'Press',  duration: '80ms ease' },
    { property: 'Icon scale',     from: '1×',          to: '1.15×',   trigger: 'Hover',  duration: '80ms ease' },
    { property: 'Icon scale',     from: '1.15×',       to: '1×',      trigger: 'Press',  duration: '80ms ease' },
  ]},
  {
    heading: 'Bold variants — selection change',
    rows: [
      { property: 'Hover overlay',                   from: 'visible',  to: 'stays visible under selected bg', trigger: 'Click unselected',    duration: 'No change — fades out only on deselect' },
      { property: 'Incoming bg scaleX + scaleY',     from: '0.40',     to: '1',       trigger: 'Click unselected',    duration: '120ms ease-out, 120ms delay, transform-origin: center' },
      { property: 'Incoming bg opacity',             from: '0',        to: '1',       trigger: 'Click unselected',    duration: '120ms ease-out, 120ms delay' },
      { property: 'Incoming icon + label color',     from: '#222222',  to: '#FFFFFF', trigger: 'Click unselected',    duration: '120ms ease-out, 120ms delay' },
      { property: 'Outgoing bg scaleX + scaleY',     from: '1',        to: '0.75',    trigger: 'Click other segment', duration: '120ms ease-in, 120ms delay, transform-origin: center — keyframe' },
      { property: 'Outgoing bg opacity',             from: '1',        to: '0',       trigger: 'Click other segment', duration: '120ms ease-in, 120ms delay' },
      { property: 'Outgoing hover overlay',          from: '1',        to: '0',       trigger: 'Click other segment', duration: '50ms ease-in-out — simultaneous with trigger' },
      { property: 'Outgoing icon + label color',     from: '#FFFFFF',  to: '#222222', trigger: 'Click other segment', duration: '120ms ease-out, 120ms delay' },
    ],
  },
  { heading: 'Subtle variants — hover / active', rows: [
    { property: 'Unselected bg',  from: 'transparent',           to: '#ECEEF0', trigger: 'Hover',  duration: '80ms ease (opacity — hover overlay)' },
    { property: 'Unselected bg',  from: '#ECEEF0',               to: '#DFE2E5', trigger: 'Press',  duration: '80ms ease (background-color)' },
    { property: 'Selected bg',    from: 'rgba(51,102,255,0.2)', to: '#C3D3FF', trigger: 'Hover',  duration: '80ms ease' },
    { property: 'Selected bg',    from: '#C3D3FF',               to: '#B7CCFF', trigger: 'Press',  duration: '80ms ease' },
    { property: 'Icon scale',     from: '1×',                    to: '1.15×',   trigger: 'Hover',  duration: '80ms ease' },
    { property: 'Icon scale',     from: '1.15×',                 to: '1×',      trigger: 'Press',  duration: '80ms ease' },
  ]},
  {
    heading: 'Subtle variants — selection change',
    rows: [
      { property: 'Hover overlay (under fill)',      from: 'visible',  to: 'transparent', trigger: 'After fill lands',    duration: '50ms ease-in-out, 240ms delay (120ms trigger + 120ms fill)' },
      { property: 'Incoming bg scaleX + scaleY',     from: '0.40',     to: '1',           trigger: 'Click unselected',    duration: '120ms ease-out, 120ms delay, transform-origin: center' },
      { property: 'Incoming bg opacity',             from: '0',        to: '1',           trigger: 'Click unselected',    duration: '120ms ease-out, 120ms delay' },
      { property: 'Indicator bar',                   from: '—',        to: '—',           trigger: 'Fills with bg',       duration: 'No separate transition — rides inside bg' },
      { property: 'Outgoing bg scaleX + scaleY',     from: '1',        to: '0.75',        trigger: 'Click other segment', duration: '120ms ease-in, 120ms delay, transform-origin: center — keyframe' },
      { property: 'Outgoing bg opacity',             from: '1',        to: '0',           trigger: 'Click other segment', duration: '120ms ease-in, 120ms delay' },
      { property: 'Outgoing indicator bar',          from: 'visible',  to: 'hidden',      trigger: 'Click other segment', duration: 'Rides outgoing bg — 120ms ease-in, 120ms delay' },
      { property: 'Outgoing hover overlay',          from: '1',        to: '0',           trigger: 'Click other segment', duration: '50ms ease-in-out — simultaneous with trigger' },
      { property: 'Icon + label color',              from: '#393f46',  to: '#393f46',     trigger: '—',                   duration: 'No change' },
    ],
  },
]

const SCALE_FILL_V2_SPEC: SpecGroup[] = [
  { heading: 'Ex. 1–5 — bold variants — hover / active', rows: [
    ...SHARED_HOVER_BOLD,
    { property: 'Icon scale',     from: '1×',    to: '1.15×', trigger: 'Hover', duration: '80ms ease' },
    { property: 'Icon scale',     from: '1.15×', to: '1×',    trigger: 'Press', duration: '80ms ease' },
  ]},
  { heading: 'Ex. 6 only — bold — hover / active (hover overlay, differs from ex. 1–5)', rows: [
    { property: 'Unselected bg',  from: 'transparent', to: '#ECEEF0', trigger: 'Hover',  duration: '80ms ease (opacity — hover overlay) — vs 80ms bg-color in ex. 1–5' },
    { property: 'Unselected bg',  from: '#ECEEF0',     to: '#DFE2E5', trigger: 'Press',  duration: '80ms ease (background-color)' },
    { property: 'Selected bg',    from: '#3366FF',     to: '#2E5BE6', trigger: 'Hover',  duration: '80ms ease' },
    { property: 'Selected bg',    from: '#2E5BE6',     to: '#2B53D5', trigger: 'Press',  duration: '80ms ease' },
    { property: 'Icon scale',     from: '1×',          to: '1.15×',   trigger: 'Hover',  duration: '80ms ease' },
    { property: 'Icon scale',     from: '1.15×',       to: '1×',      trigger: 'Press',  duration: '80ms ease' },
  ]},
  {
    heading: 'Bold variants — selection change',
    rows: [
      { property: 'Incoming bg scaleX + scaleY', from: '0.40',    to: '1 (+ overshoot)',         trigger: 'Click unselected', duration: '200ms cubic-bezier(0.34,1.56,0.64,1), 80ms delay — spring' },
      { property: 'Incoming bg opacity',          from: '0',       to: '1',                       trigger: 'Click unselected', duration: '200ms ease-in, 80ms delay' },
      { property: 'Incoming icon + label color',  from: '#222222', to: '#FFFFFF',                 trigger: 'Click unselected', duration: '200ms ease-in-out, 80ms delay' },
      { property: 'Outgoing bg scaleX + scaleY', from: '1',       to: '1.08 → 0.75 (keyframe)',  trigger: 'Click unselected', duration: '200ms ease-in-out (expand) → ease-in (contract), 80ms delay' },
      { property: 'Outgoing bg opacity',          from: '1',       to: '0',                       trigger: 'Click unselected', duration: '120ms ease-in, 80ms delay (completes at 60% of scale anim)' },
      { property: 'Outgoing icon + label color',  from: '#FFFFFF', to: '#222222',                 trigger: 'Click unselected', duration: '200ms ease-in-out, 80ms delay' },
    ],
  },
  { heading: 'Ex. 1–5 — subtle variants — hover / active', rows: [
    ...SHARED_HOVER_SUBTLE,
    { property: 'Icon scale',     from: '1×',    to: '1.15×', trigger: 'Hover', duration: '80ms ease' },
    { property: 'Icon scale',     from: '1.15×', to: '1×',    trigger: 'Press', duration: '80ms ease' },
  ]},
  {
    heading: 'Subtle variants — selection change',
    rows: [
      { property: 'Incoming bg scaleX + scaleY', from: '0.40',    to: '1 (+ overshoot)',         trigger: 'Click unselected', duration: '200ms cubic-bezier(0.34,1.56,0.64,1), 80ms delay — spring' },
      { property: 'Incoming bg opacity',          from: '0',       to: '1',                       trigger: 'Click unselected', duration: '200ms ease-in, 80ms delay' },
      { property: 'Indicator bar',                from: '—',       to: '—',                       trigger: 'Fills with bg',    duration: 'No separate transition' },
      { property: 'Outgoing bg scaleX + scaleY', from: '1',       to: '1.08 → 0.75 (keyframe)',  trigger: 'Click unselected', duration: '200ms ease-in-out (expand) → ease-in (contract), 80ms delay' },
      { property: 'Outgoing bg opacity',          from: '1',       to: '0',                       trigger: 'Click unselected', duration: '120ms ease-in, 80ms delay (completes at 60% of scale anim)' },
      { property: 'Outgoing indicator bar',       from: 'visible', to: 'hidden',                  trigger: 'Click unselected', duration: 'Rides outgoing bg — 200ms, 80ms delay' },
      { property: 'Icon + label color',           from: '#393f46', to: '#393f46',                 trigger: '—',                duration: 'No change' },
    ],
  },
]

const ANIM_0_HOVER_BOLD: SpecRow[] = [
  { property: 'Unselected bg', from: 'transparent', to: '#ECEEF0', trigger: 'Hover',  duration: '80ms ease' },
  { property: 'Unselected bg', from: '#ECEEF0',     to: '#DFE2E5', trigger: 'Press',  duration: 'Immediate' },
  { property: 'Selected bg',   from: '#3366FF',     to: '#2E5BE6', trigger: 'Hover',  duration: '80ms ease' },
  { property: 'Selected bg',   from: '#2E5BE6',     to: '#2B53D5', trigger: 'Press',  duration: '80ms ease' },
]
const ANIM_0_HOVER_SUBTLE: SpecRow[] = [
  { property: 'Unselected bg', from: 'transparent',           to: '#ECEEF0', trigger: 'Hover', duration: '80ms ease' },
  { property: 'Unselected bg', from: '#ECEEF0',               to: '#DFE2E5', trigger: 'Press', duration: 'Immediate' },
  { property: 'Selected bg',   from: 'rgba(51,102,255,0.2)', to: '#C3D3FF', trigger: 'Hover', duration: '80ms ease' },
  { property: 'Selected bg',   from: '#C3D3FF',               to: '#B7CCFF', trigger: 'Press', duration: '80ms ease' },
]

const ANIM_0_SPEC: SpecGroup[] = [
  { heading: 'Bold variants — hover / active', rows: ANIM_0_HOVER_BOLD },
  {
    heading: 'Bold variants — selection change',
    rows: [
      { property: 'Outgoing selected bg',        from: '#2E5BE6 (hover) or #3366FF', to: 'transparent', trigger: 'Click unselected',       duration: '100ms ease' },
      { property: 'Outgoing icon + label color', from: '#FFFFFF',                    to: '#222222',     trigger: 'Click unselected',       duration: '100ms ease' },
      { property: 'Incoming selected bg',        from: '#DFE2E5 (pressed) or #ECEEF0 (hover)', to: '#2E5BE6', trigger: 'Click (cursor present)', duration: '100ms ease' },
      { property: 'Incoming icon + label color', from: '#222222',                    to: '#FFFFFF',     trigger: 'Click (cursor present)', duration: '100ms ease' },
    ],
  },
  { heading: 'Subtle variants — hover / active', rows: ANIM_0_HOVER_SUBTLE },
  {
    heading: 'Subtle variants — selection change',
    rows: [
      { property: 'Outgoing selected bg',   from: '#C3D3FF (hover) or rgba(51,102,255,0.2)', to: 'transparent',       trigger: 'Click unselected',       duration: '100ms ease' },
      { property: 'Outgoing indicator bar', from: 'visible',                                  to: 'hidden (with bg)',  trigger: 'Click unselected',       duration: 'Immediate — unmounts with isSel' },
      { property: 'Incoming selected bg',   from: '#DFE2E5 (pressed) or #ECEEF0 (hover)',    to: '#C3D3FF',           trigger: 'Click (cursor present)', duration: '100ms ease' },
      { property: 'Incoming indicator bar', from: 'hidden',                                   to: 'visible (with bg)', trigger: 'Click (cursor present)', duration: 'Immediate — mounts with isSel' },
      { property: 'Icon + label color',     from: '#393f46',                                  to: '#393f46',           trigger: '—',                      duration: 'No change' },
    ],
  },
]

// ─── Instance list ────────────────────────────────────────────────────────────

type InstanceDef = {
  label: string
  size: Size
  emphasis: Emphasis
  variant: Variant
  width: Width
  count?: number
  duration: number
  hoverOverlay?: boolean
}

const INSTANCES: InstanceDef[] = [
  { label: 'large, icon and text, bold, fill',                                          size: 'lg', emphasis: 'bold',   variant: 'icon + text', width: 'fill',  duration: 200 },
  { label: 'large, icon and text, subtle, fill',                                        size: 'lg', emphasis: 'subtle', variant: 'icon + text', width: 'fill',  duration: 200 },
  { label: 'medium, icon and text, bold, fixed width',                                  size: 'md', emphasis: 'bold',   variant: 'icon + text', width: 'fixed', duration: 200 },
  { label: 'medium, icon only, bold, short width',                                      size: 'md', emphasis: 'bold',   variant: 'icon only',   width: 'short', duration: 250, count: 5 },
  { label: 'medium, icon only, subtle, short width',                                    size: 'md', emphasis: 'subtle', variant: 'icon only',   width: 'short', duration: 250, count: 5 },
  { label: 'large, icon and text, bold, fill — hover overlay (anim 4 only)',           size: 'lg', emphasis: 'bold',   variant: 'icon + text', width: 'fill',  duration: 200, hoverOverlay: true },
  { label: 'large, icon and text, subtle, fill — hover overlay (anim 4 only)',         size: 'lg', emphasis: 'subtle', variant: 'icon + text', width: 'fill',  duration: 200, hoverOverlay: true },
]

// ─── Time divider ─────────────────────────────────────────────────────────────

function TimeDivider({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: -4 }}>
      <div style={{ flex: 1, height: 1, backgroundColor: '#e8ebee' }} />
      <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 10, fontWeight: 500,
                     letterSpacing: '0.06em', textTransform: 'uppercase', color: '#a8b3bd',
                     whiteSpace: 'nowrap' }}>
        {label}
      </span>
      <div style={{ flex: 1, height: 1, backgroundColor: '#e8ebee' }} />
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

type SectionProps = {
  title: string
  spec?: SpecGroup[]
  animation: AnimType
  showTimingLabels?: boolean
  noAnimation?: boolean
  instanceIndices?: number[]
  bgCurve?: string
  bgDelay?: number
  bgDelayOut?: number
  outKf?: string
  testingSections?: { instanceIndices: number[], bgCurve?: string, bgDelay?: number, bgDelayOut?: number, duration?: number, durationOut?: number, outKf?: string, label?: string }[]
  testingStatus?: 'active' | 'inactive'
  selectionDuration?: number
}

function Section({ title, spec, animation, showTimingLabels, noAnimation, instanceIndices, bgCurve, bgDelay, bgDelayOut, outKf, testingSections, testingStatus = 'inactive', selectionDuration }: SectionProps) {
  const [specOpen, setSpecOpen] = useState(false)
  const [testingVisible, setTestingVisible] = useState(false)

  const allInstances = INSTANCES.filter(inst => !inst.hoverOverlay || animation === 'scale-fill-v2')
  const instances = allInstances.filter((_, i) => !instanceIndices || instanceIndices.includes(i))

  return (
    <div
      {...(noAnimation ? { 'data-no-animation': '' } : {})}
      style={{ backgroundColor: '#ffffff', borderRadius: 20, padding: '40px 40px',
               boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)' }}
    >
      <h1 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: 13,
                   letterSpacing: '0.08em', textTransform: 'uppercase', color: '#818b98', marginBottom: 24 }}>
        {title}
      </h1>

      {/* Accordion — only when spec is provided */}
      {spec && (
        <div style={{ marginBottom: 28 }}>
          <button
            type="button"
            onClick={() => setSpecOpen(o => !o)}
            style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%',
                     background: 'none', border: 'none', cursor: 'pointer', padding: '10px 14px',
                     borderRadius: 8, textAlign: 'left',
                     backgroundColor: specOpen ? '#f0f2f5' : '#f5f7fa',
                     transition: 'background-color 120ms ease' }}
          >
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 11, fontWeight: 600,
                           letterSpacing: '0.06em', textTransform: 'uppercase', color: '#818b98', flex: 1 }}>
              Animation spec
            </span>
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              style={{ flexShrink: 0, transition: 'transform 180ms ease',
                       transform: specOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              <path d="M3 5l4 4 4-4" stroke="#9ba6b2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {specOpen && <AnimSpec groups={spec} />}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {instances.map((inst, i) => {
          const origIdx = instanceIndices ? instanceIndices[i] : i
          const divLabel: string | null =
            showTimingLabels && animation === 'slide'       && origIdx === 0 ? 'time — 200ms' :
            showTimingLabels && animation === 'slide'       && origIdx === 3 ? 'time — 250ms' :
            showTimingLabels && animation === 'scale-fill'  && origIdx === 0 ? 'time — 120ms fill, 150ms trigger delay' :
            null
          const dur = animation === 'scale-fill-xy' ? 120 : animation === 'scale-fill-v2' ? 200 : animation === 'scale-fill' ? 120 : animation === 'fade' ? 80 : inst.duration
          return (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {divLabel && <TimeDivider label={divLabel} />}
              <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: 11,
                          letterSpacing: '0.04em', textTransform: 'uppercase', color: '#b0b8c4' }}>
                {origIdx + 1}. {inst.label}
              </p>
              <SegControl
                size={inst.size}
                emphasis={inst.emphasis}
                variant={inst.variant}
                width={inst.width}
                count={inst.count ?? 5}
                animation={animation}
                duration={dur}
                iconScale={animation === 'slide' && origIdx >= 3}
                hoverOverlay={inst.hoverOverlay ?? false}
                bgCurve={bgCurve}
                bgDelay={bgDelay}
                bgDelayOut={bgDelayOut}
                outKf={outKf}
                selectionDuration={selectionDuration}
              />
            </div>
          )
        })}
      </div>

      {testingSections && (
        <div style={{ marginTop: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              type="button"
              onClick={() => setTestingVisible(v => !v)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none',
                       border: '1px solid #e3e7ec', borderRadius: 6, cursor: 'pointer',
                       padding: '5px 10px', backgroundColor: '#fafafa',
                       transition: 'background-color 120ms ease' }}
            >
              <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 10, fontWeight: 500,
                             letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9ba6b2',
                             whiteSpace: 'nowrap' }}>
                {testingVisible ? 'Hide testing' : 'Show testing'}
              </span>
            </button>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7,
                          border: '1px solid #e3e7ec', borderRadius: 6,
                          padding: '5px 10px',
                          backgroundColor: testingStatus === 'active' ? '#f5faf0' : '#fafafa' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
                             backgroundColor: testingStatus === 'active' ? '#5cb85c' : '#e05252',
                             boxShadow: testingStatus === 'active' ? '0 0 0 2px rgba(92,184,92,0.2)' : '0 0 0 2px rgba(224,82,82,0.15)' }} />
              <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 10, fontWeight: 500,
                             letterSpacing: '0.06em', textTransform: 'uppercase',
                             color: testingStatus === 'active' ? '#4a7c3f' : '#9ba6b2', whiteSpace: 'nowrap' }}>
                Testing — {testingStatus}
              </span>
            </div>
          </div>

          {testingVisible && testingSections.map((ts, tsi) => {
            const testInstances = allInstances.filter((_, i) => ts.instanceIndices.includes(i))
            return (
              <div key={tsi}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0 20px' }}>
                  <div style={{ flex: 1, height: 1, backgroundColor: '#e8ebee' }} />
                  <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 10, fontWeight: 500,
                                 letterSpacing: '0.06em', textTransform: 'uppercase', color: '#a8b3bd',
                                 whiteSpace: 'nowrap' }}>
                    {ts.label ?? 'Testing'}
                  </span>
                  <div style={{ flex: 1, height: 1, backgroundColor: '#e8ebee' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {testInstances.map((inst, i) => {
                    const origIdx = ts.instanceIndices[i]
                    const dur = ts.duration ?? (animation === 'scale-fill-xy' ? 120 : animation === 'scale-fill-v2' ? 200 : animation === 'scale-fill' ? 120 : inst.duration)
                    return (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: 11,
                                    letterSpacing: '0.04em', textTransform: 'uppercase', color: '#b0b8c4' }}>
                          {origIdx + 1}. {inst.label}
                        </p>
                        <SegControl
                          size={inst.size}
                          emphasis={inst.emphasis}
                          variant={inst.variant}
                          width={inst.width}
                          count={inst.count ?? 5}
                          animation={animation}
                          duration={dur}
                          iconScale={false}
                          hoverOverlay={inst.hoverOverlay ?? false}
                          bgCurve={ts.bgCurve ?? bgCurve}
                          bgDelay={ts.bgDelay ?? bgDelay}
                          bgDelayOut={ts.bgDelayOut ?? bgDelayOut}
                          durationOut={ts.durationOut}
                          outKf={ts.outKf ?? outKf}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ─── Wireframe Toggle ─────────────────────────────────────────────────────────

function WireframeToggle({ emphasis = 'bold' }: { emphasis?: 'bold' | 'subtle' }) {
  const [on, setOn] = useState(false)
  const isBold = emphasis === 'bold'
  return (
    <button
      type="button"
      onClick={() => setOn(v => !v)}
      style={{
        position: 'relative', width: 52, height: 28, borderRadius: 9999,
        border: `1px solid ${on && isBold ? '#9aaecc' : '#c8cdd4'}`,
        backgroundColor: on && isBold ? '#dce8f7' : '#f5f7fa',
        cursor: 'pointer', padding: 0,
        transition: 'background-color 80ms ease, border-color 80ms ease',
      }}
    >
      <div style={{
        position: 'absolute', top: 3, left: 3,
        width: 20, height: 20, borderRadius: '50%',
        backgroundColor: on ? (isBold ? '#3366ff' : 'rgba(51,102,255,0.5)') : (isBold ? '#9ba6b2' : '#b0bec5'),
        transform: on ? 'translateX(24px)' : 'translateX(0px)',
        transition: 'transform 150ms ease, background-color 150ms ease',
      }} />
    </button>
  )
}

// ─── Template Section ─────────────────────────────────────────────────────────

const TEMPLATE_SPEC: SpecGroup[] = [
  {
    heading: 'Selection change',
    rows: [
      { property: 'background opacity', from: '0', to: '1', trigger: 'Click unselected', duration: '120ms ease-out, 150ms delay' },
    ],
  },
]

const TEMPLATE_INSTANCES: { label: string; emphasis: 'bold' | 'subtle' }[] = [
  { label: 'bold variant',   emphasis: 'bold' },
  { label: 'subtle variant', emphasis: 'subtle' },
]

function TemplateSection() {
  const [specOpen, setSpecOpen] = useState(false)
  const testingStatus = 'inactive' as 'active' | 'inactive'
  const [testingVisible, setTestingVisible] = useState(testingStatus === 'active')

  return (
    <div style={{ backgroundColor: '#ffffff', borderRadius: 20, padding: '40px 40px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)' }}>
      <h1 style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 600, fontSize: 13,
                   letterSpacing: '0.08em', textTransform: 'uppercase', color: '#818b98', marginBottom: 24 }}>
        Variant Name
      </h1>

      {/* Spec accordion */}
      <div style={{ marginBottom: 28 }}>
        <button
          type="button"
          onClick={() => setSpecOpen(o => !o)}
          style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%',
                   background: 'none', border: 'none', cursor: 'pointer', padding: '10px 14px',
                   borderRadius: 8, textAlign: 'left',
                   backgroundColor: specOpen ? '#f0f2f5' : '#f5f7fa',
                   transition: 'background-color 120ms ease' }}
        >
          <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 11, fontWeight: 600,
                         letterSpacing: '0.06em', textTransform: 'uppercase', color: '#818b98', flex: 1 }}>
            Animation spec
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
            style={{ flexShrink: 0, transition: 'transform 180ms ease',
                     transform: specOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <path d="M3 5l4 4 4-4" stroke="#9ba6b2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {specOpen && <AnimSpec groups={TEMPLATE_SPEC} />}
      </div>

      {/* Production examples */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {TEMPLATE_INSTANCES.map((inst, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: 11,
                        letterSpacing: '0.04em', textTransform: 'uppercase', color: '#b0b8c4' }}>
              {i + 1}. {inst.label}
            </p>
            <WireframeToggle emphasis={inst.emphasis} />
          </div>
        ))}
      </div>

      {/* Testing subsection */}
      <div style={{ marginTop: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button
            type="button"
            onClick={() => setTestingVisible(v => !v)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none',
                     border: '1px solid #e3e7ec', borderRadius: 6, cursor: 'pointer',
                     padding: '5px 10px', backgroundColor: '#fafafa',
                     transition: 'background-color 120ms ease' }}
          >
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 10, fontWeight: 500,
                           letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9ba6b2',
                           whiteSpace: 'nowrap' }}>
              {testingVisible ? 'Hide testing' : 'Show testing'}
            </span>
          </button>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7,
                        border: '1px solid #e3e7ec', borderRadius: 6, padding: '5px 10px',
                        backgroundColor: testingStatus === 'active' ? '#f5faf0' : '#fafafa' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
                           backgroundColor: testingStatus === 'active' ? '#5cb85c' : '#e05252',
                           boxShadow: testingStatus === 'active' ? '0 0 0 2px rgba(92,184,92,0.2)' : '0 0 0 2px rgba(224,82,82,0.15)' }} />
            <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 10, fontWeight: 500,
                           letterSpacing: '0.06em', textTransform: 'uppercase',
                           color: testingStatus === 'active' ? '#4a7c3f' : '#9ba6b2', whiteSpace: 'nowrap' }}>
              Testing — {testingStatus}
            </span>
          </div>
        </div>

        {testingVisible && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
              <div style={{ flex: 1, height: 1, backgroundColor: '#e8ebee' }} />
              <span style={{ fontFamily: "'Roboto Mono', monospace", fontSize: 10, fontWeight: 500,
                             letterSpacing: '0.06em', textTransform: 'uppercase', color: '#a8b3bd',
                             whiteSpace: 'nowrap' }}>
                Testing — examples 1 & 2
              </span>
              <div style={{ flex: 1, height: 1, backgroundColor: '#e8ebee' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {TEMPLATE_INSTANCES.map((inst, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <p style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: 11,
                              letterSpacing: '0.04em', textTransform: 'uppercase', color: '#b0b8c4' }}>
                    {i + 1}. {inst.label}
                  </p>
                  <WireframeToggle emphasis={inst.emphasis} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fbff', position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none',
                    backgroundImage: 'radial-gradient(circle at center, rgba(157,200,255,0.52) 1.2px, transparent 1.4px)',
                    backgroundSize: '18px 18px' }} />

      <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto',
                    padding: '48px 40px', display: 'flex', flexDirection: 'column', gap: 40 }}>
        <Section title="Baseline — No Animation"           spec={FADE_SPEC}          animation="fade"           noAnimation />
        <Section title="Animation 0 — Colour Fade"         spec={ANIM_0_SPEC}        animation="fade" selectionDuration={100} />
        <Section title="Animation 1 — Sliding"            spec={SLIDE_SPEC}         animation="slide"          showTimingLabels />
        <Section title="Animation 2 — Center Fill"        spec={SCALE_FILL_SPEC}    animation="scale-fill"     showTimingLabels bgDelay={150} testingStatus="inactive" testingSections={[
          { instanceIndices: [0, 1], label: 'Testing — examples 1 & 2' },
        ]} />
        <Section title="Animation 3 — Center Fill XY"     spec={SCALE_FILL_XY_SPEC} animation="scale-fill-xy"  showTimingLabels bgDelay={120} testingStatus="inactive" testingSections={[
          { instanceIndices: [0, 1], label: 'Testing — examples 1 & 2' },
        ]} />
        <Section title="Animation 4 — Center Fill Spring" spec={SCALE_FILL_V2_SPEC} animation="scale-fill-v2"  showTimingLabels bgDelay={80} bgDelayOut={80} outKf="scaleFillOutB" instanceIndices={[0,1,2,3,4]} testingStatus="active" testingSections={[
          { instanceIndices: [0, 1], durationOut: 250, label: 'Testing — examples 1 & 2, outgoing +50ms duration' },
          { instanceIndices: [0, 1], bgDelayOut: 0, durationOut: 230, label: 'Testing — examples 1 & 2, no outgoing delay + 80ms outgoing duration' },
        ]} />
        <TemplateSection />
      </div>
    </div>
  )
}
