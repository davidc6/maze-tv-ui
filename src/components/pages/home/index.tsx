import React from 'react'
import useSearch from '../../../hooks/useSearch';
import Loader from '../../loader';
import BasePage from '../base';
import ShowsModule from '../../showsModule';
import Error from '../error';

const Home = () => {  
  // TODO - this is hard-coded for now, would be great to add search functionality
  const query = 'Doctor Who'
  const { isLoading, isError, data } = useSearch(query)

  if (isError) {
    return <Error />
  }

  const render = () => {
    return (
      <BasePage>
        <ShowsModule name={`Search results for: ${query}`} shows={data} />
      </BasePage>
    )
  }

  return (
    <div>
      {
        isLoading
        ? <Loader />
        : render()
      }
    </div>
  )
}

export default Home
