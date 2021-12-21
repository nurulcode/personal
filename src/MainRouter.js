import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './core/Contact'
import Home from './core/Home'
import Menu from './core/Menu'
import Projects from './core/Projects'

const MainRouter = () => {
    return (
        <div>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </div>
    )
}

export default MainRouter
