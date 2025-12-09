import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSearch } from '../context/SearchContext'
import { useServices } from '../context/ServicesContext'
import CategoriesGrid from '../components/home/CategoriesGrid'
import ServiceList from '../components/services/ServiceList'


export default function Categories(){
	const location = useLocation()
	const { setQuery } = useSearch()

	useEffect(()=>{
		const params = new URLSearchParams(location.search)
		const q = params.get('q') || ''
		setQuery(q)
	},[location.search, setQuery])

	return (
		<div className="max-w-7xl mx-auto px-4 py-10">
			<h1 className="text-3xl font-bold mb-6">Services</h1>
			<CategoriesGrid />
			<div className="mt-8">
				<h2 className="text-2xl font-semibold mb-4">All Services</h2>
				<ServiceList />
			</div>
		</div>
	)
}