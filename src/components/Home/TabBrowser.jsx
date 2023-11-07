import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabBrowser = () => {
  const [allTabContent , setAllTabContent ] = useState([])
  const [digitalMarketing , setDigitalMarketing ] = useState([])
  const [webDevolopment , setWebdevolopment ] = useState([])
  const [grapicsDesign , setGrapicsDesign ] = useState([])
  const [content , setContent ] = useState([])
 console.log(allTabContent);
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
    fetch(`https://assignment-11-server-side-rust.vercel.app/jobs`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setAllTabContent(data)
    })

    
  },[])
 
useEffect(() => {
  const digitalMarketing = allTabContent?.filter(data => data?.catagory === 'digitalmarketing' )
    console.log(digitalMarketing);  
    setDigitalMarketing(digitalMarketing)
  const grapicsDesign = allTabContent?.filter(data => data?.catagory === 'grapicsdesign' )
    console.log(grapicsDesign);  
    setGrapicsDesign(grapicsDesign)
  const webDevolopment = allTabContent?.filter(data => data?.catagory === 'webdevolopment' )
    console.log(webDevolopment);  
    setWebdevolopment(webDevolopment)
},[ allTabContent])

  // console.log(allTabContent , tabs);
  return (
    <div className="w-[90%] mx-auto mt-5">
      
      <Tabs>
    <TabList className="font-semibold lg:text-2xl">
      <Tab>Web Devolopment</Tab>
      <Tab>Digital Marketing</Tab>
      <Tab>Grapics Design</Tab>
    </TabList>

    <TabPanel >
   <div className="bg-gray-100 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
   {
        webDevolopment?.map( data =>  <div key={data?._id} className="card text-white  bg-gradient-to-r from-sky-500 to-indigo-500 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">{data?.jobTitle}</h2>
          <p>Price : ${data?.minimumPrice} - ${data?.maximumPrice}</p>
          <p>{data?.deadLine}</p>
          <p className='px-2 h-10 overflow-hidden'>{data?.description}</p>
          <div className="card-actions justify-end">
          <Link to={`/job/${data?._id}`} className='btn bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none ml-5'>Bid now</Link>
          </div>
        </div>
      </div> )
      }
   </div>
    </TabPanel>
    <TabPanel >
 <div className="bg-gray-100 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
 {
        digitalMarketing?.map( data =>  <div key={data?._id} className="card text-white bg-gradient-to-r from-sky-500 to-indigo-500 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">{data?.jobTitle}</h2>
          <p>Price : ${data?.minimumPrice} - ${data?.maximumPrice}</p>
          <p>{data?.deadLine}</p>
          <p className='px-2 h-10 overflow-hidden'>{data?.description}</p>
          <div className="card-actions justify-end">
          <Link to={`/job/${data?._id}`} className='btn bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none ml-5'>Bid now</Link>
          </div>
        </div>
      </div> )
      }
 </div>
    </TabPanel>
    <TabPanel >
<div className="bg-gray-100 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
{
        grapicsDesign?.map( data =>  <div key={data?._id} className="card text-white bg-gradient-to-r from-sky-500 to-indigo-500 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">{data?.jobTitle}</h2>
          <p>Price : ${data?.minimumPrice} - ${data?.maximumPrice}</p>
          <p>{data?.deadLine}</p>
          <p className='px-2 h-10 overflow-hidden'>{data?.description}</p>
          <div className="card-actions justify-end">
          <Link to={`/job/${data?._id}`} className='btn bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none ml-5'>Bid now</Link>
          </div>
        </div>
      </div> )
      }
</div>
    </TabPanel>
  </Tabs>
    </div>
  );
};



export default TabBrowser;
