<template>
  <div class="object-rules-container content">
    <h3 class="title is-3">
      Object Rules
    </h3>
    <p>
      General rules for object definitions:
    </p>
    <ul>
      <li>
        Place the opening bracket on the same line as the object name.
      </li>
      <li>
        Use colon plus one space between each property and its value.
      </li>
      <li>
        Use quotes around string values, not around numeric values.
      </li>
      <li>
        Do not add a comma after the last property-value pair.
      </li>
      <li>
        Place the closing bracket on a new line, without 
        leading spaces.
      </li>
      <li>
        Always end&nbsp;an object definition with a semicolon.
      </li>
    </ul>
    <h3>
      Example
    </h3>
    var person = {<br>&nbsp;&nbsp;&nbsp; firstName: "John",<br>&nbsp;&nbsp;&nbsp; 
    lastName: "Doe",<br>&nbsp;&nbsp;&nbsp; age: 50,<br>&nbsp;&nbsp;&nbsp; eyeColor: 
    "blue"<br>}; 
    <p>
      Short objects can be written compressed, on one line, using spaces only 
      between properties, like this:
    </p>
    var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
  </div>
</template>