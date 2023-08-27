<template>
    <div class="w-full sm:flex h-screen">
        <div class="sm:w-1/2 bg-gray-300 pl-28  ">
            <h1 class="font-bold text-xl sm:mt-20">L O C A T I O N </h1>
            <p class="mt-6 ">No(95), AnawYaHtar Street, HlaingTharyar</p>
            <p>+959-78350-12-49</p>

            <h1 class="font-bold text-xl mt-20">F O L L O W   U S</h1>
            <div class="mt-6">
                <i class="fa-brands fa-facebook fa-xl  "></i>
                <i class="fa-brands fa-youtube fa-xl p-2"></i>
                <i class="fa-brands fa-telegram fa-xl p-2"></i>
            </div>
            <h4 class="mt-10 ">@2021 Privacy Policy</h4>

        </div>
        <div class="sm:w-1/2 bg-blue-100 p-6">
            <form >
                <h1 class="font-bold text-3xl sm:mt-20 font-serif ml-4"> Contact From</h1>
                <div class="mt-4">
                    <input  placeholder="Enter your Name" required class="w-[75%] border outline-none px-2 py-2 mt-2 ml-4" type="text">
                </div>
                <div class="mt-4">
                    <input placeholder="Enter a valid email address" required class="w-[75%] border outline-none px-2 py-2 mt-2 ml-4" type="password">
                </div>
                <div class="mt-4">
                    <textarea placeholder="Enter your Message" required class="w-[75%] border outline-none px-2 py-2 mt-2 ml-4" type="password"></textarea>
                </div>
                <div class="mt-4">
                    <button class=" rounded-sm px-4 py-1 mx-auto mt-1 ml-4  border text-gray-700 border-black  hover:bg-transparent transition">Submit</button>
                </div>             
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>