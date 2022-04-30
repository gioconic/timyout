import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      facility: "Montreal 01",
      img: "https://images.unsplash.com/photo-1470181942237-78ce33fec141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80",
      employee: "John Smith",
      nextShift: "18 April",
      monthlyHours: 12,
      profile: "Packaging",
      status: "Connected",
    },
    {
      id: 2235235,
      facility: "Montreal 01",
      img: "https://images.unsplash.com/photo-1470181942237-78ce33fec141?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80",
      employee: "Michael Doe",
      nextShift: "18 April",
      monthlyHours: 10,
      profile: "Logistics",
      status: "Disconnected",
    },
    {
      id: 2342353,
      facility: "Québec 03",
      img: "https://images.unsplash.com/photo-1576771304215-6d4d30f7bb63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      employee: "Patrick Johnson",
      nextShift: "18 April",
      monthlyHours: 35,
      profile: "Packaging",
      status: "Disconnected",
    },
    {
      id: 2357741,
      facility: "Montreal 02",
      img: "https://images.unsplash.com/photo-1526669754135-c1babeb8c542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80",
      employee: "Jane Smith",
      nextShift: "18 April",
      monthlyHours: 20,
      profile: "Manufacturing",
      status: "Connected",
    },
    {
      id: 2342355,
      facility: "Québec 03",
      img: "https://images.unsplash.com/photo-1576771304215-6d4d30f7bb63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
      employee: "April Carol",
      nextShift: "18 April",
      monthlyHours: 45,
      profile: "Manufacturing",
      status: "Disconnected",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Employee ID</TableCell>
            <TableCell className="tableCell">Facility</TableCell>
            <TableCell className="tableCell">Employee</TableCell>
            <TableCell className="tableCell">Next Shift</TableCell>
            <TableCell className="tableCell">Monthly Hours</TableCell>
            <TableCell className="tableCell">Labor profile</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.facility}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.employee}</TableCell>
              <TableCell className="tableCell">{row.nextShift}</TableCell>
              <TableCell className="tableCell">{row.monthlyHours}</TableCell>
              <TableCell className="tableCell">{row.profile}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
