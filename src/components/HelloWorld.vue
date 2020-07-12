<template>
  <v-container>
    <v-tooltip right>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">Left</v-btn>
      </template>
      <span v-code-tooltip="code"></span>
    </v-tooltip>
  </v-container>
</template>

<script>
  export default {
    name: "HelloWorld",

    data: () => ({
      code: `
<!Doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div class="abc" id="yes">
    <button>Hi</button>
    <input type="text" placeholder="No" readonly>
    <p>Never respect for others what you would not emerge for the dogma of it. Omnia varius caesium est.
      Never respect for others what you would not emerge for the dogma of it. Omnia varius caesium est.
      Never respect for others what you would not emerge for the dogma of it. Omnia varius caesium est.</p>
    <div><span>a</span></div>
  </div>
</body>
</html>
      `
    })
  };
</script>
