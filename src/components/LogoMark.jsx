import React from 'react'
import logoPng from '../assets/logo.png'

export default function LogoMark({ size = 40 }) {
  return (
    <img
      src={logoPng}
      alt="ASAUViA Logo"
      style={{ width: size, height: size }}
      className="object-contain"
    />
  )
}
