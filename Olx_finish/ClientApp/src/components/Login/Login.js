import React, { Component } from 'react';

export class Login extends Component {

  render () {
    return (
      <div className="container">
      <div className="row">
          <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
              <div className="row">
                  <div className="col-lg-6 col-md-8 mx-auto">
                      <div className="card rounded shadow shadow-sm">
                          <div className="card-header">
                              <h3 className="mb-0">Увійти</h3>
                          </div>
                          <div className="card-body">
                              <form className="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                                  <div className="form-group">
                                      <label for="uname1">Номер телефону</label>
                                      <input type="text" className="form-control form-control-lg rounded-0" name="uname1" id="uname1" required=""/>
                                      <div className="invalid-feedback">Oops, you missed this one.</div>
                                  </div>
                                  <div className="form-group">
                                      <label>Пароль</label>
                                      <input type="password" className="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password"></input>
                                      <div className="invalid-feedback">Enter your password too!</div>
                                  </div>
                                  <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary mr-1">Увійти</button>
                                                <button type="submit" className="btn btn-primary ">Зареєструватись</button>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  }
}