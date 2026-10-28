import React from 'react'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Suppliermaster from './master/Suppliermaster'
import Materialmaster from './master/Materialmaster'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Dashboard />}/>
                    <Route path="/suppliermaster" element={<Suppliermaster />}/>
                    <Route path="/materialmaster" element={<Materialmaster />}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App