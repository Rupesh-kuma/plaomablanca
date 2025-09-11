import  { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Blogjson = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data/blog.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const pageCount = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data ? data.slice(startIndex, endIndex) : [];

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
          {currentItems.map((item, i) => (
            <div key={i} className="col">
              <div className="card height_blog">
                <div className=" apihover">
                <img src={item.url} className="card-img-top " alt="..." style={{height:"203px"}} />
                </div>
                <div className="card-body  ">
                  <h5 className="d-block my-4">{item.title}</h5>
                  <p className="d-block my-3 mb-4">{item.pararaph}</p>
                  <button className="btn border p-3">READ MORE</button>
                </div>
                <div className="card-footer">
                    <p className="pt-2">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {data && data.length > itemsPerPage && (
          <ReactPaginate
            previousLabel={"<<Previous"}
            nextLabel={"Next>>"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        )}
      </div>
    </>
  );
};

export default Blogjson;
