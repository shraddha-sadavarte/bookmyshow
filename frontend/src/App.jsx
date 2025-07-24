import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favourites from './pages/Favourites'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import ListBookings from './pages/admin/ListBookings'
import ListShows from './pages/admin/ListShows'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
      <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
    
      <Toaster />
      { !isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetails />}/>
        <Route path='/movies/:id/:date' element={<SeatLayout />}/>
        <Route path='/my-bookings' element={<MyBookings />}/>
        <Route path='/favourites' element={<Favourites />}/>
        <Route path='/admin/*' element={<Layout />}>
        <Route index element={<Dashboard />} />
          <Route path='add-shows' element={<Dashboard/>}/>
          <Route path='list-bookings' element={<ListBookings/>}/>
          <Route path='list-shows' element={<ListShows/>}/>
        </Route>
      </Routes>
      { !isAdminRoute && <Footer />}
    </>
  )
}

export default App
