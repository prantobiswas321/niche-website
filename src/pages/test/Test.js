
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const sublist = [{name: "Nahid", id: 1},{name:"Abir",id:2},{name:"Jubair", id:3}];

const Test = () => {
    const [datas, setdata] = useState([]);
    const [menu,setMenu] = useState([]);

    // const [isDisable, setIsDisable] = useState(true);
    const [checked, setChecked] = useState([]);
    const [homeAccept, setHomeAccept] = useState(true);
    const [ukAccept, setUkAccept] = useState(true);
    const [intAccept, setIntAccept] = useState(true);

    useEffect(()=>{
        setdata(sublist);
        console.log(sublist);
    },[])

    const handleChange = e =>{
        const {id,name,checked} = e.target;
        console.log(e.target);
        let tmpUsers = datas.map(data=> data?.name === name ? {...data, isChecked: checked} : data);
        // let tmpUsers = datas.map(data=> console.log(data));
          setdata(tmpUsers);
          console.log("singleSelect", tmpUsers); 
        // setIsDisable(false);
    }

    // const handleUk = e =>{
        
    //     let defaultChecked = checked;
    //     if(datas.length > 0){
    //         for(let i =0;i<datas.length;i++){
    //             const menu = datas[i];
    //             if(menu.isChecked === true){
    //                 setUkAccept(e.target.checked);
    //                 // const id = menu.id.toString();
    //                 defaultChecked.push(ukAccept);
    //                 setChecked([...defaultChecked]);
    //             }
    //         }
    //     }
    //     console.log("ukAccept",checked);
    // }

    const handleFeatureHome = e =>{
        const {name, id, checked} = e.target;
        
        const features = datas.map(data=> data?.id.toString() === id.toString() ? {...data, isAcceptHome: checked}: data);
        setdata(features);
        console.log("featureHome",features);
        // if(data?.isChecked === true){
        //     setdata({...data, isAcceptHome: homeAccept})
        // }
    }

    const handleFeatureUk = e =>{
        const {name, id, checked} = e.target;
        
        const features = datas.map(data=> data?.id.toString() === id.toString() ? {...data, isAcceptUk: checked}: data);
        setdata(features);
        console.log("featureUk",features);
        // if(data?.isChecked === true){
        //     setdata({...data, isAcceptHome: homeAccept})
        // }
    }

    const handleFeatureInt = e =>{
        const {name, id, checked} = e.target;
        
        const features = datas.map(data=> data?.id.toString() === id.toString() ? {...data, isAcceptInt: checked}: data);
        setdata(features);
        console.log("featureInt",features);
        // if(data?.isChecked === true){
        //     setdata({...data, isAcceptHome: homeAccept})
        // }
    }

    

    return (
      <>
         <form className='my-5'>

                <div className='row mt-2 container text-center'>
                    <div className='col-lg-3'>
                       <span>Name</span>
                    </div>

                    <div className='col-lg-3'>
                       <span>Is accept home </span>
                    </div>

                    <div className='col-lg-3'>
                      <span>Is accept EU_UK  </span>
                    </div>

                    <div className='col-lg-3'>
                       <span>Is accept international</span>
                    </div>
                </div>

                {
                 datas.map((data,i)=>
                    <div className='row mt-5 container text-center'>
                       <div className='col-lg-3'>
                          <input 
                           type="checkbox"
                           id={data?.id} 
                           name={data?.name}
                        //    onChange={handleChange}
                           onChange={e=>{
                              handleChange(e); 
                            //   setSubId(sub?.id);
                            //   setSubName(sub?.name);
                            }}
                           defaultChecked={false}
                          />
  
                          <label className="form-check-label">
                              {data?.name}
                          </label>
                      </div>

                       <div className='col-lg-3'>
                           <input 
                            type="checkbox" 
                            id={`${data?.id}`}
                            name='isAcceptHome'
                            disabled={data?.isChecked ? false : true}
                            onChange={e=>{
                                setHomeAccept(!homeAccept);
                                handleFeatureHome(e);
                            }}
                            
                            />
                       </div>

                       <div className='col-lg-3'>
                           <input 
                            type="checkbox" 
                            id={`${data?.id}`}
                            name='isAcceptEU_UK'
                            disabled={data?.isChecked ? false : true}
                            onChange={e=>{
                                setUkAccept(!ukAccept);
                                handleFeatureUk(e);
                            }}
                            
                            // onChange={handleUk}
                            // checked={data?.isChecked || false}
                            
                            />
                       </div>

                       <div className='col-lg-3'>
                           <input 
                            type="checkbox" 
                            id={`${data?.id}`}
                            name='isAcceptInternational'
                            disabled={data?.isChecked ? false : true}
                            onChange={e=>{
                                setIntAccept(!intAccept);
                                handleFeatureInt(e);
                            }}
                            
                            // checked={data?.isChecked || false}
                            />
                       </div>
                    </div>
                    )
                }
            
        </form>
     </>
    );
};

export default Test;