import React, { Component } from "react";
import LoanInterestCard from "./components/LoanInterestCard";
import LoanDisbursedCard from "./components/LoanDisbursedCard";
import LoanRequestcard from "./components/LoanRequestCard";
import AdvanceInterestCard from "./components/AdvanceInterestCard";
import SalarayAdvanceReceivedCard from "./components/SalaryAdvanceReceivedCard";
import SalarayAdvanceDisbursedCard from "./components/SalaryAdvanceDisbursed";
import OverdueLoans from "./components/OverdueLoans";
import UsersCard from "./components/UsersCard";
import DataCharts from "../dataCharts/LineCharts";
import DataBarCharts from "../dataCharts/BarCharts";

import "./featured.css";
import { Refresh, ShowChart, BarChart } from "@mui/icons-material";
import DatePicker from "../datePicker/DatePickerComponent";
import SingleSelect from "../selectDropDown/SingleSelect";

class Featured extends Component {
  state = {
    chartShown: false,
  }


  changeChart1 =(e)=> {
    this.setState({
      chartShown: false,
    })
  }

  changeChart2 =(e)=> {
    this.setState({
      chartShown: true,
    })
  }
  render(){
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-md-12 p-2">
              {/* <BreadCrumb/> */}
              <span className="fw-bold ps-2 fs-12">Dashboard</span>
              {/* <span className="ms-4">Available Funds Ksh. 437,171.08</span> */}
  
              <div className="featured-Buttons float-end ms-3">
                <DatePicker />
                <button className="refresh-button">
                  <Refresh />
                </button>
              </div>
            </div>
          </div>
  
          <div className="row">
            <UsersCard />
  
            <LoanInterestCard />
  
            <LoanRequestcard />
  
            <LoanDisbursedCard />
  
            <AdvanceInterestCard />
  
            <SalarayAdvanceReceivedCard />
  
            <SalarayAdvanceDisbursedCard />
  
            <OverdueLoans />
  
            {/* <TotalReceivedCard />
            <SmsCreditCard /> */}
          </div>
  
          <div className="row">
            <div className="col">
              <div className="card border">
                <div className="chart-header card-header ">
                  <div className="chart-header-name fw-bold">Charts</div>
  
                  <SingleSelect />
                  <button className={!this.state.chartShown ? "change-chart-button-diabled": "change-chart-button"} id="1" onClick={this.changeChart1}
                  disabled={!this.state.chartShown}>
                    <ShowChart/>
                  </button>
  
                  <button className={this.state.chartShown ? "change-chart-button-diabled": "change-chart-button"} id="1" onClick={this.changeChart2}
                  disabled={this.state.chartShown}>
                    <BarChart/>
                  </button>
                </div>
                {!this.state.chartShown ? <DataCharts /> : null }
                {this.state.chartShown ? <DataBarCharts /> : null }
                
                {/* <DataBarCharts /> */}
              </div>
            </div>
          </div>
  
  
          {/* <div className="row mt-3">
            <div className="col">
              <div className="card">
                <div className="chart-header card-header ">
                  <div className="chart-header-name fw-bold">DataTables</div>
                  
                </div>
                <DataTablesFeatured/>
               
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
  
};

export default Featured
