'use client'
import { useFilterStore } from '../../store/filterStore'

export default function FilterBar() {
  const { filters, removeFilter, clearFilters } = useFilterStore()

  if (filters.length === 0) return null

  return (
    <div className="filter-bar">
      <div className="filter-tags">
        {filters.map((tag) => (
          <div key={tag} className="filter-tag">
            <span className="filter-tag-text">{tag}</span>
            <button
              className="filter-tag-remove"
              onClick={() => removeFilter(tag)}
              aria-label={`Remove ${tag} filter`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor">
                <path fillRule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
      <button className="clear-btn" onClick={clearFilters}>
        Clear
      </button>
    </div>
  )
}
