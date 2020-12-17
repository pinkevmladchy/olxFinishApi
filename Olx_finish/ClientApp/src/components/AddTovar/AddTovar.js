import React, { Component } from 'react';

export class AddTovar extends Component {
  render () {
    return (
      <div class="container">
      <section class="panel panel-default">
        <form action="designer-finish.html" class="form-horizontal" role="form">
          <div class="form-group">
            <label for="name" class="col-sm-3 control-label">Название продукта</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" name="name" id="name" placeholder="Название"></input>
            </div>
          </div> 
          <div class="form-group">
            <label for="about" class="col-sm-3 control-label">Описание</label>
            <div class="col-sm-9">
              <textarea class="form-control"></textarea>
            </div>
          </div> 
          <div class="form-group">
            <label for="name" class="col-sm-3 control-label">Ціна</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" name="name" id="name" placeholder="Ціна"></input>
            </div>
          </div> 
          <div class="form-group">
            <label for="tech" class="col-sm-3 control-label">Категорія</label>
            <div class="col-sm-3">
              <select class="form-control">
                <option value="">Виберіть</option>
                <option value="texnolog2">Айфон</option>
                <option value="texnolog3">Машинка</option>
              </select>
            </div>
          </div> 
          <div class="form-group">
            <label for="name" class="col-sm-3 control-label">Завантажте фото</label>
            <div class="col-sm-3">
              <input type="file" name="file_img"></input>
            </div>
          </div> 
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-9">
              <button type="submit" class="btn btn-primary">Добавити</button>
            </div>
          </div> 
        </form>
    </section>
    </div>
    );
  }
}
