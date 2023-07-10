const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// event Handler
//clearBtn.addEventListener('click', runEvent);

//clearBtn.addEventListener('dblclick', runEvent);

//clearBtn.addEventListener('mousedown', runEvent);

//clearBtn.addEventListener('mouseup', runEvent);

//card.addEventListener('mouseenter', runEvent);

//card.addEventListener('mouseleave', runEvent);

//card.addEventListener('mouseover', runEvent);

//card.addEventListener('mouseout', runEvent);

card.addEventListener('mousemove', runEvent);

function runEvent(e){
  console.log(`Event TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
