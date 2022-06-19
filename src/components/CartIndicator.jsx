import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { FormControl } from "react-bootstrap";
import { useState } from "react";
import { loginUserAction } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    cartLength: state.cart.content.length,
    username: state.user.name
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (name) => {
      dispatch(loginUserAction(name));
    }
  };
};

const CartIndicator = ({ cartLength, username, loginUser }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div className="ml-auto mt-2">
      {username ? (
        <>
          <span> Welcome {username}</span>
          <Button color="primary" onClick={() => navigate("/cart")}>
            <FaShoppingCart />
            <span className="ml-2">{cartLength}</span>
          </Button>
        </>
      ) : (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            loginUser(name);
          }}
        >
          <FormControl
            type="text"
            placeholder="Log in"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIndicator);
