import Header from "../components/Header";
import { connect } from "react-redux";
import {
  addToCart,
  removeToCart,
  editToCart,editAddToCart
} from "../Services/Actions/actions";
const mapStateToProps = (state) => ({
  data: state
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeToCartHandler: (data) => dispatch(removeToCart(data)),
  editToCartHandler: (data) => dispatch(editToCart(data)),
  editAddToCartHandler: (data) => dispatch(editAddToCart(data))

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default Home;
