import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ListarGenerica extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items
    };
  }

  render() {
    const { items } = this.state;
    console.log("items", items);

    if (items.lenght === 0) {
    } else {
      return (
        <>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-8">
                <br />
                <div class="card">
                  <div class="card-header"> Anuncios </div>
                  <div class="card-body table-responsive ">
                    <table class="table table-striped text-center">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Título</th>
                          <th>Preço</th>
                          <th>Operação</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, t) => (
                          <tr>
                            <td>{t}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>
                              <Link
                                className="btn btn-info"
                                to={"/view/" + item._id}
                              >
                                Visualizar
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
