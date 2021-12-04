import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './components/pages/home'
import Show from './components/pages/show'
import Episode from './components/pages/episode'
import Error from './components/pages/error'

import './styles/resets.css'
import './styles/grid.css'
import './styles/borders.css'
import './styles/wrap.css'

const twentyFourHoursInMs = 1000 * 60 * 60 * 24
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: twentyFourHoursInMs,
      queryFn: () => [],
      refetchOnReconnect: "always"
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Show />} />
          <Route path="/episodes/:id" element={<Episode />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
