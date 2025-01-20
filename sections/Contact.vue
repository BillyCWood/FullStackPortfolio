<script setup lang="ts">
import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';


const schema = z.object({
    name: z.string({required_error: 'Name is required', invalid_type_error: 'Name must be a string',}),    
    email: z.string({required_error: 'Email is required'}).email('Invalid email'),
    phone: z.string({required_error: 'Phone Number is required'}),
    org: z.string().optional(),
    msg: z.string({required_error: 'A Message is required'}),
});

type Schema = z.output<typeof schema>;
    
    
const DEFAULT_STATE = {
    name: undefined,
    email: undefined,
    phone: undefined,
    org: '',
    msg: undefined,
}
    
const state = reactive(DEFAULT_STATE);
    
const mail = useMail();

async function onSubmit(event: FormSubmitEvent<Schema>){
    console.log(event.data);
    mail.send({
        text: 'Someone filled out the form, here\'s the info: \n\nName: ' + event.data.name + '\nemail: ' + event.data.email + '\phone: ' + event.data.phone + '\norg: ' + event.data.org + '\nMessage:\n' + event.data.msg + '',
    })

    alert('Thanks for filling out the form! I received your info! :)');
    
}

</script>
<template>
    <div id="contact" class="mb-64">
        <div class="text-center">
            <h1 class="font-medium text-4xl lg:text-6xl text-primary-light mb-5">Let's Connect</h1>
            <div class="text-lg lg:text-xl">email: billyc.wood4@gmail.com</div>
            <div class="text-lg lg:text-xl">phone: (406)794-1635</div>
        </div>
        <UForm ref="contactForm" :schema="schema" :state="state" class="mt-20 text-lg lg:text-xl w-96 mx-auto" @submit="onSubmit">
            <UFormGroup label="Name" name="name" class="mb-5">
                <UInput v-model="state.name" />
            </UFormGroup>
            
            <UFormGroup label="Email" name="email" class="mb-5">
                <UInput v-model="state.email" />
            </UFormGroup>

            <UFormGroup label="Phone" name="phone" class="mb-5">
                <UInput v-model="state.phone" />
            </UFormGroup>

            <UFormGroup label="Organization" name="org" class="mb-5">
                <UInput v-model="state.org" />
            </UFormGroup>

            <UFormGroup label="Message" name="msg" class="mb-5">
                <UTextarea v-model="state.msg" />
            </UFormGroup>

            <button type="submit">
                <Button message="Submit" />
            </button>
            
        </UForm>
    </div>

</template>