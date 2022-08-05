<template>
  <div class="flex justify-center">
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
      <a href="#!">
        <img
          class="rounded-t-lg"
          :src="personnelItem.imgURL"
          alt=""
        />
      </a>
      <div class="p-6">
        <h5 class="text-gray-900 text-xl font-medium mb-1">{{personnelItem.Pname}} {{personnelItem.psurName}}</h5>
      <small class="text-danger-500">{{personnelItem.Unvan}}</small>
      <p class="text-gray-700 text-base mb-4 mt-2">
         {{personnelItem.shortDescription}}
        </p>
        <button
          type="button"
          class="
            inline-block
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
          "
        >
          Button
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    props:["personnelItem"]
}


</script>
