import React, { useEffect } from "react";
import { useInvoiceContext } from "../context/invoice_context";
import LoginPage from "./loginpage";
import { useHistory } from 'react-router-dom';


const NewFiltersBtns = () => {
  const {
    invoices,
    total_invoices,
    updateFilter,
    filter, // to check
    filter: { draft, pending, paid },
    getTotalInvoices,
    getFilteredInvoices,
    toggleNewInvoiceModal,
  } = useInvoiceContext()!;

  const history = useHistory();


  useEffect(() => {
    getTotalInvoices();
    // eslint-disable-next-line
  }, [invoices])

  useEffect(() => {
    getFilteredInvoices();
    // eslint-disable-next-line
  }, [filter,invoices])

  const userLogin =()=>{
    history.push('/');
  }
  return (
    <div className="filters-btn-container">
      <div className="filter-btn-left">
        <h1>Invoices</h1>
        {total_invoices ? (
          <p>
            <span className="hidden-mobile-span">There are </span>
            {total_invoices} <span className="hidden-mobile-span">total </span>{" "}
            invoices
          </p>
        ) : (
          <p>No invoices</p>
        )}
      </div>
      <div className="filter-btn-right">
        <div className="dropdownMenu">
          <button className="dropdowBtn">
            Filter<span className="hidden-mobile-span">By Status</span>
            <span>
              <img src="/assets/icon-arrow-down.svg" alt=""></img>
            </span>
          </button>
          <div className="dropdown-content">
            <div>
              <input
                type="checkbox"
                id="draft"
                name="draft"
                checked={draft}
                onChange={updateFilter}
              ></input>
              <label htmlFor="draft"> Draft</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="pending"
                name="pending"
                checked={pending}
                onChange={updateFilter}
              ></input>
              <label htmlFor="pending"> Pending</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="paid"
                name="paid"
                checked={paid}
                onChange={updateFilter}
              ></input>
              <label htmlFor="paid">Paid</label>
            </div>
          </div>
        </div>
        <div className="new-btn-container" onClick={toggleNewInvoiceModal}>
          <div className="plus-container">
            <img src="/assets/icon-plus.svg" alt=""></img>
          </div>
          <span>
            New <span className="hidden-mobile-span">Invoice</span>
          </span>
        </div>

      <br/>
      <div>
        <button className="new-btn-container" style={{ textAlign: "center", color: "white" }} onClick={userLogin}> Logout </button>
      </div>
      </div>
    </div>
  );
};

export default NewFiltersBtns;
