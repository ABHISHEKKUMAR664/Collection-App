import React, { useEffect, useState } from 'react'

const Api = () => {
    const[user,setUser]=useState([])
    const[loading, setloading]=useState(false)

    const getData= async()=>{
        setloading(true)

            const response= await fetch("https://jsonplaceholder.typicode.com/photos");
            // const data= await response.json()
            setUser(await response.json())
            setloading(false)
    }

    useEffect(()=>{
        getData();
    },[])

    if(loading) return "...loading"

    return (
        <>
        <h2>COLOR COLLECTION</h2>
        <div className="conainer-fluid mt-5">
            <div className="row text-centre">

                    {
                        user.map((ele, index)=>{
                            return (
                                <div key={index} className="col-10 col-md-4 mt-5">
                  <div className="card p-2">
                         <div className="d-flex align-item-centre">
                             <div className="image"><img src={ele.thumbnailUrl} className="rounded" width="155"/></div>
                             <div className="ml-3 w-100">
                                 <h4 className="mb-0 mt-0 textLeft">color{ele.id}</h4><span className="textLeft">{ele.title}</span>
                                 <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                     <div className="d-flex flex-column"><span className="articles">Article</span><span className="number1">38</span></div>
                                     <div className="d-flex flex-column"><span className="follower">Followers</span><span className="number1">900</span></div>
                                     <div className="d-flex flex-column"><span className="rating">Rating</span><span className="number1">4.1</span></div>
                                      
                                 </div>
                             </div>
                         </div>

                  </div>
              </div>
                            )
                        })
                    }

            </div>
              {/* <div className="col-10 col-md-4 mt-5">
                  <div className="card p-2">
                         <div className="d-flex align-item-centre">
                             <div className="image"><img src="#" className="rounded" width="155"/></div>
                             <div className="ml-3 w-100">
                                 <h4 className="mb-0 mt-0 textLeft">guru</h4><span className="textLeft">span</span>
                                 <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                     <div className="d-flex flex-column"><span className="articles">Article</span><span className="number1">38</span></div>
                                     <div className="d-flex flex-column"><span className="follower">Followers</span><span className="number1">900</span></div>
                                     <div className="d-flex flex-column"><span className="rating">Rating</span><span className="number1">4.1</span></div>
                                      
                                 </div>
                             </div>
                         </div>

                  </div>
              </div> */}
            
        </div>
        </>
    )
}

export default Api;
