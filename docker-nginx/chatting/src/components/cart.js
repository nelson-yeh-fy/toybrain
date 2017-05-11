import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActionsCreators from '../actions/cart';
import Shelf from './shelf';

class Cart extends Component {
    static propTypes = {
        // https://wecodetheweb.com/2015/06/02/why-react-proptypes-are-important/
        actions: React.PropTypes.object.isRequired,
        cart: React.PropTypes.arrayOf(
            React.PropTypes.object).isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const cartList = this.props.cart.map((item, idx) => {
            return <li key={idx}>{item}</li>;
        });
        return (
            <div className="Cart">
                <Shelf addItem={this.props.actions.addToCart} />
                <h2>Shopping Bag:</h2>
                <ol>
                    {cartList}
                </ol>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(cartActionsCreators, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
