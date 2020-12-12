import React from "react";
import "./cascadingdropdown.css";

function CascadingDropdown() {
    let subjectObject = {
        "Front-end": {
          HTML: ["Links", "Images", "Tables", "Lists"],
          CSS: ["Borders", "Margins", "Backgrounds", "Float"],
          JavaScript: ["Variables", "Operators", "Functions", "Conditions"]
        },
        "Back-end": {
          PHP: ["Variables", "Strings", "Arrays"],
          SQL: ["SELECT", "UPDATE", "DELETE"]
        }
      }

      
window.onload = function() {
    let category = document.querySelector("#category"),
      subject = document.querySelector("#subject"),
      topic = document.querySelector("#topic");
    
    for (let x in subjectObject) {
      category.options[category.options.length] = new Option(x, x);
    }
    
    category.onchange = function() {
      topic.length = 1;
      subject.length = 1;
      for (let y in subjectObject[this.value]) {
        subject.options[subject.options.length] = new Option(y, y);
      }
    };
  
    subject.onchange = function() {
      topic.length = 1;
      var z = subjectObject[category.value][this.value];
      z.forEach(a=>topic.options[topic.options.length] = new Option(a,a))
    };
    
  };

  return (
    <div className="cascade__dropdown">
      <h2>Cascading dropdown</h2>
      <form>
        Category : 
        <select name="category" id="category">
          <option value="" selected="selected">
            Select Category
          </option>
        </select>
        <br />
        <br />
        Subject :
        <select name="subject" id="subject">
          <option value="" selected="selected">
            Select Subject
          </option>
        </select>
        <br />
        <br />
        Topic :
        <select name="topic" id="topic">
          <option value="" selected="selected">
            Select Topic
          </option>
        </select>
        <br />
        <br />
        <input type="submit" value="Submit" id="cascade__btn" />
      </form>
    </div>
  );
}

export default CascadingDropdown;
