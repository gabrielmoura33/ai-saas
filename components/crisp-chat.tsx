'use client'
import { Crisp } from 'crisp-sdk-web'
import { useEffect } from 'react'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('8fc28a01-d29e-4f21-a7da-287b12f42716')
  }, [])

  return null
}
