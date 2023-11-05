import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TabBrowser = () => {
  const [allTabContent , setAllTabContent ] = useState([])
  const [content , setContent ] = useState([])
 
  const [tabs, setTabs] = useState([
    { id: 1,  title: 'Web Devolopment',  catagory : "webdevolopment" },
    { id: 2,  title: 'Digital Marketing', catagory : "digitalmarketing" },
    { id: 3,  title: 'Grapics Design',  catagory : "grapicsdesign" },
  ]);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
}
  useEffect(() => {
    fetch(`http://localhost:5000/jobs`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setAllTabContent(data)
    })

    
  },[])
 
useEffect(() => {
  const contentShow = allTabContent?.filter(data => data?.catagory === activeTab?.catagory )
    console.log(contentShow);  
    setContent(contentShow)
},[activeTab , allTabContent])

  // console.log(allTabContent , tabs);
  return (
    <div className="w-[90%] mx-auto mt-0">
      <div className=" ">
        <ul className='flex  gap-5 text-3xl font-semibold p-10 justify-center '>
          {tabs.map((tab) => <li
              key={tab.id}
              className={`cursor-pointer p-4 ${tab === activeTab ? 'bg-gray-500  text-white rounded' : ''}`}
              onClick={() => handleTabClick(tab)}>{tab.title}</li>
          )}
        </ul>
      </div>
      <div className=" p-4">
        <div className="bg-gray-100 p-4 grid grid-cols-4">
          {
            content?.map( data => <div key={data?._id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{data?.jobTitle}</h2>
              <p>{data?.description}</p>
              <p>Price : ${data?.minimumPrice} - ${data?.maximumPrice}</p>
              <p>{data?.deadLine}</p>
              <p>{data?.catagory}</p>
              <div className="card-actions justify-end">
              <Link to={`/job/${data?._id}`} className='btn btn-primary ml-5'>Bid now</Link>
              </div>
            </div>
          </div>)
          }
         
        </div>
      </div>
    </div>
  );
};



export default TabBrowser;
