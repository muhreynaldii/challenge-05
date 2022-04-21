import React, { Fragment, useEffect} from "react";
import { Container } from "reactstrap";
import CardCars from "../../components/Card/CardCars";
import FormPencarian from "./../../components/FormPencarian/FormPencarian";
import { getSearch } from "../../redux/action/searchAction";
import { useSelector, useDispatch } from "react-redux";

function Search() {

  const dispatch = useDispatch();
  const {isLoading, data:searchData} = useSelector((state) => state.searchData)

  useEffect(()=>{
    dispatch(getSearch());
  },[])

  return (
    <Fragment>
      <Container
        fluid
        style={{ backgroundColor: "#F1F3FF", height: "266px" }}
      ></Container>
      <FormPencarian />
      <Container>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {searchData?.map((item) => {
              return (
                <div className="m-2">
                  <CardCars
                    id={item?.id}
                    name={item?.name}
                    image={item?.image}
                    price={item?.price}
                  />
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </Fragment>
  );
}

export default Search;
