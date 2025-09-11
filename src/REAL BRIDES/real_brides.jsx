import  { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Realbrides = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../data/information.json');
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
              <div className="card position-relative apihover">
                <img src={item.url} className="card-img-top " alt="..." />
                <div className="card-body position-absolute bottom-0 end-0 start-0 text-light realbrides_name">
                  <h5 className="d-block text-center">{item.name}</h5>
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

export default Realbrides;
