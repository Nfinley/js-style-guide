<template>
  <div class="statement-rules-container content">
    <h3 class="title is-3">
      Statement Rules
    </h3>
    <p>
      General rules for simple statements:
    </p>
    <ul>
      <li>
        Always end a simple statement with a semicolon.
      </li>
    </ul>
    <h3>
      Examples:
    </h3>
    <br>
    <pre><code>var values = ["Volvo", "Saab", "Fiat"];
      var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };</code></pre>
      <br>
      <p>
        General rules for complex (compound) statements:
      </p>
      <ul>
        <li>
          Put the opening bracket at the end of the first line.
        </li>
        <li>
          Use one space before the opening bracket.
        </li>
        <li>
          Put the closing bracket on a new line, without leading spaces.
        </li>
        <li>
          Do not end a complex statement with a semicolon.
        </li>
      </ul>
      <h3 class="title is-3">
        Functions:
      </h3>
      function toCelsius(fahrenheit) {<br>
        return (5 / 9) * (fahrenheit - 32);<br>
      }
      <h3 class="title is-3">
        Loops:
      </h3>
    
     for (i = 0; i &lt; 5; i++) {<br>&nbsp;&nbsp;&nbsp; x += i;<br>} 
  
  <br>
    <h3 class="title is-3">
      Conditionals:
    </h3>
      
       if (time &lt; 20) {<br>&nbsp;&nbsp;&nbsp; greeting = "Good day";<br>} else {<br>&nbsp;&nbsp;&nbsp; 
     greeting = "Good evening";<br>} 
  


</div>
</template>