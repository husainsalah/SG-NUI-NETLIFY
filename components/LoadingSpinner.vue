<template>
  <div class="splash-screen">
    <div class="spinner-wrapper">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style scoped>
  .splash-screen {
    background: #ffffff;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 50;
  }

  .spinner-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }

  .spinner {
    width: 80px;
    height: 80px;
    margin: 100px auto;
    background-color: #dddddd;

    border-radius: 100%;
    -webkit-animation: sk-scaleout 1s infinite ease-in-out;
    animation: sk-scaleout 1s infinite ease-in-out;
  }

  .text-shadow-pop-top {
    -webkit-animation: text-shadow-pop-top 0.6s both;
    animation: text-shadow-pop-top 0.6s both;
  }

  @-webkit-keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
    }

    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }
</style>
