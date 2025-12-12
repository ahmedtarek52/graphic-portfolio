import { useParams, useLocation } from 'react-router-dom'
import { useServicesContext } from '../context/ServicesContext'
import ServiceCard from '../components/services/ServiceCard'
import Banner from '../components/ui/Banner'
import CategoryFilter from '../components/categories/CategoryFilter'
import { useMemo, useState } from 'react'
import { useEffect } from 'react'
import NotFound from './NotFound'
import { useSearch } from '../context/SearchContext'

export default function CategoryPage(){
  const { slug } = useParams()
  const { services, categories } = useServicesContext()
  const category = categories.find(c=>c.slug===slug)
  const list = services.filter(s=>s.category===slug)

  const [selectedTags, setSelectedTags] = useState([])
  const [titleQuery, setTitleQuery] = useState('')
  const location = useLocation()
  const { setQuery: setGlobalQuery } = useSearch()

  // if a `q` param is provided, use it to initialize the title search and global search
  useEffect(()=>{
    const params = new URLSearchParams(location.search)
    const q = params.get('q') || ''
    if(q){
      setTitleQuery(q)
      // also set global search context so other components stay in sync
      setGlobalQuery(q)
    }
  },[location.search, setGlobalQuery])

  if(!category) return <NotFound />

  // compute unique tags/types for this category
  const tags = useMemo(()=>{
    const set = new Set()
    list.forEach(s=>{
      (s.tags||[]).forEach(t=>set.add(t))
    })
    return Array.from(set)
  },[list])

  function onToggleTag(tag){
    setSelectedTags(prev=> prev.includes(tag) ? prev.filter(t=>t!==tag) : [...prev, tag])
  }

  const filtered = useMemo(()=>{
    return list.filter(s=>{
      // title/description search
      const matchesTitle = titleQuery.trim()==='' || (s.title && s.title.toLowerCase().includes(titleQuery.toLowerCase())) || (s.description && s.description.toLowerCase().includes(titleQuery.toLowerCase()))
      // tag filter (OR logic)
      const matchesTags = selectedTags.length===0 || (s.tags || []).some(t=> selectedTags.includes(t))
      return matchesTitle && matchesTags
    })
  },[list, selectedTags, titleQuery])

  return (
    <div className="max-w-7xl mx-auto">

      <Banner
        bg={category.banner}
        title={category.name}
        description="Explore services available in this category."
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <CategoryFilter
            tags={tags}
            selectedTags={selectedTags}
            onToggleTag={onToggleTag}
            titleQuery={titleQuery}
            onTitleChange={setTitleQuery}
          />
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(s=> <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </div>
    </div>
  )
}