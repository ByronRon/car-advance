import React from "react";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styles from "../styles/Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import SignUpButton from "./buttons/SignUpButton";
import LoginButton from "./buttons/LoginButton";
import LogoutButton from "./buttons/LogoutButton";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        {/* <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div> */}
        <div className={styles.items}>
          {!isAuthenticated && (
            <>
              <div className={styles.item}>
                <SignUpButton />
              </div>
              <div className={styles.item}>
                <LoginButton />
              </div>
            </>
          )}
          {isAuthenticated && (
            <>
              <div className={styles.item}>
                <LogoutButton />
              </div>
            </>
          )}
          <div className={styles.item}>
            <LanguageOutlinedIcon className={styles.icon} />
            English
          </div>
          <div className={styles.item}>
            <LanguageOutlinedIcon className={styles.icon} />
            English
          </div>
          <div className={styles.item}>
            <DarkModeOutlinedIcon
              className={styles.icon}
              // onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className={styles.item}>
            <FullscreenExitOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.item}>
            <NotificationsNoneOutlinedIcon className={styles.icon} />
            <div className={styles.counter}>1</div>
          </div>
          <div className={styles.item}>
            <ChatBubbleOutlineOutlinedIcon className={styles.icon} />
            <div className={styles.counter}>2</div>
          </div>
          <div className={styles.item}>
            <ListOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.item}>
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={styles.avatar}
            />
          </div>
        </div>
      </div>
    </div>

    // <Container>
    //   <Wrapper>
    //     <Left>
    //       <Languaje>EN</Languaje>
    //       <SearchContainer>
    //         <Input />
    //         <Search style={{ color: "gray", fontSize: 16 }} />
    //       </SearchContainer>
    //     </Left>
    //     <Center>
    //       <Logo>Car Advice</Logo>
    //     </Center>
    //     <Right>
    //       <MenuItem>REGISTER</MenuItem>
    //       <MenuItem>SIGN IN</MenuItem>
    //       <MenuItem>
    //         <Badge badgeContent={4} color="primary">
    //           <ShoppingCartOutlined />
    //         </Badge>
    //       </MenuItem>
    //     </Right>
    //   </Wrapper>
    // </Container>
  );
};

export default Navbar;
