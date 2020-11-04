import React, { Component } from "react";
import Card from "../Cards/Card";
import "./Recipes.css";
import thai from "../../shared/images/thai.jpg";
import chinese from "../../shared/images/chinese.jpg";
import japanese from "../../shared/images/japanese.jpg";
import colombian from "../../shared/images/colombian.jpeg";
import drinks from "../../shared/images/drinks.jpg";
import pizza from "../../shared/images/pizza.jpg";
import soup from "../../shared/images/soup.jpg";
import indian from "../../shared/images/indian.jpg";
import Recipe from "./Recipe";
// import loading from "../../shared/images/generating.gif";
import Loadingg from "../../shared/global/loading/Loading";

const APP_ID = "b6d2c104";
const APP_KEY = "af098d00e18f7829678e35f61df3c0c9";
//const newLoading = Loadingg

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCategories: true,
      displayRecipes: false,
      recipes: "",
    };
  }

  onImageClick = (searchKey) => {
    this.loadData(searchKey);

    this.setState({
      displayCategories: false,
      displayRecipes: true,
    });
  };

  loadData = (searchKey) => {
    fetch(
      `https://api.edamam.com/search?q=${searchKey}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          recipes: this.formatRecipe(data.hits),
          displayCategories: false,
          displayRecipes: true,
        });
      });
  };

  formatRecipe = (recipes) => {
    let tempRecipes = recipes.map((recipe) => {
      let image = recipe.recipe.image;
      let name = recipe.recipe.label;
      let ingredients = recipe.recipe.ingredients
        .map((ingredient) => ingredient.text)
        .join(", ");
      let calories = recipe.recipe.calories.toFixed(2);
      let healthLabels = recipe.recipe.healthLabels;

      let tempRecipe = { image, name, ingredients, calories, healthLabels };
      return tempRecipe;
    });

    return tempRecipes;
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.displayCategories ? (
          <div className="container">
            <div>
              <div className="row-title">
                <div className="col-sm-8">
                  <h1>World recepies </h1>
                </div>
                <div className="col-sm-2"></div>
              </div>
              <div className="row">
                <Card
                  itemName={thai}
                  searchItem="thai"
                  onImageClick={this.onImageClick}
                />
                <Card
                  itemName={chinese}
                  searchItem="chinese"
                  onImageClick={this.onImageClick}
                />
                <Card
                  itemName={japanese}
                  searchItem="japanese"
                  onImageClick={this.onImageClick}
                />
                <Card
                  itemName={colombian}
                  searchItem="colombian"
                  onImageClick={this.onImageClick}
                />
              </div>
              <div className="row">
                <Card
                  itemName={indian}
                  searchItem="indian"
                  onImageClick={this.onImageClick}
                />
                <Card
                  itemName={pizza}
                  searchItem="pizza"
                  onImageClick={this.onImageClick}
                />
                <Card
                  itemName={soup}
                  searchItem="soup"
                  onImageClick={this.onImageClick}
                />
                <Card
                  itemName={drinks}
                  searchItem="drinks"
                  onImageClick={this.onImageClick}
                />
              </div>
            </div>
          </div>
        ) : null}
        {this.state.displayRecipes && this.state.recipes ? (
          <div className="container2">
            {this.state.recipes.map((recipe, id) => {
              return <Recipe key={id} recipe={recipe} />;
            })}
            <a className="backbutton" href="/recipes">
              <button type="button" className="btn btn-primary btn-lg">
                Back
              </button>
            </a>
          </div>
        ) : this.state.displayRecipes ? (
          <div>
            {/* <div class="psoload">
              <div class="straight"></div>
              <div class="curve"></div>
              <div class="center"></div>
              <div class="inner"></div>{" "}
            </div> */}
            {/* <img className="loading" src={Loading} alt="loading.." /> */}
            {Loadingg()}
          </div>
        ) : null}
      </div>
    );
  }
}
