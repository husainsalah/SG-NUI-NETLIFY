<template>
  <div class="splash-screen">
    <div class="spinner-wrapper">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style scoped>
  .splash-screen {
    position: fixed;
    z-index: 50;
    width: 100vw;
    height: 100vh;
    background: #fff;
  }

  .spinner-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .spinner {
    width: 80px;
    height: 80px;
    margin: 100px auto;
    background-color: #ddd;
    border-radius: 100%;
    animation: sk-scaleout 1s infinite ease-in-out;
  }

  .text-shadow-pop-top {
    animation: text-shadow-pop-top 0.6s both;
  }

  @keyframes sk-scaleout {
    0% {
      transform: scale(0);
    }

    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  @keyframes sk-scaleout {
    0% {
      transform: scale(0);
    }

    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
</style>
