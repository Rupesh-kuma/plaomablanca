import { useEffect, useState } from "react";

const Movies=()=>{
    const [movie,setMovie]=useState();
    useEffect(()=>{
        const movie=async()=>{
            try{
                const response=await fetch("../data/movie.json");
                if(!response.ok){
                    throw new Error("Network is the not found");
                }
                const moviepoint=await response.json();
                setMovie(moviepoint);
            }
            catch(error){
                console.error("response is not font",error);
            }
        };
        movie();
    },[]);
    console.log(movie);
    return(
        <>
        <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        (movie && movie.map((itme,i)=>{
                            return(
                                <div className="col" key={i}>
                        <div className="card border-0">
                            <img src={itme.url} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title">{itme.title}</h5>
                                <p className="card-text">{itme.paragraph}</p>
                                <div className="d-flex gap-5 justify-content-center">
                                    <i className="fa-solid fa-magnifying-glass-plus rounded-circle bg-dark text-light d-flex justify-content-center " style={{width:"50px", height:"50px",alignItems:"center"}}></i>
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
export default Movies;