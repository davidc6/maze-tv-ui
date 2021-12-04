import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { render, within } from "@testing-library/react"
import Home from '.'
import useSearch from '../../../hooks/useSearch'

jest.mock("../../../hooks/useSearch")

const mockedSearch = useSearch as jest.Mock<any>

describe('<Home /> component', () => {
    let HomeComponent: React.ReactElement | null = null
  
    beforeEach(() => {
      mockedSearch.mockImplementation(() => ({ isLoading: true }))

      HomeComponent = <Router><Routes><Route path="/" element={<Home />} /></Routes></Router>
    })

    afterEach(() => {
      jest.clearAllMocks()
    })
  
	it("renders without crashing", () => {
		render(HomeComponent)
	})
  
  it("calls useSearch() hook with correct query", () => {
		render(HomeComponent)
    expect(useSearch).toHaveBeenCalledWith("Doctor Who")
  })
  
  it("renders loading state", () => {
		const { getByText } = render(HomeComponent)
    expect(getByText(/Loading .../i)).toBeTruthy()
  })
  
  it("renders error state", async () => {
    mockedSearch.mockImplementation(() => ({
			isLoading: false,
			isError: true,
      data: [ { id: 1, name: 'One' }, { id: 2, name: 'Two' } ],
			error: {},
		}))
		const { getByText } = render(HomeComponent)
    expect(getByText(/Sorry, there has been an error. Please try reloading the page./)).toBeTruthy()
  })

  
  it("renders correct heading", async () => {
    mockedSearch.mockImplementation(() => ({
			isLoading: false,
			isError: false,
      data: [],
			error: {},
		}))
		const { getByText } = render(HomeComponent)
    expect(getByText(/Search results for: Doctor Who/i)).toBeTruthy()
  })
  
  it("renders a list of items", async () => {
    mockedSearch.mockImplementation(() => ({
			isLoading: false,
			isError: false,
      data: [ { id: 1, name: 'One' }, { id: 2, name: 'Two' } ],
			error: {},
		}))
    
		const { getByRole } = render(HomeComponent)
    const list = getByRole("list")
    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")

    expect(items.length).toBe(2)    
  })
})
