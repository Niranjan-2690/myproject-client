import {useState} from "react"

function Suppliermaster() {

    const [supplierInfo, setSupplierInfo] = useState({suppliername: "", mobile: "", email: "", person: "", address: "", gst: "", status: "Active"})
    const [addSupplierInfo, setAddSupplierInfo] = useState([])

    //--------------------------------------------------------------------------

    // handlechange

    const handleChange = (e) =>{
        setSupplierInfo({...supplierInfo, [e.target.id]: e.target.value})
    }

    //----------------------------------------------------------------------------

    const addSupplier = () =>{
        let newSupplier = [...addSupplierInfo]
        newSupplier.push(supplierInfo)
        setAddSupplierInfo(newSupplier)
        setSupplierInfo({suppliername: "", mobile: "", email: "", person: "", address: "", gst: "", status: "Active"})
    }

    return (
        <div>
            <div>
                <h1 className="text-l font-bold">Supplier Master</h1>
            </div>
            <hr />
            <div>
                <div className="py-2 grid grid-cols-4 gap-4">
                <div>
                    <input type="text" className="border w-full rounded-sm px-2 py-1" placeholder="Supplier Name" name="supplierInfo" id="suppliername" value={supplierInfo.suppliername} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" className="border w-full rounded-sm px-2 py-1" placeholder="Mobile Number" name="mobile" id="mobile" value={supplierInfo.mobile} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" className="border w-full rounded-sm px-2 py-1" placeholder="E-mail" name="email" id="email" value={supplierInfo.email} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" className="border w-full rounded-sm px-2 py-1" placeholder="Contact Person" name="person" id="person" value={supplierInfo.person} onChange={handleChange}/>
                </div>
                <div>
                    <textarea type="text" className="border w-full rounded-sm px-2 py-1" placeholder="Address" name="address" id="address" value={supplierInfo.address} onChange={handleChange}/>
                </div>
                <div>
                    <input type="text" className="border w-full rounded-sm px-2 py-1" placeholder="GST" name="gst" id="gst" value={supplierInfo.gst} onChange={handleChange}/>
                </div>
                <div>
                    <h1>Status: <span>{supplierInfo.status}</span></h1>
                </div>
            </div>
            <div className="w-full flex justify-center gap-5">
                <button className="bg-gray-800 text-white px-6 py-3 rounded-sm" onClick={addSupplier}>Add</button>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-sm">Clear</button>
            </div>
            </div>
            
            <div className="pt-4">
                <table className="w-full border border-collapse border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-300">Name</th>
                            <th className="border border-gray-300">Mobile</th>
                            <th className="border border-gray-300">Email</th>
                            <th className="border border-gray-300">Contact Person</th>
                            <th className="border border-gray-300">Address</th>
                            <th className="border border-gray-300">GST</th>
                            <th className="border border-gray-300">Status</th>
                            <th className="border border-gray-300">Edit</th>
                            <th className="border border-gray-300">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addSupplierInfo.map((addedSupplier, idx)=>(
                        <tr key={idx}>
                            <td className="border border-gray-300 px-2 py-1">{addedSupplier.suppliername}</td>
                            <td className="border border-gray-300 px-2 py-1">{addedSupplier.mobile}</td>
                            <td className="border border-gray-300 px-2 py-1">{addedSupplier.email}</td>
                            <td className="border border-gray-300 px-2 py-1">{addedSupplier.person}</td>
                            <td className="border border-gray-300 px-2 py-1">{addedSupplier.address}</td>
                            <td className="border border-gray-300 px-2 py-1">{addedSupplier.gst}</td>
                            <td className="border border-gray-300 px-2 py-1">{addedSupplier.status}</td>
                            <td className="border border-gray-300 text-center"><button><i className="fa-solid fa-pen-to-square text-yellow-500" ></i></button></td>
                            <td className="border border-gray-300 text-center"><button><i className="fa-solid fa-trash text-red-500"></i></button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Suppliermaster;