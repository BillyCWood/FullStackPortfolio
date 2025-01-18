<template>
    <div id="contact" class="mb-64">
        <div class="text-center">
            <h1 class="font-medium text-4xl lg:text-6xl text-primary-light mb-5">Let's Connect</h1>
            <div class="text-lg lg:text-xl">email: billyc.wood4@gmail.com</div>
            <div class="text-lg lg:text-xl">phone: (406)794-1635</div>
        </div>

        <form class="mt-20 text-lg lg:text-xl">
            <div class="mx-auto w-96 mb-5">
                <label for="name"></label>
                <input type="text" id="name" name="name" placeholder="Name" class="bg-secondary-light/20 dark:bg-secondary-dark/70 border-[1px] border-black dark:border-white w-96 px-2 py-1 placeholder:text-black dark:placeholder:text-white" />
            </div>
            <div class="mx-auto w-96  mb-5">
                <label for="email"></label>
                <input type="email" id="email" name="email" placeholder="Email" class="bg-secondary-light/20 dark:bg-secondary-dark/70 border-[1px] border-black dark:border-white w-96 px-2 py-1 placeholder:text-black dark:placeholder:text-white" />
            </div>
            <div class="mx-auto w-96  mb-5">
                <label for="phone"></label>
                <input type="tel" id="phone" name="phone" placeholder="Phone" class="bg-secondary-light/20 dark:bg-secondary-dark/70 border-[1px] border-black dark:border-white w-96 px-2 py-1 placeholder:text-black dark:placeholder:text-white" />
            </div>
            <div class="mx-auto w-96  mb-5">
                <label for="org"></label>
                <input type="text" id="org" name="org" placeholder="Organization" class="bg-secondary-light/20 dark:bg-secondary-dark/70 border-[1px] border-black dark:border-white w-96 px-2 py-1 placeholder:text-black dark:placeholder:text-white" />
            </div>
            <div class="mx-auto w-96  mb-5">
                <label for="msg"></label>
                <textarea id="msg" name="msg" placeholder="Message" class="bg-secondary-light/20 dark:bg-secondary-dark/70 border-[1px] border-black dark:border-white h-64 w-96 px-2 py-1 placeholder:text-black dark:placeholder:text-white text-base" />
            </div>
            <div class="mx-auto w-56 place-items-center">
                <Button message="Submit" />
            </div>
        </form>
    </div>
</template>