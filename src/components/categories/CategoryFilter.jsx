import React from 'react'

export default function CategoryFilter({
  tags = [],
  selectedTags = [],
  onToggleTag = ()=>{},
  titleQuery = '',
  onTitleChange = ()=>{}
}){

  return (
    <aside className="bg-white p-4 rounded-lg shadow-sm">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Search in category</label>
        <input
          value={titleQuery}
          onChange={(e)=>onTitleChange(e.target.value)}
          placeholder="Search by title or keyword"
          className="w-full px-3 py-2 border rounded-md text-sm"
        />
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-2">Filter by type</h4>
        <div className="space-y-2">
          {tags.length===0 && <div className="text-sm text-gray-500">No types available</div>}
          {tags.map(tag=>{
            const checked = selectedTags.includes(tag)
            return (
              <label key={tag} className="flex items-center text-sm">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={()=>onToggleTag(tag)}
                  className="mr-2"
                />
                <span className="capitalize">{tag.replace(/-|_/g,' ')}</span>
              </label>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
