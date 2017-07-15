<template>
  <div class="naming-convention-container content">
    <h3 class="title is-3">
      Naming Conventions
    </h3>
    <p>
      Always use the same naming convention for all your code. For example:</p>
      <ul>
        <li>
          Variable and function names written as <strong>camelCase</strong>
        </li>
        <li>
          Global variables written in <strong>UPPERCASE </strong>(We don't, but it's quite common)
        </li>
        <li>
          Constants (like PI) written in <strong>UPPERCASE</strong>
        </li>
      </ul>
      <p>
        Should you use <strong>hyp-hens</strong>, <strong>camelCase</strong>, or <strong>under_scores</strong> in variable names?
      </p>
      <p>
        This is a question programmers often discuss. The answer depends on who you ask:
      </p>
      <p>
        <strong>Hyphens in HTML and CSS:</strong>
      </p>
      <p>
        HTML5 attributes can start with data- (data-quantity, data-price).
      </p>
      <p>
        CSS uses hyphens in property-names (font-size).
      </p>
      <p>
        Hyphens can be mistaken as subtraction attempts. Hyphens are not allowed in JavaScript names.
      </p>
      <p>
        <strong>Underscores:</strong>
      </p>
      <p>
        Many programmers prefer to use underscores (date_of_birth), especially in SQL 
        databases.
      </p>
      <p>
        Underscores are often used in PHP documentation.
      </p>
      <p>
        <strong>PascalCase:</strong>
      </p>
      <p>
        PascalCase is often preferred by C programmers.
      </p>
      <p>
        <strong>camelCase:</strong>
      </p>
      <p>
        camelCase is used by JavaScript itself, by jQuery, and other JavaScript libraries.
      </p>
      <p>
        Do not start names with a $ sign. It will put you in conflict with many JavaScript library names.
      </p>
    </div>
  </template>