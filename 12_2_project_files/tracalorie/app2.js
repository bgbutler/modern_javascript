// Storage Controller

// Item Controller
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure/State (React)
  const data = {
    items: [
      // {id:0, name: 'Steak Dinner', calories: 1200},
      // {id:1, name: 'Cookie', calories: 400},
      // {id:2, name: 'Eggs', calories: 300}
    ],
    currentItem: null,
    totalCalories: 0
  }

  // Public Methods
  // Whatever we return is public to chrome
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      // create id as an auto increment
      let ID;
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1
      } else {
        ID = 0;
      }
      // convert calories to number
      calories = parseInt(calories);

      // create a new item
      newItem = new Item(ID, name, calories);

      // push to data Structure add to items array
      data.items.push(newItem);

      return newItem;

    },

    getTotalCalories: function(){
      // loop through item and add Calories
      let total = 0;
      data.items.forEach(function(item){
        total += item.calories
      });

      // set total in data structure
      data.totalCalories = total;

      return data.totalCalories

    },
    logData: function(){
      return data;
    }
  }
})();




// UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }

  // Public Methods
  return {
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function(){
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }

    },
    addListItem: function(item){

      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';

      // create li item
      const li = document.createElement('li');

      // add the class
      li.className = 'collection-item';

      // add the id
      li.id = `item-${item.id}`;

      // add the html
      li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
      <i class="edit-item fa fa-pencil"></i></a>`;

      // insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
    },
    // clear input
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },

    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },

    getSelectors: function(){
      return UISelectors;
    }
  }
})();



// App Controller
const App = (function(ItemCtrl, UICtrl){

  // load event listeners
  const loadEventListeners = function(){
    // Get UI Selecotrs
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener(
      'click', itemAddSubmit);
  }

  // Add item submit
  const itemAddSubmit = function(e){
    // validate item get form input from  UI controller
    const input = UICtrl.getItemInput();

    // make sure both item and calories filled
    if(input.name !== '' && input.calories !== ''){
      // add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // add item to UI list
      UICtrl.addListItem(newItem)

      // get the total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      // clear fields
      UICtrl.clearInput();
      }
    e.preventDefault();
  }

  // create initializer for the app
  // Public Methods
  return {
    init: function(){

      // fetch items from data structure
      const items = ItemCtrl.getItems();

      // check if any items
      if(items.length === 0){
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // get the total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();

    }
  }


})(ItemCtrl, UICtrl);


// test initialize App
App.init();
