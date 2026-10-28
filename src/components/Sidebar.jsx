import {useState} from 'react'
import {Link} from 'react-router-dom';

function Sidebar(){

const [showdropdown, setShowdropdown] = useState(false)

const dropDown = () =>{
    setShowdropdown(!showdropdown)
}
    return (
        <div className="w-full h-screen bg-gray-800 text-white flex flex-col items-center py-6 gap-6">
            <div>
                <h1>LOGO HERE</h1>
            </div>
            <div>
                <ul className="flex flex-col gap-3 w-full">
                    <li className="text-l uppercase hover:text-gray-500"><Link to="/">Dashboard</Link></li>
                    <li onClick={dropDown}><span className="text-l uppercase hover:text-gray-500">Master</span>{showdropdown ? <i class="fa-solid fa-caret-right hover:text-gray-500"></i> : <i className="fa-solid fa-caret-down hover:text-gray-500"></i>}
                        {showdropdown && (
                            <ul className="ml-5 flex flex-col gap-3">
                            <li><Link to="suppliermaster">Supplier Master</Link></li>
                            <li><Link to="materialmaster">Material Master</Link></li>
                            <li><Link to="customermaster">Customer Master</Link></li>
                        </ul> 

                        )}
                    </li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;