import { useEffect, useState } from "react";

const Editorial=()=>{
    const [editor,setEditor]=useState(null);
    useEffect(()=>{
        const editorial=async()=>{
            try{
                const response=await fetch("../data/editor.json");
                if(!response.ok){
                    throw new Error("Network error");
                }
                const stro=await response.json();
                console.log(stro);
                setEditor(stro);
            }
            catch(error){
                console.error("response not fatch",error);
            }
        };
        editorial();
    },[]);
    console.log(editor);
    return(
        <>
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        (editor && editor.map((itme,i)=>{
                            return(
                                <div className="col" key={i}>
                        <div className="card">
                            <img src={itme.url} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">{itme.title}</h5>
                                <p className="card-text">{itme.paragraph}</p>
                                <div className="d-flex gap-5 justify-content-center">
                                    <i className="fa-solid fa-magnifying-glass-plus rounded-circle bg-dark text-light d-flex justify-content-center " style={{width:"50px", height:"50px",alignItems:"center"}}></i>
                                    <i className="fa-solid fa-link rounded-circle rounded-circle bg-dark text-light d-flex justify-content-center " style={{width:"50px", height:"50px",alignItems:"center"}} ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                            )
                        }))
                    }
                </div>
        </div>

        </>
    )
}
export default Editorial;