import { useState, useEffect } from 'react'


export default function useCarousel(items = [], interval = 4000) {
const [index, setIndex] = useState(0)
useEffect(() => {
if (!items || items.length <= 1) return
const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval)
return () => clearInterval(id)
}, [items, interval])
return { index, setIndex }
}