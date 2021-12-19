import React, { useState } from 'react'
import BasePage from '../base';
import ShowsModule from '../../showsModule';

const Home = () => {
  const [keyword, setKeyword] = useState('')

  const debounce = () => {
    let id: NodeJS.Timeout = null
    
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(id)

      id = setTimeout(() => {
        const keyword = e.target.value
        if (!keyword) return
 
        setKeyword(keyword)
      }, 2000) 
    }
  }

  return (
    <BasePage>
      <div className="c-search">
        <input
          name="search"
          aria-label="search-input"
          className="c-search__input"
          type="search"
          placeholder='Search for a show'
          onChange={debounce()}
        />
      </div>
      <ShowsModule keyword={keyword} />
    </BasePage>
  )
}

export default Home
