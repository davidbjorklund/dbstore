import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';

import "./filter.css";

const Filter = ({filter}) => {
    return (
        <>
            {filter.map(x =>
                x.type === "dir" ? <Dir key={x.name} x={x}/>
                :
                x.type === "subdir" ? <Subdir key={x.name} y={x}/>
                :
                x.type === "checkbox" ? <Checkbox key={x.name} z={x} hidden={false} updateChecked={()=>{}}/>
                :
                <></>
            )}
        </>
    );
}

const Dir = ({x}) => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(-1);

    const toggleOpen = () => {
        setOpen(o => !o);
    }

    const handleActive = (i) => {
        setActive(_ => i);
    }



    return (
        <>
            <div className={open?"dir open":"dir"}>
                <div className="inner jc-spaceb" onClick={() => toggleOpen()}>
                    <p>{x.name}</p>
                    <div className="right-icon">
                    {open 
                        ? <img src={require(`../../../assets/icons/angle-down.svg`)} /> 
                        : <img src={require(`../../../assets/icons/angle-right-grey.svg`)} />}
                    </div>
                </div>
                {x.children && x.children.map((y,i) =>
                    y.type === "subdir" ? <Subdir key={y.name} y={y} hidden={!open} active={active===i} setActive={(x=i)=>handleActive(x)}/>
                    :
                    y.type === "checkbox" ? <Checkbox key={y.name} z={y} hidden={!open} updateChecked={()=>{}}/>
                    :
                    <></>
                )}
            </div>
            <div className="split"></div>
        </>
    )
}

const Subdir = ({y, hidden, active, setActive}) => {
    //console.log(y);
    const navigate = useNavigate();

    const [params, setParams] = y.children ? useState([
        ...(y.children.map((z) =>
            [z.name,z.checked]
        ))
    ]) : useState([]);
    const [link, setLink] = useState(y.link);

    const toggleOpen = () => {
        if(!active){
            setActive();
            y.link && navigate(link);
        }else {
            setActive(-1);
        }
    }

    const handleChecked = (i, v) => {
        let newParams = [...params.map((x,j)=>i!==j ? x : [x[0],v])];
        let newLink = y.link + "?" + newParams.map(x=>x[0].toLowerCase()+"="+x[1]).join("&")

        navigate(newLink);
        
        setLink(_ => newLink);
        
        setParams(p => newParams);
    }
    
    const updateLink = () => {
        let newLink = y.link + "?" + [...params.map(x=>x[0].toLowerCase()+"="+x[1])].join("&");
        y.children && setLink(_ => newLink);
    }

    useEffect(() => {
        updateLink();
    },[])

    return (
        <div className={active?"subdir active":"subdir"} hidden={hidden}>
            <div className="inner jc-spaceb" onClick={() => toggleOpen()}>
                <p>{y.name}</p>
                <div className="right-icon">
                {active 
                    ? <img src={require(`../../../assets/icons/angle-down.svg`)} /> 
                    : <img src={require(`../../../assets/icons/angle-right-grey.svg`)} />}
                </div>
            </div>
            
            {y.children && y.children.map((z,i) =>
            z.type === "checkbox" ? <Checkbox key={z.name} z={z} hidden={!active} updateChecked={(v)=>handleChecked(i,v)}/>
            :
            <></>
        )}
        </div>
    )
}

const Checkbox = ({z, hidden, updateChecked}) => {
    const [checked, setChecked] = useState(z.checked);

    const toggleChecked = () => {
        updateChecked(!checked);
        setChecked(c => !c);
    }

    return (
        <div className="checkbox" hidden={hidden}>   
            <div className="inner row jc-left" onClick={()=>toggleChecked()}>
                <input type="checkbox" checked={checked} onChange={()=>null}></input> <p>{z.name}</p>
            </div>
        </div>
    )
}

export default Filter;