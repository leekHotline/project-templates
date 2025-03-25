<template>
  <div class="icon-box">
    <img :src="icon"  class="icon">
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
    props:{
        icon: String,
        label: String,
    }
}
</script>

<style scoped>
.icon-box {
  text-align: center;
}

.icon {
  width: 50px;
  height: 50px;
}

.label {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: #333;
}
</style>