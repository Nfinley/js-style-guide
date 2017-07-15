<template>
  <div class="lowercase-file-names-container content">
    <h3 class="title is-3">
      Use Lower Case File Names
    </h3>
    <p>
      Most web servers (Apache, Unix) are case sensitive about file names:
    </p>
    <p>
      london.jpg cannot be accessed as London.jpg.
    </p>
    <p>
      Other web servers (Microsoft, IIS) are not case sensitive:
    </p>
    <p>
      london.jpg can be accessed as London.jpg or london.jpg.
    </p>
    <p>
      If you use a mix of upper and lower case, you have to be extremely 
      consistent.
    </p>
    <p>
      If you move from a case insensitive, to a case sensitive server, even small 
      errors can break your web site.
    </p>
    <p>
      To avoid these problems, always use lower case file names (if possible).
    </p>
  </div>
</template>