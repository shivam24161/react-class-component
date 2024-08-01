import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      flag: false,
      cartItems: [],
    };
  }
  componentDidMount() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) =>
        this.setState({
          data: result.products,
        })
      );
  }
  addToCart(item) {
    const { id } = item;
    const index = this.state.cartItems.findIndex((ele) => ele.id === id);
    const ele = this.state.cartItems.find((ele) => ele.id === id);
    if (index !== -1) {
      let temp = [...this.state.cartItems];
      // temp[index].quantity = temp[index].quantity + 1;
      temp.splice(index,1,{...item,quantity:ele.quantity + 1})
      this.setState({
        cartItems: temp,
      });
    } else {
      this.setState({
        cartItems: [...this.state.cartItems, { ...item, quantity: 1 }],
      });
    }
    this.setState({
      flag: true,
    });
  }
  handleDelete(id) {
    const index = this.state.cartItems.findIndex((ele) => ele.id === id);
    let temp = [...this.state.cartItems];
    temp.splice(index, 1);
    this.setState({
      cartItems: temp,
    });
  }

  render() {
    return (
      <React.Fragment>
        <dialog
          open={this.state.flag}
          onBlur={() => {
            this.setState({
              flag: false,
            });
          }}
        >
          <table className="custom-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Quantiy</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cartItems.map((ele, ind) => {
                return (
                  <tr key={ind}>
                    <td>{ele.title}</td>
                    <td>{ele.price}</td>
                    <td>{ele.quantity}</td>
                    <td>
                      <button onClick={() => this.handleDelete(ele.id, ind)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </dialog>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "auto auto auto",
            rowGap: "40px",
            columnGap: "40px",
          }}
        >
          {this.state.data.map((ele, ind) => {
            return (
              <div className="card flex gap-8 align-center" key={ind}>
                <img src={ele.images[0]} height={40} width={40} />
                <div>
                  <h4>{ele.title}</h4>
                  <p>{ele.brand}</p>
                  <p>{ele.price}</p>
                  <button onClick={() => this.addToCart(ele, ind)}>
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
