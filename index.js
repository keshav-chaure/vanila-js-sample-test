(function () {
    date = new Date().toString();      
    document.querySelector('#root').textContent= date;

    // Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Select the node that will be observed for mutations
const targetNode = document.querySelector('#root');
const targetButton = document.querySelector('#some_id');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Start observing the target node for configured mutations
observer.observe(document.body, config);


 // create a new div element
  const newDiv = document.createElement("h3");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  // add the newly created element and its content into the DOM
  document.body.insertBefore(newDiv, targetNode);

// When we click on the box let's use our friend
document.getElementById('button').addEventListener('click', function (e) {
    console.log("You finally clicked without jQuery "+e.target);
   
    targetNode.appendChild(newDiv);
    console.log(targetNode.childNodes.length);
   // targetNode.lastChild.appendChild(newDiv);
   // targetNode.childNodes[targetNode.childNodes.length].appendChild(newDiv);
   
  });

  document.getElementById('button1').addEventListener('click', function (e) {
    console.log("You finally clicked without jQuery "+e.target);
   
    
    console.log(targetNode.childNodes);
  });
  
//   document.addEventListener('click', function (event) {

// 	// If the clicked element doesn't have the right selector, bail
// 	if (!event.target.matches('.click-me')) return;

// 	// Don't follow the link
// 	event.preventDefault();

// 	// Log the clicked element in the console
// 	console.log(event.target);

// }, false);
  

// Later, you can stop observing
// observer.disconnect();

})();












/*



const template = document.createElement('template');
template.innerHTML = `
<style>
<style>
  .employee-card {
    font-family: sans-serif;
    background: #f4f6f7;
    width: 250px;
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 10px;
  }

</style>
<div class="employee-card">
  <img/>
  <div>
    <h3></h3>
    <div class="details">
      <p><slot name="id"/></p>
      <p><slot name="job title"/></p>
      <p><slot name="email"/></p>
      <p><slot name="phone"/></p>
    </div>
  </div>
</div>`;

class EmployeeCard extends HTMLElement{
 constructor(){
     super();
     this.attachShadow({ mode: 'open'});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
     this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
     this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');   
 } 

 connectedCallback(){
   this.h3 = this.getAttribute("name")
   this.render();
 }

 render(){
   this.h3;
 }
}
window.customElements.define('employee-card', EmployeeCard);
var element = window.document.getElementById("root");
var e1=document.createElement("<h3>");
element.appendChild(e1);
*/
//console.log(HTMLElement);
