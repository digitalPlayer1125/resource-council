<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
*{
  font-family: 'Noto Sans KR', sans-serif;
}
.linksep{
  border-right: 1px solid #d2d2d7;
  margin-right: 7px;
  padding-right: 10px;
  display: inline-block;
}
.text--green{
  color: #3AAFA9 !important;
}
.border--green{
  border-color: #3AAFA9 !important;
}
.bg--green{
  background: #3AAFA9 !important;
}
.bg-darker{
  background: #673ab7 !important;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
</style>
