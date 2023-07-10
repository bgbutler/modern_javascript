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

    getItembyId: function(id){
      let found = null;

      //  loop through to find the item
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },

    updateItem: function(name, calories){
      // convert calories to number
      calories = parseInt(calories);
      let found = null;
      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found
    },

    setCurrentitem: function(item){
      data.currentItem = item;
    },

    getCurrentItem: function(){
      return data.currentItem;
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
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
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

    // update list item

    updateListItem: function(item){
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // gives us a node list need to convert node list to array
      listItems = Array.from(listItems);

        listItems.forEach(function(listItem){

          const itemID = listItem.getAttribute('id');

          if(itemID === `item-${item.id}`){
            document.querySelector(`#${itemID}`).innerHTML = `
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i></a>`;
          }
        })
    },

    // clear input
    clearInput: function(){
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },

    addItemToForm: function(){
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },

    hideList: function(){
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    showTotalCalories: function(totalCalories){
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },

    clearEditState: function(){
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },

    showEditState: function(){
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
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

      // disable submit on enter (duplicates edits )
      document.addEventListener('keypress', function(e){
        if(e.keyCode === 12 || e.which ===13){
          e.preventDefault();
          return false;
        }
      });

    // edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click',
  itemEditClick);

  // update item event
  // edit icon click event
  document.querySelector(UISelectors.updateBtn).addEventListener('click',
itemUpdateSubmit);
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

  // edit item click
  const itemEditClick = function(e){
    if(e.target.classList.contains('edit-item')){
      // populate the current item
      // get the list item id
      const listId = e.target.parentNode.parentNode.id;

      // split the item-value from item and value
      const listIdArr = listId.split('-');

      const id = parseInt(listIdArr[1]);

      // get the item itself
      const itemToEdit = ItemCtrl.getItembyId(id);

      // set as current item
      ItemCtrl.setCurrentitem(itemToEdit);

      // add th item to the form value
      UICtrl.addItemToForm();

    }

    e.preventDefault();
  }

// update item submit
const itemUpdateSubmit = function(e){
  // get item input
const input = UICtrl.getItemInput();

// update the item
const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

// update the UI
  UICtrl.updateListItem(updatedItem);

  // get the total calories
  const totalCalories = ItemCtrl.getTotalCalories();

  // add total calories to the UI
  UICtrl.showTotalCalories(totalCalories);

  UICtrl.clearEditState();

  e.preventDefault();
}




  // create initializer for the app
  // Public Methods
  return {
    init: function(){
      // clear edit state = set initial state
      UICtrl.clearEditState();

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
