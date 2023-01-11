import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return<button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart Item</span>
      <span className={classes.bagde}> 0 </span>
    </button>
  
};

export default HeaderCartButton;
