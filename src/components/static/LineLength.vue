<template>
  <div class="line-length-container content">
    <h3 class="title is-3">
      Line Length &lt; {{ lineLength }}
    </h3>
    <p>
      For readability, avoid lines longer than {{ lineLength }} characters.
    </p>
    <p>
      If a JavaScript statement does not fit on one line, the best place to break 
      it, is after an operator or a comma.
    </p>
    <h3>
      Example
    </h3>
    document.getElementById("demo").innerHTML =<br>
    &nbsp;&nbsp;&nbsp; "Hello Dolly.";
    <a>
      Try it Yourself
    </a>
  </div>
</template>

<script>
  
export default {
  data() {
    return {
      lineLength: 80
    }
  }
}

</script>