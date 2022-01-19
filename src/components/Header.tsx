// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Header: React.FC = () => {
//   return (
//     <HeaderWrapper>
//       <div>
//         <Link to={"/search"}>books-record</Link>
//         <nav>
//           <ul>
//             <li>
//               <Link to={"/"}>本を登録する</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </HeaderWrapper>
//   );
// };

// const HeaderWrapper: React.FC = styled.header`
//   background-color: #219315;
//   display: flex;
//   align-items: center;
//   > div {
//     > a {
//       color: white;
//       text-decoration: none;
//     }
//     > nav {
//       margin-left: auto;

//       > ul {
//         padding: 0;
//         display: flex;

//         margin: 0;
//         > li {
//           list-style-type: none;

//           > a {
//             color: white;
//             text-decoration: none;
//             padding: 0 20px;
//           }
//         }
//       }
//     }
//   }
// `;

// export default Header;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  green: {
    backgroundColor: "#219315",
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white",
  },
  register: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.green}>
          <Link to={"/search"} className={classes.title}>
            BookRecord
          </Link>
          <Link to={"/"} className={classes.register}>
            本を登録する
          </Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
