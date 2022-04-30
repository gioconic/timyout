import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Profile-Pic"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+1 (250) 555-0199</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">
                    Lombard Court, Montreal, ON, Canada
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Location: </span>
                  <span className="itemValue">Montreal, Canada</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Current month hours" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Connections</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
