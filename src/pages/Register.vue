<script setup>
import { ref} from 'vue';
import axios from 'axios';
let name = ref('');
let email = ref('');
let password = ref('');
let password_confirmation = ref('');

function register(){
    axios.post('http://127.0.0.1:8000/register', {
    name: name.value,
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value,  
}).then(res => {
    console.log(res);
});
}
</script>

<template>
    <v-card class="mx-auto" max-width="344" title="User Registration">
        <v-container>
            <v-text-field v-model="name" color="primary" label="Name" variant="underlined"></v-text-field>

            <v-text-field v-model="email" color="primary" label="Email" variant="underlined"></v-text-field>

            <v-text-field v-model="password" color="primary" label="Password" placeholder="Enter your password" variant="underlined"></v-text-field>

            <v-text-field v-model="password_confirmation" color="primary" label="Password" placeholder="Enter your password"
                variant="underlined"></v-text-field>


        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="success" @click="register">
                Complete Registration

                <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>