<template>
  <div class="flex justify-center p-1">
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
      <div class="flex justify-center imgBox">
        <img
          class="rounded-t-lg"
          :src="personnelItem.imgURL"
          alt=""
        />
      </div>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-1">{{personnelItem.Pname}} {{personnelItem.psurName}}</h5>
      <small class="text-danger-500">{{personnelItem.Unvan}}</small>
      <p class="text-gray-700 text-base mb-4 mt-2 line-clamp-2">
         {{personnelItem.shortDescription}}
        </p>
    
      </div>
    </div>
  </div>
</template>

<script>
export default{
    props:["personnelItem"]
}


</script>
